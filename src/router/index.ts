import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { setupBeforeEachGuard } from './guard'

const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/zodance-home/index.vue'),
  },
  {
    path: '/zodance-mall',
    component: () => import('@/views/zodance-mall/index.vue'),
  },
  {
    path: '/zodance-price',
    component: () => import('@/views/zodance-price/index.vue'),
  },
  {
    path: '/zodance-operate',
    component: () => import('@/views/zodance-operate/index.vue'),
  },
  {
    path: '/zodance-saas',
    component: () => import('@/views/zodance-saas/index.vue'),
  },
  {
    path: '/sms/:catchAll(.*)',
    component: () => import('@/views/sms/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/zodance-404/index.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
  scrollBehavior: () => {
    return { top: 0 }
  },
})

export function setupRouter(app: App<Element>) {
  // TODO guard
  setupBeforeEachGuard(router)
  app.use(router)
}
