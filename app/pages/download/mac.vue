<script setup lang="ts">
import { LATEST_MAC_DOWNLOAD_URL } from '~/utils/releaseDownloads'

useSeoMeta({
  title: 'Download for macOS — Chess Lens',
  robots: 'noindex',
})

useHead({
  meta: [{ httpEquiv: 'refresh', content: `0;url=${LATEST_MAC_DOWNLOAD_URL}` }],
})
</script>

<template>
  <div class="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6 pt-28 pb-16">
    <p class="text-muted-foreground text-sm">Redirecting to the macOS installer…</p>
    <a
      :href="LATEST_MAC_DOWNLOAD_URL"
      class="text-primary text-sm font-medium underline underline-offset-2 hover:opacity-90"
    >
      Click here if you are not redirected
    </a>
  </div>
</template>
