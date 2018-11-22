// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {Button} from 'mint-ui'
import router from './router'
import store from './state'
import ToHeader from './components/ToHeader/ToHeader.vue'

Vue.component('ToHeader',ToHeader)
Vue.component(Button.name,Button)

import './mock/mockServer'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render:h => h(App),
  router,
  store
})
