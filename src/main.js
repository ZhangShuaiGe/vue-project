import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import Axios from 'axios'
import Markdown from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(ElementUI)
Vue.use(Axios)
Vue.use(Markdown)

// 配置全局 axios请求 默认前缀带着/api
Axios.defaults.baseURL = '/api';
// 注册全局方法，
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
