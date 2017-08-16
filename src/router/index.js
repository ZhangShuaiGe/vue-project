import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Index from '@/pages/Index'
import Error from '@/pages/Error'
import PostDetail from "@/pages/postDetails"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'index',
          component: Index
        },
        {
          path: 'PostDetail',
          name: 'PostDetail',
          component: PostDetail
        }
      ]
    },
    // 不需要公共头部和尾部的走下面路由
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
