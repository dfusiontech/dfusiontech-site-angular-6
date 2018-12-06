import { UIRouter } from '@uirouter/angular'

export function routerConfig(router: UIRouter) {
  router.transitionService.onSuccess({}, () => window.scrollTo(0, 0))
}
