import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page1',
    name: 'page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/Page2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
