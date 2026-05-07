<script setup lang="ts">
useScrollReveal()

const { data: releaseData } = await useLatestRelease()
const release = releaseData.value

useSeoMeta({
  title: 'Chess Lens — Desktop Chess Analysis That Learns How You Play',
  description: 'Local-first chess analysis workstation for macOS and Windows. Stockfish + Maia engines surface your recurring mistake patterns and make every game searchable—so improvement becomes obvious. Free.',
  ogTitle: 'Chess Lens — Desktop Chess Analysis That Learns How You Play',
  ogDescription: 'Free desktop chess analysis for macOS and Windows. Recurring mistake patterns, searchable games, Stockfish + Maia engines. Local-first and offline.',
  ogType: 'website',
  ogSiteName: 'Chess Lens',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Chess Lens — Desktop Chess Analysis That Learns How You Play',
  twitterDescription: 'Free desktop chess analysis for macOS and Windows. Recurring mistake patterns, searchable games, Stockfish + Maia. Local-first.',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebSite({ name: 'Chess Lens' }),
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
    description: 'Chess Lens is a local-first desktop chess analysis workstation for macOS and Windows. It uses Stockfish and Maia engines to surface recurring mistake patterns, make your games fully searchable, and help you understand how you actually play—not just what the best move was.',
  }),
])
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main>
      <LandingHeroSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingProblemSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingFeaturesSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingHowItWorksSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingRoadmapSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingFaqSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingComparisonSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingAboutSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingFinalCtaSection />
    </main>

    <LandingFooterSection />
  </div>
</template>
