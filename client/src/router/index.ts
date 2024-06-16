import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPageView
    },
    {
      path: '/select-room',
      name: 'select-room',
      component: () => import('../views/SelectRoomView.vue')
    }
  ]
})

export default router
