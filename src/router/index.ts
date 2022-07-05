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
    path: '/zodance-opearte',
    component: () => import('@/views/zodance-operate/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
})

export function setupRouter(app: App<Element>) {
  // TODO guard
  setupBeforeEachGuard(router)
  app.use(router)
}
