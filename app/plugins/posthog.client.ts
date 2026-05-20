import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  if (!runtimeConfig.public.posthogPublicKey) return

  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey as string, {
    api_host: runtimeConfig.public.posthogHost as string,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    loaded: (client) => {
      if (import.meta.env.MODE === 'development') client.debug()
    },
  })

  const router = useRouter()
  router.afterEach((to) => {
    posthogClient?.capture('$pageview', { path: to.fullPath })
  })

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
