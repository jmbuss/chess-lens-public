<script setup lang="ts">
useScrollReveal()

useSeoMeta({
  title: 'Chess Lens — See Your Chess Differently',
  description: 'A desktop analysis workstation that learns your decisions, not just your positions. Understand your habits, surface recurring mistakes, and make every game searchable—so improvement becomes obvious.',
  ogTitle: 'Chess Lens — See Your Chess Differently',
  ogDescription: 'A desktop analysis workstation that learns your decisions, not just your positions. Understand habits, recurring mistakes, and searchable games—so improvement becomes obvious.',
  ogType: 'website',
  ogSiteName: 'Chess Lens',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Chess Lens — See Your Chess Differently',
  twitterDescription: 'Learn your decisions, not just your positions. Habits, recurring mistakes, searchable games—so improvement becomes obvious.',
})
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
      <LandingComparisonSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingAboutSection />

      <div class="section-divider max-w-6xl mx-auto" />
      <LandingFinalCtaSection />
    </main>

    <LandingFooterSection />
  </div>
</template>
