import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPageView
    }
  ]
})

export default router
