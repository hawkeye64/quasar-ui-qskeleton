const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const rollup = require('rollup')
const uglify = require('uglify-es')
const buble = require('@rollup/plugin-buble')
const json = require('@rollup/plugin-json')
const nodeResolve = require('rollup-plugin-node-resolve')

const buildConf = require('./config')
const buildUtils = require('./utils')

const rollupPlugins = [
  nodeResolve({
    extensions: ['.js'],
    preferBuiltins: false
  }),
  json(),
  buble({
    objectAssign: 'Object.assign'
  })
]

const builds = [
  {
    rollup: {
      input: {
        input: resolve(`entry/index.esm.js`)
      },
      output: {
        file: resolve(`../dist/index.esm.js`),
        format: 'es'
      }
    },
    build: {
      // unminified: true,
      minified: true
    }
  },
  {
    rollup: {
      input: {
        input: resolve(`entry/index.common.js`)
      },
      output: {
        file: resolve(`../dist/index.common.js`),
        format: 'cjs'
      }
    },
    build: {
      // unminified: true,
      minified: true
    }
  },
  {
    rollup: {
      input: {
        input: resolve(`entry/index.umd.js`)
      },
      output: {
        name: 'QSkeleton',
        file: resolve(`../dist/index.umd.js`),
        format: 'umd'
      }
    },
    build: {
      unminified: true,
      minified: true,
      minExt: true
    }
  }
]

// Add your asset folders here
// addAssets(builds, 'icon-set', 'iconSet')
// addAssets(builds, 'lang', 'lang')

build(builds)
.then(() => {
  require('./build.api')
})

/**
 * Helpers
 */

function resolve (_path) {
  return path.resolve(__dirname, _path)
}

function addAssets (builds, type, injectName) {
  const
    files = fs.readdirSync(resolve('../../ui/src/components/' + type)),
    plugins = [ buble(bubleConfig) ],
    outputDir = resolve(`../dist/${type}`)

    fse.mkdirp(outputDir)

  files
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
      const name = file.substr(0, file.length - 3).replace(/-([a-z])/g, g => g[1].toUpperCase())
      builds.push({
        rollup: {
          input: {
            input: resolve(`../src/components/${type}/${file}`),
            plugins
          },
          output: {
            file: addExtension(resolve(`../dist/${type}/${file}`), 'umd'),
            format: 'umd',
            name: `QSkeleton.${injectName}.${name}`
          }
        },
        build: {
          minified: true
        }
      })
    })
}

function build (builds) {
  return Promise
    .all(builds.map(genConfig).map(buildEntry))
    .catch(buildUtils.logError)
}

function genConfig (opts) {
  Object.assign(opts.rollup.input, {
    plugins: rollupPlugins,
    external: [ 'vue', 'quasar' ]
  })

  Object.assign(opts.rollup.output, {
    banner: buildConf.banner,
    globals: { vue: 'Vue', quasar: 'Quasar' }
  })

  return opts
}

function addExtension (filename, ext = 'min') {
  const insertionPoint = filename.lastIndexOf('.')
  return `${filename.slice(0, insertionPoint)}.${ext}${filename.slice(insertionPoint)}`
}

function buildEntry (config) {
  return rollup
    .rollup(config.rollup.input)
    .then(bundle => bundle.generate(config.rollup.output))
    .then(({ output }) => {
      const code = config.rollup.output.format === 'umd'
        ? injectVueRequirement(output[0].code)
        : output[0].code

      return config.build.unminified
        ? buildUtils.writeFile(config.rollup.output.file, code)
        : code
    })
    .then(code => {
      if (!config.build.minified) {
        return code
      }

      const minified = uglify.minify(code, {
        compress: {
          pure_funcs: ['makeMap']
        }
      })

      if (minified.error) {
        return Promise.reject(minified.error)
      }

      return buildUtils.writeFile(
        config.build.minExt === true
          ? addExtension(config.rollup.output.file)
          : config.rollup.output.file,
        buildConf.banner + minified.code,
        true
      )
    })
    .catch(err => {
      console.error(err)
      process.exit(1)
    })
}

function injectVueRequirement (code) {
  const index = code.indexOf(`Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue`)

  if (index === -1) {
    return code
  }

  const checkMe = ` if (Vue === void 0) {
    console.error('[ Quasar ] Vue is required to run. Please add a script tag for it before loading Quasar.')
    return
  }
  `

  return code.substring(0, index - 1) +
    checkMe +
    code.substring(index)
}
