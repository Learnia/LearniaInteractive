import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: require('@/layout/LandingPage')
    },
    {
      path: '/inside',
      name: 'Inside',
      component: require('@/layout/Inside')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: require('@/components/Dashboard/index')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
