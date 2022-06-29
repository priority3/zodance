import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'

const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes,
})

export function setupRouter(app: App<Element>) {
  // TODO guard
  app.use(router)
}
