<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-grid opacity-60" />
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[120px]" style="background: oklch(0.45 0.16 162.48 / 6%)" />

    <div class="relative z-10 text-center max-w-4xl mx-auto">
      <div data-reveal class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-sm text-muted-foreground mb-8">
        <span class="size-2 rounded-full bg-primary animate-pulse" />
        Coming soon for macOS and Windows
      </div>

      <h1 data-reveal data-reveal-delay="1" class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
        See your chess<br />
        <span class="text-gradient">through the lens of how you actually play</span>
      </h1>

      <p data-reveal data-reveal-delay="2" class="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        A desktop analysis workstation that learns your decisions, not just your positions. It understands your habits, surfaces recurring mistakes, and makes every game searchable—so improvement becomes obvious.
      </p>

      <div data-reveal data-reveal-delay="3" class="flex flex-col items-center gap-4">
        <LandingEmailSignupForm />
        <a href="#problem" class="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
          Learn more
          <ChevronDown class="size-4" />
        </a>
      </div>
    </div>

    <!-- App Screenshot -->
    <div data-reveal data-reveal-delay="4" class="relative z-10 mt-16 w-full max-w-5xl mx-auto">
      <div class="overflow-hidden">
        <img
          src="/marketing/Recurring_Patterns_Analysis.png"
          alt="Chess Lens recurring patterns analysis: Pattern tab with move comparison, eval curve with Maia overlays, and navigation through similar positions across games"
          class="w-full block"
        />
      </div>
    </div>
  </section>
</template>
