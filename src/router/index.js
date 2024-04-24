import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/FacaParte',
    name: 'FacaParte',
   
    component: () => import(/* webpackChunkName: "FacaParte" */ '../views/FacaParte.vue')
  },
  {
    path: '/ComoAjudar',
    name: 'ComoAjudar',
   
    component: () => import(/* webpackChunkName: "ComoAjudar" */ '../views/ComoAjudar.vue')
  },
  {
    path: '/Eventos',
    name: 'Eventos',
   
    component: () => import(/* webpackChunkName: "Eventos" */ '../views/Eventos.vue')
  },
  {
    path: '/LoginAdmin',
    name: 'LoginAdmin',
   
    component: () => import(/* webpackChunkName: "LoginAdmin" */ '../views/LoginAdmin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
