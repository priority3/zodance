import type { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router'
import NProgress from 'nprogress'
export function setupBeforeEachGuard(router: Router): void {
  // eslint-disable-next-line no-empty-pattern
  router.beforeEach((_: RouteLocationNormalized, {}, next: NavigationGuardNext) => {
    // from.name && NProgress.start()
    NProgress.start()
    // TODO
    // setTimeout(() => {
    //   next()
    // }, 1000)
    next()
  })
  router.afterEach((to: RouteLocationNormalized, _: RouteLocationNormalized) => {
    NProgress.done()
    const { VITE_GLOBAL_TITLE } = import.meta.env
    document.title = (to.meta.title || VITE_GLOBAL_TITLE) as string
  })
}
