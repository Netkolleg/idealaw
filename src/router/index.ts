/* import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    meta: { previousRoute: null }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: { previousRoute: null }
  },
  {
    path: '/service/:type/:path',
    name: 'service',
    component: () => import('../views/ServicePageView.vue'),
    meta: { previousRoute: null },
    props: (route) => ({
      path: route.params.path,
      type: route.params.type
    })
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  to.meta.previousRoute = from.fullPath
  try {
    const isConnected = navigator.onLine
    if (!isConnected && to.name !== 'error') {
      next({ name: 'error' })
    } else if (to.matched.length === 0) {
      next({ name: 'error' })
    } else {
      next()
    }
  } catch (error) {
    next({ name: 'error' })
  }
})

export default router */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } }
  },
  {
    path: '/service/:type/:path',
    name: 'service',
    component: () => import('../views/ServicePageView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } },
    props: (route) => ({
      path: route.params.path,
      type: route.params.type
    })
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.meta.scrollPosition) {
      return to.meta.scrollPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  try {
    const isConnected = navigator.onLine
    if (!isConnected && to.name !== 'error') {
      next({ name: 'error' })
    } else if (to.matched.length === 0) {
      next({ name: 'error' })
    } else {
      if (from.meta && to.fullPath !== from.fullPath) {
        from.meta.scrollPosition = {
          x: window.scrollX,
          y: window.scrollY
        }
      }
      next()
    }
  } catch (error) {
    next({ name: 'error' })
  }
})

export default router
