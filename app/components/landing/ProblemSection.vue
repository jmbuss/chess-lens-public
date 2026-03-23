<script setup lang="ts">
import { BarChart3, Search, Globe, Layers } from 'lucide-vue-next'

const painPoints = [
  {
    icon: BarChart3,
    title: 'Eval bars don\'t teach you anything',
    description: 'Existing tools show you engine evaluations — a number that says you blundered. But they don\'t help you understand why, or how a player at your level would actually think about the position.',
  },
  {
    icon: Search,
    title: 'You can\'t search your own games',
    description: 'You\'ve played thousands of games but can\'t answer basic questions: "How often do I blunder in the opening?" "Do I lose more to tactical or positional mistakes?" Your games are data, but no tool lets you query them.',
  },
  {
    icon: Globe,
    title: 'Web tools feel like afterthoughts',
    description: 'Browser-based analysis isn\'t built for serious study. Tab switching, latency, limited engine access — it\'s not a purpose-built workstation for focused analysis.',
  },
  {
    icon: Layers,
    title: 'Your games are scattered everywhere',
    description: 'Games across Chess.com and Lichess. Analysis in one tab, PGN in another. No unified workflow. The mistakes you made last month are forgotten, not catalogued and learned from.',
  },
]
</script>

<template>
  <section id="problem" class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Your games are data.<br />
          <span class="text-muted-foreground">Your tools aren't keeping up.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-16">
        <div
          v-for="(point, i) in painPoints"
          :key="i"
          data-reveal
          :data-reveal-delay="i + 1"
          class="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
        >
          <component :is="point.icon" class="size-7 text-muted-foreground/70 mb-4" />
          <h3 class="text-lg font-semibold mb-2">{{ point.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ point.description }}</p>
        </div>
      </div>

      <div data-reveal class="text-center">
        <div class="inline-block p-8 rounded-2xl border border-primary/10" style="background: oklch(0.696 0.17 162.48 / 3%)">
          <p class="text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            <span class="text-primary font-semibold">Chess Lens</span> is a local-first chess analysis workstation
            that doesn't just analyze your games — it makes them searchable, finds patterns in your
            mistakes, and shows you exactly where and how to improve.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
