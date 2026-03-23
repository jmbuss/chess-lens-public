<script setup lang="ts">
useScrollReveal()

useSeoMeta({
  title: 'Chess Lens — See Your Chess Differently',
  description: 'A desktop chess analysis workstation that makes your games searchable and deeply analyzed. Engine precision meets human-like move prediction — find patterns, understand weaknesses, and actually improve.',
  ogTitle: 'Chess Lens — See Your Chess Differently',
  ogDescription: 'A desktop chess analysis workstation that makes your games searchable and deeply analyzed. Engine precision meets human-like move prediction.',
  ogType: 'website',
  ogSiteName: 'Chess Lens',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Chess Lens — See Your Chess Differently',
  twitterDescription: 'A desktop chess analysis workstation that makes your games searchable and deeply analyzed.',
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
