import { version } from '../package.json'

import QSkeleton from './components/QSkeleton'
import QSkeletonBulletList from './components/QSkeletonBulletList'
import QSkeletonCode from './components/QSkeletonCode'
import QSkeletonFacebook from './components/QSkeletonFacebook'
import QSkeletonInstagram from './components/QSkeletonInstagram'
import QSkeletonLinkedin from './components/QSkeletonLinkedin'
import QSkeletonTable from './components/QSkeletonTable'
import QSkeletonTwitch from './components/QSkeletonTwitch'


export {
  version,
  QSkeleton,
  QSkeletonBulletList,
  QSkeletonCode,
  QSkeletonFacebook,
  QSkeletonInstagram,
  QSkeletonLinkedin,
  QSkeletonTable,
  QSkeletonTwitch
}

export default {
  version,
  QSkeleton,
  QSkeletonBulletList,
  QSkeletonCode,
  QSkeletonFacebook,
  QSkeletonInstagram,
  QSkeletonLinkedin,
  QSkeletonTable,
  QSkeletonTwitch,

  install (Vue) {
    Vue.component(QSkeleton.name, QSkeleton)
    Vue.component(QSkeletonBulletList.name, QSkeletonBulletList)
    Vue.component(QSkeletonCode.name, QSkeletonCode)
    Vue.component(QSkeletonFacebook.name, QSkeletonFacebook)
    Vue.component(QSkeletonInstagram.name, QSkeletonInstagram)
    Vue.component(QSkeletonLinkedin.name, QSkeletonLinkedin)
    Vue.component(QSkeletonTable.name, QSkeletonTable)
    Vue.component(QSkeletonTwitch.name, QSkeletonTwitch)
  }
}
