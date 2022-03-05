import Vue from 'vue'
import VueRouter from 'vue-router'
import StripsView from '../views/StripsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/strips',
    alias: ['/', '/strips'],
    name: 'home',
    component: StripsView
  },
  {
    path: '/walls',
    name: 'walls',
    component: () => {
      return import(/* webpackChunkName: "walls" */ '../views/WallsView.vue')
    }
  },
  {
    path: '/merchandising',
    name: 'merchandising',
    component: () => {
      return import(/* webpackChunkName: "merchandising" */ '../views/MerchandisingView.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => {
      return import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
