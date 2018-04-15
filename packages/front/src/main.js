import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router/router'
import store from './store/store'

import './env/env' // please ensure env (and therefore dotenv) import remains on top of src imports
import App from './App.vue'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
