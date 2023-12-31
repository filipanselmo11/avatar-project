// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/agua',
    component: () => import('@/views/Agua.vue'),
  },
  {
    path: '/terra',
    component: () => import('@/views/Terra.vue'),
  },
  {
    path: '/ar',
    component: () => import('@/views/Ar.vue'),
  },
  {
    path: '/fogo',
    component: () => import('@/views/Fogo.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
