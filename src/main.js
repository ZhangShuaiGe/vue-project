import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import Vueresource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'
import Axios from 'axios'

Vue.use(ElementUI)
Vue.use(Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
