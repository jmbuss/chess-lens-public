<script setup lang="ts">
import { CheckCircle2, XCircle } from 'lucide-vue-next'

useSeoMeta({
  title: 'Chess Lens vs Chess.com Game Review — Desktop Chess Analysis Alternative',
  description: 'Chess Lens goes beyond Chess.com game review. Instead of analyzing one game at a time, it finds the recurring mistake patterns across your entire game history. Free, offline, and local-first.',
  ogTitle: 'Chess Lens vs Chess.com Game Review — Go Beyond Single-Game Analysis',
  ogDescription: 'Chess Lens finds your recurring mistake patterns across all your games. Chess.com reviews one game. See why the difference matters.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'WebPage' }),
])

const comparison = [
  { feature: 'Price', chessLens: 'Free', chesscom: 'Paid (Diamond membership for full analysis)', chessLensWins: true },
  { feature: 'Analysis depth', chessLens: 'Full Stockfish analysis, no limits', chesscom: 'Rate-limited on free; capped analysis on paid', chessLensWins: true },
  { feature: 'Human-level engine (Maia)', chessLens: 'Yes — ratings 1100–1900', chesscom: 'No', chessLensWins: true },
  { feature: 'Recurring pattern detection', chessLens: 'Yes — across your entire history', chesscom: 'No — per-game only', chessLensWins: true },
  { feature: 'Game search & filters', chessLens: 'Full searchable library with advanced filters', chesscom: 'Basic game history', chessLensWins: true },
  { feature: 'Offline analysis', chessLens: 'Yes — runs on your hardware', chesscom: 'No — cloud-based', chessLensWins: true },
  { feature: 'Variation explorer', chessLens: 'Yes — explore and save alternative lines', chesscom: 'Limited', chessLensWins: true },
  { feature: 'Platform', chessLens: 'macOS & Windows desktop app', chesscom: 'Web browser', chessLensWins: null },
  { feature: 'Social features', chessLens: 'Not the focus', chesscom: 'Full community, puzzles, lessons', chessLensWins: false },
  { feature: 'Game sync from Chess.com', chessLens: 'Automatic (via public API)', chesscom: 'Native', chessLensWins: null },
]
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main class="min-h-screen pt-24 pb-24 px-6">
      <div class="max-w-4xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-16">
          <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Comparison</p>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Chess Lens vs Chess.com Game Review
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chess.com's game review shows you what went wrong in a single game. Chess Lens shows you what keeps going wrong across all of them.
          </p>
        </div>

        <!-- Summary cards -->
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <div class="p-6 rounded-2xl border border-primary/20" style="background: oklch(0.45 0.16 162.48 / 5%)">
            <p class="text-xs font-semibold text-primary tracking-wide uppercase mb-3">Chess Lens</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              A dedicated desktop workstation for deep study. Analyzes your entire history, finds recurring mistake patterns, and makes your games fully searchable—all running offline on your own hardware with no usage limits.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
            <p class="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-3">Chess.com Game Review</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              A solid browser-based tool for reviewing individual games. Shows engine evaluations and recommends moves, but is limited to one game at a time, rate-limited for free accounts, and doesn't surface patterns across your history.
            </p>
          </div>
        </div>

        <!-- Feature comparison table -->
        <div class="rounded-2xl border border-black/5 overflow-hidden mb-12">
          <div class="divide-y divide-black/5">
            <div class="grid grid-cols-3 px-5 py-3 bg-black/[0.02]">
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Feature</p>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide">Chess Lens</p>
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Chess.com Review</p>
            </div>
            <div
              v-for="(row, i) in comparison"
              :key="i"
              class="grid grid-cols-3 px-5 py-4 gap-4 items-start"
            >
              <p class="text-sm font-medium">{{ row.feature }}</p>
              <div class="flex items-start gap-1.5">
                <CheckCircle2 v-if="row.chessLensWins === true" class="size-4 text-primary shrink-0 mt-0.5" />
                <XCircle v-else-if="row.chessLensWins === false" class="size-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                <span class="text-sm text-muted-foreground">{{ row.chessLens }}</span>
              </div>
              <p class="text-sm text-muted-foreground">{{ row.chesscom }}</p>
            </div>
          </div>
        </div>

        <!-- Key insight -->
        <div class="p-8 rounded-2xl border border-black/5 bg-black/[0.02] mb-12">
          <h2 class="font-semibold mb-3">Why one-game review isn't enough</h2>
          <p class="text-sm text-muted-foreground leading-relaxed mb-3">
            Reviewing a single game is valuable. But the most useful insight—what you consistently get wrong—only emerges over hundreds of games. A single review tells you "you blundered on move 24." Your pattern library tells you "you consistently miss tactical threats when you're in time trouble in endgames."
          </p>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Chess Lens and Chess.com game review solve different problems. Use Chess.com for quick post-game review and community features. Use Chess Lens for systematic improvement over time.
          </p>
        </div>

        <!-- CTA -->
        <div class="text-center">
          <NuxtLink
            to="/download"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity mb-4"
          >
            Download Chess Lens — Free
          </NuxtLink>
          <div class="flex items-center justify-center gap-6 mt-4">
            <NuxtLink to="/vs/chessbase" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Chess Lens vs ChessBase →</NuxtLink>
            <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">← Home</NuxtLink>
          </div>
        </div>

      </div>
    </main>

    <LandingFooterSection />
  </div>
</template>
