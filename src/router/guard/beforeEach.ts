import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import NProgress from 'nprogress'
export function setupBeforeEachGuard(router: Router): void {
  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    setTimeout(() => {
      next()
    }, 1000)
  })
  router.afterEach((to: RouteLocationNormalized, _: RouteLocationNormalized) => {
    NProgress.done()
    document.title = (to.meta.title || '零一跃动') as string
  })
}
