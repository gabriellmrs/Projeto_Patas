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
  },
  {
    path: '/Admin',
    name: 'Admin',
   
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')
  },
  {
    path: '/AdminVoluntarios',
    name: 'AdminVoluntarios',
   
    component: () => import(/* webpackChunkName: "AdminVoluntarios" */ '../components/AdminVoluntarios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {

  if (from.name === 'FacaParte') {
    if (to.name !== 'home') {
      window.location.href = '/';
      
    }
  }
  next();
})


export default router
