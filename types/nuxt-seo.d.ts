import type { SiteConfigInput } from 'site-config-stack'

// nuxt-site-config (bundled in @nuxtjs/seo) reads a top-level `site` key from
// nuxt.config but doesn't ship its own NuxtConfig type augmentation.
// This declaration fills that gap so TypeScript accepts the config key.
declare module 'nuxt/schema' {
  interface NuxtConfig {
    site?: SiteConfigInput
  }
}

export {}
