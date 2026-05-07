/// <reference path="./types/nuxt-seo.d.ts" />
import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['shadcn-nuxt', '@nuxtjs/seo'],

  site: {
    url: 'https://chesslens.org',
    name: 'Chess Lens',
    description: 'Desktop chess analysis workstation that learns how you play. Recurring mistake patterns, searchable games, Stockfish + Maia analysis. Local-first and free for macOS and Windows.',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Chess Lens',
      logo: 'https://chesslens.org/favicon.png',
      sameAs: ['https://github.com/jmbuss'],
    },
  },

  sitemap: {
    exclude: ['/releases/**', '/download/mac', '/download/windows'],
  },

  robots: {
    disallow: [],
  },

  ogImage: {
    enabled: false,
  },

  linkChecker: {
    enabled: false,
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/download',
        '/faq',
        '/how-it-works',
        '/about',
        '/vs/chessbase',
        '/vs/chess-com-analysis',
        '/vs/lichess-analysis',
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#0a0a0a' },
      ],
    },
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
    },
  },
})
