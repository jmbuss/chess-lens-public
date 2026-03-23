<script setup lang="ts">
const comparisons = [
  {
    versus: 'vs. Lichess & Chess.com Analysis',
    description: 'Combines engine eval with rating-appropriate human move predictions via Maia. Makes your games searchable — ask questions about your play across your entire history, not just one game at a time.',
  },
  {
    versus: 'vs. Online Tools',
    description: 'Desktop-native, local-first, works offline. No subscription for engine access. A real application built for focused analysis sessions, not a browser tab you lose among dozens.',
  },
  {
    versus: 'vs. ChessBase',
    description: 'Modern UI, approachable for club players — not just titled players. Automatically categorizes your mistakes and builds a personal positions library. No manual tagging required.',
  },
  {
    versus: 'vs. Generic Engines',
    description: 'Classifies moves by mistake probability, shows game phases, and builds a persistent analysis tree. Tells you what kind of mistakes you make (tactical vs positional, opening vs endgame) so you know what to study.',
  },
]
</script>

<template>
  <section class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Comparison</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">What makes Chess Lens different</h2>
      </div>

      <div class="grid sm:grid-cols-2 gap-4">
        <div
          v-for="(item, i) in comparisons"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 2) + 1"
          class="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
        >
          <p class="text-xs text-primary font-semibold tracking-wide uppercase mb-3">{{ item.versus }}</p>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
