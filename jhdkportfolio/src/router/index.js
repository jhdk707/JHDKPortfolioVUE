import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectPage.vue')
    },
    {
      path: '/rescerts',
      name: 'rescerts',
      component: () => import('../views/ResCerts.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    },
    {
      path: '/tech',
      name: 'tech',
      component: () => import('../views/TechPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
