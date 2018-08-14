// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Icon from 'buefy/src/components/icon'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(Icon)
// Vue.use(DatePicker)
// Vue.component(Buefy.Icon.name, Buefy.Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
