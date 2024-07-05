import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
