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
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/zodance-mall',
    component: () => import('@/views/zodance-mall/index.vue'),
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
