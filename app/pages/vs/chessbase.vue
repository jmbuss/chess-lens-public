<script setup lang="ts">
import { CheckCircle2, XCircle } from 'lucide-vue-next'

useSeoMeta({
  title: 'Chess Lens vs ChessBase — Free ChessBase Alternative for macOS and Windows',
  description: 'How does Chess Lens compare to ChessBase? Chess Lens is a free, automatic alternative that finds your recurring mistake patterns without manual database management.',
  ogTitle: 'Chess Lens vs ChessBase — Free Alternative for Personal Game Analysis',
  ogDescription: 'Chess Lens automatically groups your games into recurring mistake patterns. No manual tagging, no database setup, no subscription. Free for macOS and Windows.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'WebPage' }),
])

const comparison = [
  { feature: 'Price', chessLens: 'Free', chessBase: '$200–$400+ (license)', chessLensWins: true },
  { feature: 'Platform', chessLens: 'macOS & Windows', chessBase: 'Windows only', chessLensWins: true },
  { feature: 'Automatic pattern detection', chessLens: 'Yes — finds recurring mistakes automatically', chessBase: 'Manual (requires tagging & search setup)', chessLensWins: true },
  { feature: 'Human-level engine (Maia)', chessLens: 'Yes — ratings 1100–1900', chessBase: 'No', chessLensWins: true },
  { feature: 'Game database size', chessLens: 'Your personal games', chessBase: 'Millions of master games', chessLensWins: false },
  { feature: 'Opening preparation (pro)', chessLens: 'Not the focus', chessBase: 'Industry standard', chessLensWins: false },
  { feature: 'Chess.com sync', chessLens: 'Automatic', chessBase: 'Manual import', chessLensWins: true },
  { feature: 'Setup required', chessLens: 'None — works out of the box', chessBase: 'Significant (database configuration, engine setup)', chessLensWins: true },
  { feature: 'Local / offline', chessLens: 'Yes — fully offline analysis', chessBase: 'Yes', chessLensWins: null },
  { feature: 'Purpose', chessLens: 'Self-improvement for club players', chessBase: 'Professional game preparation', chessLensWins: null },
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
            Chess Lens vs ChessBase
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ChessBase is the professional standard for game preparation. Chess Lens is built for a different goal: automatically understanding your personal mistake patterns so you can improve faster.
          </p>
        </div>

        <!-- Summary cards -->
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <div class="p-6 rounded-2xl border border-primary/20" style="background: oklch(0.45 0.16 162.48 / 5%)">
            <p class="text-xs font-semibold text-primary tracking-wide uppercase mb-3">Chess Lens</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              Designed for club and amateur players who want to understand their own patterns. Automatic, free, and requires zero setup. Surfaces recurring mistakes you didn't know you were making—across your entire game history.
            </p>
          </div>
          <div class="p-6 rounded-2xl border border-black/5 bg-black/[0.02]">
            <p class="text-xs font-semibold text-muted-foreground tracking-wide uppercase mb-3">ChessBase</p>
            <p class="text-sm text-muted-foreground leading-relaxed">
              The industry standard for professional players and coaches who need a massive game database, opening tree management, and deep preparation tools. Powerful but expensive, Windows-only, and requires significant manual setup to extract personal insights.
            </p>
          </div>
        </div>

        <!-- Feature comparison table -->
        <div class="rounded-2xl border border-black/5 overflow-hidden mb-12">
          <div class="divide-y divide-black/5">
            <div class="grid grid-cols-3 px-5 py-3 bg-black/[0.02]">
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Feature</p>
              <p class="text-xs font-semibold text-primary uppercase tracking-wide">Chess Lens</p>
              <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide">ChessBase</p>
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
              <p class="text-sm text-muted-foreground">{{ row.chessBase }}</p>
            </div>
          </div>
        </div>

        <!-- Key differentiator -->
        <div class="p-8 rounded-2xl border border-black/5 bg-black/[0.02] mb-12">
          <h2 class="font-semibold mb-3">The key difference</h2>
          <p class="text-sm text-muted-foreground leading-relaxed mb-3">
            ChessBase requires you to know what you're looking for. You build opening trees, search for specific positions, and manually tag patterns. It's an incredibly powerful tool for players who know how to use it—but it puts the analytical burden on you.
          </p>
          <p class="text-sm text-muted-foreground leading-relaxed">
            Chess Lens does the analysis for you. It finds the positions you keep mishandling, groups them into patterns, and tells you how often they appear and how costly they are—without you having to set anything up. If ChessBase is a database, Chess Lens is an analyst.
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
