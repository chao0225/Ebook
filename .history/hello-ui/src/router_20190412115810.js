import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          name:'list',
          component:()=>import('./views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component:()=>import('./views/User.vue')
        },
      ]
    },
    {
      path: '/add',
      name: 'add',
      component:()=>import('./views/Add.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
  ]
})
