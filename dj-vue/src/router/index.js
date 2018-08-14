import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homePage'
import newLogPage from '@/components/newLogPage'
import openLogPage from '@/components/openLogPage'
import successPage from '@/components/successPage'
import loginPage from '@/components/loginPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/homePage',
    name: 'homePage',
    component: homePage,
    props: true
  },
  {
    path: '/',
    name: 'loginPage',
    component: loginPage,
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
