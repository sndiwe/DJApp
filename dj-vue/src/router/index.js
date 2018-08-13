import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import newLogPage from '@/components/newLogPage'
import openLogPage from '@/components/openLogPage'
import successPage from '@/components/successPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      props: true
    },
    {
      path: '/newLog',
      name: 'newLogPage',
      component: newLogPage,
      props: true
    },
    {
      path: '/openLog',
      name: 'openLogPage',
      component: openLogPage,
      props: true
    },
    {
      path: '/successPage',
      name: 'successPage',
      component: successPage,
      props: true
    }
  ]
})
