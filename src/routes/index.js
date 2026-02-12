import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/jobdescription',
      name: 'jobdescription',
      component: () => import('../views/JobDescriptionView.vue'),
    }
  ],
})

export default router
