import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateInv from '../views/CreateInv.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'View',
    component: Home
  },
  {
    path: '/create-inventory',
    name: 'CreateInv',
    component: CreateInv
  },
  {
    path: '/create-reservation',
    name: 'CreateRes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CreateRes.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
