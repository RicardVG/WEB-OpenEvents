import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Notifications from '@kyvg/vue3-notification'

library.add(fas)

createApp(App)
.use(store)
.use(router)
.use(Notifications)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

