// Util
import props from '../../utils/props.js'

import SkeletonBase from '../../mixins/skeleton-base'

export default {
  name: 'Instagram',

  mixins: [
    SkeletonBase
  ],

  props: {
    ...props
  },

  computed: {
    computedWidth () {
      return 400
    },
    computedHeight () {
      return 100
    }
  },

  methods: {
    __renderDefault (h) {
      const options = [
        { x: 0, y: 70, rx: 4, ry: 4, width: 200, height: 10 },
        { x: 0, y: 90, rx: 4, ry: 4, width: 400, height: 10 }
      ]
      return [
        h('circle', {
          attrs: {
            cx: 30,
            cy: 30,
            r: 30
          }
         }),
         ...options.map(option => this.__renderDefaultItem(h, option))
      ]
    }
  }
}