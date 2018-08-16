import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import store from './store'

// Router
import router from './router'

import MultiLanguage from 'vue-multilanguage'
import Translations from './js/lang'

Vue.use(Vuetify)

Vue.use(MultiLanguage, Translations)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  template: '<App/>',
  router
}).$mount('#app')
