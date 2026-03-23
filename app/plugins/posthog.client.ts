import posthog from 'posthog-js'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  console.log('runtimeConfig', runtimeConfig)
  if (!runtimeConfig.public.posthogPublicKey) return

  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey as string, {
    api_host: runtimeConfig.public.posthogHost as string,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') posthog.debug()
    },
  })

  const router = useRouter()
  router.afterEach((to) => {
    posthog.capture('$pageview', { path: to.fullPath })
  })

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
