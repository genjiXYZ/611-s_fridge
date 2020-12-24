import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



import './plugins/toast'

import dayjs from './plugins/day'
import http from './plugins/http'
import animejs from "animejs";

import Validate from './plugins/validate'
Vue.use(Validate)

Vue.prototype.$animejs = animejs;
Vue.prototype.$dayjs = dayjs
Vue.prototype.$http = http






import './style/theme/index.css'
import './style/theme/fix.css'
import element from './plugins/elment.js'
Vue.use(element)













new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
