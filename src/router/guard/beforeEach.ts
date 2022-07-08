import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import NProgress from 'nprogress'
export function setupBeforeEachGuard(router: Router): void {
  // eslint-disable-next-line no-empty-pattern
  router.beforeEach((_: RouteLocationNormalized, {}, next: NavigationGuardNext) => {
    // from.name && NProgress.start()
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
