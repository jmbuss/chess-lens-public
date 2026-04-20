<script setup lang="ts">
const comparisons = [
  {
    versus: 'vs. Lichess & Chess.com Analysis',
    description: `Not just evaluation—understanding how you play

Traditional analysis shows you the best move. Chess Lens goes further—combining Stockfish with Maia to model how players at your level actually think.

Instead of isolated game reviews, it analyzes your entire history—making your games searchable and automatically surfacing recurring mistake patterns.`,
  },
  {
    versus: 'vs. Online Tools',
    description: `Built for real analysis, not browser tabs

Most tools are designed for quick, single-game review. Chess Lens is a desktop, local-first workstation built for deep study.

No latency, no engine limits, no subscriptions—just a fast, persistent environment where your analysis, games, and insights all live together.`,
  },
  {
    versus: 'vs. ChessBase',
    description: `Powerful without the overhead

Traditional database tools require manual tagging, curation, and setup.

Chess Lens does that work for you—automatically grouping positions into recurring patterns and highlighting what you should improve, without needing to manage a database.`,
  },
  {
    versus: 'vs. Generic Engines',
    description: `Not just what's best—what's realistic

Engines tell you what the best move is. Chess Lens shows how likely you were to find it.

By using Maia models, it assigns mistake probability to every move and overlays human-like evaluations—so you can see not just where you blundered, but which mistakes are actually holding you back at your level.`,
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
          class="p-6 rounded-xl border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
        >
          <p class="text-xs text-primary font-semibold tracking-wide uppercase mb-3">{{ item.versus }}</p>
          <p class="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
