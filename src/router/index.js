import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import RegistrationView from '../views/RegistrationView.vue';
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history:createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegistrationView
    },
    {
      path: '/home',
      name: 'homeview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'loginview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
