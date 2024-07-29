import { createRouter, createWebHistory } from 'vue-router'
import Maintenance from '@/views/Maintenance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Maintenance
    },
  ],
})

export default router
