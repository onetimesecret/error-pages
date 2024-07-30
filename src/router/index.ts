import { createRouter, createWebHistory } from 'vue-router';
import Maintenance from '@/views/Maintenance.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Maintenance,
    },

    // For previews
    {
      path: '/errors',
      name: 'errors',
      component: Maintenance,
    },
    // Default route (404 Not Found)
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export default router;
