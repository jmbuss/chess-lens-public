import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['shadcn-nuxt'],

  nitro: {
    preset: 'static',
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      // Firebase
      firebaseApiKey: '',
      firebaseAuthDomain: '',
      firebaseProjectId: '',
      firebaseStorageBucket: '',
      firebaseMessagingSenderId: '',
      firebaseAppId: '',
      firebaseMeasurementId: '',

      // PostHog
      posthogPublicKey: '',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2026-01-30',

      // Email subscribe endpoint — replace with your form service URL
      // (e.g. Buttondown, ConvertKit, Mailchimp, or a custom serverless function)
      subscribeEndpoint: '/api/subscribe',
    },
  },
})
