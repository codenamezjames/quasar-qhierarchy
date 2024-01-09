import Zhierarchy from '../src/components/Zhierarchy.vue'

import pkg from '../package.json'
const { version } = pkg

function install (app) {
  app.component(Zhierarchy.name, Zhierarchy)
}

export {
  version,
  Zhierarchy,

  install
}
