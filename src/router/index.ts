import { createRouter, createWebHistory } from 'vue-router';
import Maintenance from '@/views/Maintenance.vue';
import NotFound from '@/views/NotFound.vue';
import ServerError from '@/views/ServerError.vue';

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
      name: 'maintenance',
      component: Maintenance,
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/500',
      name: 'server-error',
      component: ServerError,
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
