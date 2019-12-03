import { version } from '../package.json'

import QSkeleton from './components/QSkeleton'


export {
  version,
  QSkeleton
}

export default {
  version,
  QSkeleton,

  install (Vue) {
    Vue.component(QSkeleton.name, QSkeleton)
  }
}
