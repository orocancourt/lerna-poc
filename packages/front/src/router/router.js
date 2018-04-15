import Vue from 'vue'
import Router from 'vue-router'

import Homepage from '../components/Homepage/Homepage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
  ],
})
