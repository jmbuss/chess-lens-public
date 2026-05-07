<script setup lang="ts">
import { ExternalLink, HardDrive } from 'lucide-vue-next'
import { formatMB } from '~/composables/useLatestRelease'

const { data: releaseData } = await useLatestRelease()
const release = releaseData.value

const releaseDateFormatted = computed(() => {
  if (!release?.publishedAt) return null
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(
    new Date(release.publishedAt),
  )
})

useSeoMeta({
  title: 'Download Chess Lens — Free Chess Analysis App for macOS and Windows',
  description: 'Download Chess Lens free for macOS and Windows. Local-first desktop chess analysis workstation powered by Stockfish and Maia engines. No account required.',
  ogTitle: 'Download Chess Lens — Free Chess Analysis App for macOS and Windows',
  ogDescription: 'Download Chess Lens free for macOS and Windows. Powered by Stockfish + Maia. Local-first, offline, no account required.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'WebPage' }),
  defineSoftwareApp({
    name: 'Chess Lens',
    applicationCategory: 'GameApplication',
    operatingSystem: 'macOS, Windows',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    softwareVersion: release?.version,
    downloadUrl: 'https://chesslens.org/download',
    installUrl: 'https://chesslens.org/download',
    releaseNotes: release?.htmlUrl,
    datePublished: release?.publishedAt,
    screenshot: [
      'https://chesslens.org/marketing/Recurring_Patterns_Analysis.png',
      'https://chesslens.org/marketing/Analysis.png',
      'https://chesslens.org/marketing/Games_Data_Table.png',
      'https://chesslens.org/marketing/Recurring_Patterns.png',
    ],
    description: 'Chess Lens is a free, local-first desktop chess analysis workstation for macOS and Windows. It uses Stockfish and Maia engines to surface recurring mistake patterns, make your games fully searchable, and help you understand how you actually play.',
  }),
])
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main class="min-h-screen pt-24 pb-24 px-6">
      <div class="max-w-3xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-sm text-muted-foreground mb-6">
            <span class="size-2 rounded-full bg-primary" />
            <template v-if="release">
              Version {{ release.version }}
              <span v-if="releaseDateFormatted" class="text-muted-foreground/60">· {{ releaseDateFormatted }}</span>
            </template>
            <template v-else>
              Free for macOS &amp; Windows
            </template>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Download Chess Lens
          </h1>
          <p class="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Free desktop chess analysis for macOS and Windows. No account required. Runs entirely on your machine.
          </p>
        </div>

        <!-- Download cards -->
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <!-- macOS -->
          <div class="p-7 rounded-2xl border border-black/5 bg-black/[0.02] flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <PlatformBrandIcon platform="apple" class="size-5 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-sm">macOS</p>
                <p class="text-xs text-muted-foreground">10.15 Catalina or later</p>
              </div>
            </div>

            <div class="text-xs text-muted-foreground space-y-1">
              <p>Intel &amp; Apple Silicon (Universal)</p>
              <p v-if="release?.macSizeBytes">{{ formatMB(release.macSizeBytes) }} · .dmg installer</p>
              <p v-else>.dmg installer · Code-signed &amp; notarized</p>
            </div>

            <a
              :href="release?.macUrl ?? '/download/mac'"
              class="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <PlatformBrandIcon platform="apple" class="size-4" />
              Download for macOS
            </a>
          </div>

          <!-- Windows -->
          <div class="p-7 rounded-2xl border border-black/5 bg-black/[0.02] flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <PlatformBrandIcon platform="windows" class="size-5 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-sm">Windows</p>
                <p class="text-xs text-muted-foreground">Windows 10 or later (64-bit)</p>
              </div>
            </div>

            <div class="text-xs text-muted-foreground space-y-1">
              <p>x64 architecture</p>
              <p v-if="release?.windowsSizeBytes">{{ formatMB(release.windowsSizeBytes) }} · Windows installer</p>
              <p v-else>Windows installer (.exe) · Code-signed</p>
            </div>

            <a
              :href="release?.windowsUrl ?? '/download/windows'"
              class="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-black/10 bg-black/[0.03] text-foreground font-semibold text-sm hover:bg-black/[0.06] transition-colors"
            >
              <PlatformBrandIcon platform="windows" class="size-4" />
              Download for Windows
            </a>
          </div>
        </div>

        <!-- Release notes link -->
        <div v-if="release?.htmlUrl" class="flex justify-center mb-12">
          <a
            :href="release.htmlUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink class="size-3.5" />
            View release notes on GitHub
          </a>
        </div>

        <!-- System requirements -->
        <div class="p-7 rounded-2xl border border-black/5 bg-black/[0.02] mb-8">
          <div class="flex items-center gap-2 mb-5">
            <HardDrive class="size-4 text-muted-foreground" />
            <h2 class="font-semibold text-sm">System Requirements</h2>
          </div>
          <div class="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <p class="font-medium mb-2">macOS</p>
              <ul class="text-muted-foreground space-y-1 text-xs leading-relaxed">
                <li>macOS 10.15 Catalina or later</li>
                <li>Intel or Apple Silicon</li>
                <li>4 GB RAM minimum (8 GB recommended)</li>
                <li>500 MB available disk space</li>
                <li>Internet required only for game sync</li>
              </ul>
            </div>
            <div>
              <p class="font-medium mb-2">Windows</p>
              <ul class="text-muted-foreground space-y-1 text-xs leading-relaxed">
                <li>Windows 10 or later (64-bit)</li>
                <li>x64 processor</li>
                <li>4 GB RAM minimum (8 GB recommended)</li>
                <li>500 MB available disk space</li>
                <li>Internet required only for game sync</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Install instructions -->
        <div class="mb-16">
          <h2 class="font-semibold mb-5">Installation</h2>
          <div class="grid sm:grid-cols-2 gap-5">
            <div class="p-5 rounded-xl border border-black/5 bg-black/[0.02]">
              <p class="font-medium text-sm mb-3 flex items-center gap-2">
                <PlatformBrandIcon platform="apple" class="size-4 text-muted-foreground" /> macOS
              </p>
              <ol class="text-xs text-muted-foreground space-y-2 leading-relaxed list-decimal list-inside">
                <li>Download the .dmg file above</li>
                <li>Open the downloaded .dmg</li>
                <li>Drag Chess Lens to your Applications folder</li>
                <li>Launch Chess Lens from Applications</li>
                <li>On first launch, macOS may ask you to confirm — click Open</li>
              </ol>
            </div>
            <div class="p-5 rounded-xl border border-black/5 bg-black/[0.02]">
              <p class="font-medium text-sm mb-3 flex items-center gap-2">
                <PlatformBrandIcon platform="windows" class="size-4 text-muted-foreground" /> Windows
              </p>
              <ol class="text-xs text-muted-foreground space-y-2 leading-relaxed list-decimal list-inside">
                <li>Download the Windows installer above</li>
                <li>Run the installer</li>
                <li>Follow the on-screen setup steps</li>
                <li>Launch Chess Lens from the Start menu</li>
                <li>If Windows SmartScreen appears, click "More info" then "Run anyway"</li>
              </ol>
            </div>
          </div>
        </div>

        <!-- Back to home -->
        <div class="text-center">
          <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Chess Lens
          </NuxtLink>
        </div>

      </div>
    </main>

    <LandingFooterSection />
  </div>
</template>
