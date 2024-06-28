import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: 'home__ua',
      path: '/ua',
      component: () => import('~/pages/index.vue').then(r => r.default || r)
    },
    {
        name: 'home__en',
        path: '/en',
        component: () => import('~/pages/index.vue').then(r => r.default || r)
      }
  ],
}
