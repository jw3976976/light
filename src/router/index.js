import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/home/index.vue'
//使用按需引用的方式，并不是很完善，使用时需要使用一些插件，如@babel/plugin
//使用组件按需引入的方式，只有组件激活了才会渲染组件的内容
const Home = ()=>import('../views/home/index.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" *\/ '../views/About.vue')
  }*/
]

const router = new VueRouter({
  routes
})

export default router
