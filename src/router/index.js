import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index'
// import Error from '@/pages/Error'
// import PostDetail from "@/pages/postDetails"
// import Login from  "@/pages/login"
// import Personal from "@/pages/personal"
// import Newtopic from "@/pages/Newtopic"
Vue.use(Router)

const Index = resolve => require(['../pages/Index'], resolve)
const PostDetail = resolve => require(['../pages/postDetails'], resolve)
const Error = resolve => require(['../pages/Error'], resolve)
const Login = resolve => require(['../pages/login'], resolve)
const Personal = resolve => require(['../pages/personal'], resolve)
const Newtopic = resolve => require(['../pages/Newtopic'], resolve)
const shop = resolve => require(['../pages/shop'], resolve)

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
    {
      path: '/shop',
      name: '/shop',
      component: shop
    },
    // 404
    {
      path: '*',
      name: '404',
      component: Error
    }
  ]
})
