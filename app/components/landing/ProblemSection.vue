<script setup lang="ts">
import { BarChart3, Search, Globe, Layers } from 'lucide-vue-next'

const painPoints = [
  {
    icon: BarChart3,
    title: 'Eval bars don\'t teach you how you think',
    description: 'Engines tell you what the best move was. They don\’t tell you why you missed it—or what pattern led you there. Chess Lens goes beyond evaluation, surfacing the recurring decisions and blind spots in your play.',
  },
  {
    icon: Search,
    title: 'You can\'t search your own games',
    description: `You've played hundreds—maybe thousands—of games. But you can't answer simple questions:

Where do I actually lose?
What kinds of mistakes do I repeat?
How do I perform in this structure or opening?

Chess Lens turns your games into a searchable dataset—so patterns aren't buried, they're obvious.`,
  },
  {
    icon: Globe,
    title: 'Analysis tools weren\’t built for real study',
    description: `Most tools live in the browser. They're fragmented, slow, and built around single games—not long-term improvement.

Chess Lens is a dedicated desktop workstation, designed for focused analysis across your entire history—not one tab at a time.`,
  },
  {
    icon: Layers,
    title: 'Your games are scattered. Your mistakes are lost.',
    description: `Games on one site. Analysis on another. Insights nowhere.

There's no system tracking how you play over time—so the same mistakes repeat, unnoticed.

Chess Lens brings everything together, organizing your games and surfacing the patterns you actually need to fix.`,
  },
]
</script>

<template>
  <section id="problem" class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Your games are data.<br />
          <span class="text-muted-foreground">Start using them like it.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5 mb-16">
        <div
          v-for="(point, i) in painPoints"
          :key="i"
          data-reveal
          :data-reveal-delay="i + 1"
          class="p-6 rounded-xl border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
        >
          <component :is="point.icon" class="size-7 text-muted-foreground/70 mb-4" />
          <h3 class="text-lg font-semibold mb-2">{{ point.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{{ point.description }}</p>
        </div>
      </div>

      <div data-reveal class="text-center">
        <div class="inline-block p-8 rounded-2xl border border-primary/20" style="background: oklch(0.45 0.16 162.48 / 5%)">
          <p class="text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            <span class="text-primary font-semibold">Chess Lens</span> is a local-first analysis workstation that learns how you play.

It doesn’t just evaluate positions—it tracks your decisions across games, finds recurring mistake patterns, and makes your chess fully searchable.

So instead of reviewing games in isolation, you see the bigger picture—and improve with intent.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
