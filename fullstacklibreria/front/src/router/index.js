import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/moreInfo',
    name: 'MoreInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoreInfo.vue')
  },
  {
    path: '/termCond',
    name: 'TermCond',
    component: () => import(/* webpackChunkName: "about" */ '../views/TermCond.vue')
  },
  {
    path: '/transactionDetails',
    name: 'TransactionDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/TransactionDetails.vue')
  },
  {
    path: '/bienvenida',
    name: 'Bienvenida',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bienvenida.vue')
  },
  {
    path: '/errorAcceso',
    name: 'ErrorAcceso',
    component: () => import(/* webpackChunkName: "about" */ '../views/ErrorAcceso.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
