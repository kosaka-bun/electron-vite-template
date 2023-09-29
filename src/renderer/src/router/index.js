import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import MainView from '../components/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})

export default router
