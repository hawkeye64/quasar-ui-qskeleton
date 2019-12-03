// import { QBadge } from 'quasar'

// Util
import props from '../utils/props.js'

import SkeletonBase from '../mixins/skeleton-base'
import BulletList from './views/bullet-list'
import Code from './views/code'
import Facebook from './views/facebook'
import Instagram from './views/instagram'
import Linkedin from './views/linkedin'
import Table from './views/table'
import Twitch from './views/twitch'

export default {
  name: 'QSkeleton',

  props: {
    view: String,
    ...props
  },

  computed: {
    renderProps () {
      let component = SkeletonBase
      switch (this.view) {
        case 'bullet-list':
          component = BulletList
          break
        case 'code':
            component = Code
          break
        case 'facebook':
            component = Facebook
          break
        case 'instagram':
          component = Instagram
          break
        case 'linkedin':
          component = Linkedin
          break
        case 'table':
          component = Table
          break
        case 'twitch':
            component = Twitch
          break
      }

      return { component }
    }
  },

  render (h) {
    const { component } = this.renderProps

    const data = {
      staticClass: 'q-skeleton',
      props: {
        ...this.$props
      },
      on: {
        ...this.$listeners
      },
      scopedSlots: this.$scopedSlots
    }

    return h(component, data)
  }
}
