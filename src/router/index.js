import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Error from '@/pages/Error'
import PostDetail from "@/pages/postDetails"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: 'PostDetail',
      name: 'PostDetail',
      component: PostDetail
    },
    // 404
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
