import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { ref } from 'vue'

const previousRoute = ref<string | null>(null)

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
    path: '/cases',
    name: 'cases',
    component: () => import('../views/CasesView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } }
  },
  {
    path: '/case/:path',
    name: 'case',
    component: () => import('../views/CasePageView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } },
    props: (route) => ({
      id: route.query.id
    })
  },
  {
    path: '/service/:type/:path',
    name: 'service',
    component: () => import('../views/ServicePageView.vue'),
    meta: { scrollPosition: { x: 0, y: 0 } },
    props: (route) => ({
      id: route.query.id,
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
    }
    if (to.meta.scrollPosition) {
      return { left: to.meta.scrollPosition.x, top: to.meta.scrollPosition.y }
    }
    return { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  previousRoute.value = from.fullPath
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
export const usePreviousRoute = () => previousRoute
