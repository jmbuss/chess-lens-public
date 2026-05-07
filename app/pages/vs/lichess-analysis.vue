<script setup lang="ts">
import { CheckCircle2, XCircle } from 'lucide-vue-next'

useSeoMeta({
  title: 'Chess Lens vs Lichess Analysis — Desktop Chess Analysis Alternative',
  description: 'Chess Lens complements Lichess by going deeper: recurring mistake patterns across your full game history, Maia human-level predictions, and a fully searchable game library. Free desktop app for macOS and Windows.',
  ogTitle: 'Chess Lens vs Lichess Analysis — Pattern Detection Across Your Entire History',
  ogDescription: 'Lichess is great for individual game review. Chess Lens finds what keeps going wrong across all your games. Maia engines, recurring patterns, full game search.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'WebPage' }),
])

const comparison = [
  { feature: 'Price', chessLens: 'Free', lichess: 'Free', chessLensWins: null },
  { feature: 'Analysis depth', chessLens: 'Full Stockfish, no rate limits', lichess: 'Stockfish cloud analysis (rate-limited)', chessLensWins: true },
  { feature: 'Offline analysis', chessLens: 'Yes — fully offline on your hardware', lichess: 'No — requires internet', chessLensWins: true },
  { feature: 'Human-level engine (Maia)', chessLens: 'Yes — ratings 1100–1900', lichess: 'No', chessLensWins: true },
  { feature: 'Recurring mistake patterns', chessLens: 'Yes — automatic across your history', lichess: 'No', chessLensWins: true },
  { feature: 'Game search & filters', chessLens: 'Full searchable library, advanced filters', lichess: 'Basic (via Lichess.org interface)', chessLensWins: true },
  { feature: 'Chess.com game sync', chessLens: 'Yes — automatic', lichess: 'No', chessLensWins: true },
  { feature: 'Lichess game sync', chessLens: 'Coming soon', lichess: 'Native', chessLensWins: false },
  { feature: 'Platform', chessLens: 'macOS & Windows desktop app', lichess: 'Web browser', chessLensWins: null },
  { feature: 'Open source', chessLens: 'Closed source (free)', lichess: 'Open source', chessLensWins: null },
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
            Chess Lens vs Lichess Analysis
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Lichess is one of the best free chess platforms in the world. Chess Lens is designed to work alongside it—going deeper into your personal patterns in ways a web-based tool can't.
          </p>
        </div>

        <!-- Summary cards -->
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <div class="p-6 rounded-2xl border border-primary/20" style="background: oklch(0.45 0.16 162.48 / 5%)">
            <p class="text-xs font-semibold text-primary tracking-wide uppercase mb-3">Chess Lens</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              A local desktop workstation that runs analysis on your own hardware with no limits. Finds recurring mistake patterns across your entire game history. Lichess sync is on the roadmap—Chess Lens already syncs from Chess.com.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
            <p class="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-3">Lichess Analysis</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Lichess offers excellent free browser-based analysis tools. Cloud Stockfish analysis, opening explorer, game history, and an active community. Rate-limited for heavy analysis and limited to single-game review without cross-game pattern detection.
            </p>
          </div>
        </div>

        <!-- Feature comparison table -->
        <div class="rounded-2xl border border-black/5 overflow-hidden mb-12">
          <div class="divide-y divide-black/5">
            <div class="grid grid-cols-3 px-5 py-3 bg-black/[0.02]">
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Feature</p>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide">Chess Lens</p>
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Lichess</p>
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
              <p class="text-sm text-muted-foreground">{{ row.lichess }}</p>
            </div>
          </div>
        </div>

        <!-- A note on Lichess sync -->
        <div class="p-8 rounded-2xl border border-black/5 bg-black/[0.02] mb-12">
          <h2 class="font-semibold mb-3">A note on Lichess sync</h2>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Lichess sync is on the Chess Lens roadmap. Once added, you'll be able to bring in your complete game history from both Chess.com and Lichess for a unified view of your patterns across both platforms. In the meantime, Chess.com game sync works automatically today.
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
            <NuxtLink to="/vs/chess-com-analysis" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Chess Lens vs Chess.com →</NuxtLink>
            <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">← Home</NuxtLink>
          </div>
        </div>

      </div>
    </main>

    <LandingFooterSection />
  </div>
</template>
