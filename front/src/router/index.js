import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/admin',
    name: 'adminPanel',
    component: () => import('../views/BackOffice.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
