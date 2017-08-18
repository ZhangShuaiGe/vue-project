import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Error from '@/pages/Error'
import PostDetail from "@/pages/postDetails"
import Login from  "@/pages/login"
import Personal from "@/pages/personal"
import Newtopic from "@/pages/Newtopic"
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
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/personal',
      name: '/personal',
      component: Personal
    },
    {
      path: '/Newtopic',
      name: '/Newtopic',
      component: Newtopic
    },
    // 404
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
