<script setup lang="ts">
import { Link, Cpu, Search, CheckCircle2 } from 'lucide-vue-next'

useSeoMeta({
  title: 'How Chess Lens Works — Connect, Analyze, Improve',
  description: 'Learn how Chess Lens works: sync games from Chess.com, run Stockfish + Maia analysis on your hardware, then search and study your recurring mistake patterns.',
  ogTitle: 'How Chess Lens Works — Connect, Analyze, Improve',
  ogDescription: 'Sync games from Chess.com, analyze with Stockfish + Maia on your own hardware, then find and fix your recurring mistake patterns.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'WebPage' }),
  defineHowTo({
    name: 'How to use Chess Lens to improve at chess',
    description: 'Three steps to understand your chess patterns and improve with intent using Chess Lens.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Connect your Chess.com account',
        text: 'Enter your Chess.com username in Chess Lens. The app syncs your game history automatically via the public API—no password required. All games are stored locally on your machine.',
        image: 'https://chesslens.org/marketing/Games_Data_Table.png',
      },
      {
        '@type': 'HowToStep',
        name: 'Run automated analysis',
        text: 'Click to analyze any game or your entire library. Chess Lens uses Stockfish for objective evaluation and Maia for human-level predictions. Every move is classified with a NAG annotation, centipawn loss, and mistake probability. Analysis runs entirely on your own hardware—free and offline.',
        image: 'https://chesslens.org/marketing/Analysis.png',
      },
      {
        '@type': 'HowToStep',
        name: 'Search your games and fix recurring patterns',
        text: 'Browse your positions library to see the mistake patterns that repeat across your games. Each pattern shows frequency, average centipawn loss, and links to every game instance. Use the searchable game table to filter by opponent, result, opening, time control, and more.',
        image: 'https://chesslens.org/marketing/Recurring_Patterns.png',
      },
    ],
  }),
])

const steps = [
  {
    icon: Link,
    number: '01',
    title: 'Connect your Chess.com account',
    description: 'Enter your Chess.com username. Chess Lens syncs your game history via the public API—no password required. Your games are stored locally on your machine and stay there.',
    details: [
      'Sync all your games automatically',
      'No account creation required',
      'Everything stored locally',
      'Lichess integration coming soon',
    ],
    image: '/marketing/Games_Data_Table.png',
    imageAlt: 'Chess Lens games library: searchable table with opponent, result, opening, and time control filters',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Run deep automated analysis',
    description: 'One click to analyze any game—or your entire library. Chess Lens uses Stockfish for objective evaluation and Maia for human-level predictions at ratings 1100–1900. Every move is classified and annotated.',
    details: [
      'Stockfish engine for best-move evaluation',
      'Maia models for human-level move prediction',
      'Full NAG annotation (blunders, misses, brilliant moves)',
      'Runs on your hardware — free and offline',
    ],
    image: '/marketing/Analysis.png',
    imageAlt: 'Chess Lens analysis view: eval curve with Maia overlays, move annotation arrows, and position breakdown',
  },
  {
    icon: Search,
    number: '03',
    title: 'Find and fix your recurring patterns',
    description: 'After analysis, Chess Lens groups similar positions into recurring mistake patterns. See which types of positions cause you the most trouble, how often they appear, and drill into every game instance.',
    details: [
      'Automatic pattern grouping by position type',
      'Frequency and average centipawn loss per pattern',
      'Walk through every game instance in context',
      'Searchable game table with advanced filters',
    ],
    image: '/marketing/Recurring_Patterns.png',
    imageAlt: 'Chess Lens recurring patterns view: cards showing position frequency, centipawn loss, and pattern categories',
  },
]
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main class="min-h-screen pt-24 pb-24 px-6">
      <div class="max-w-4xl mx-auto">

        <!-- Header -->
        <div class="text-center mb-20">
          <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">How It Works</p>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Three steps to better chess
          </h1>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Chess Lens turns your game history into a searchable, analyzable dataset—then surfaces the patterns that are actually holding you back.
          </p>
        </div>

        <!-- Steps -->
        <div class="space-y-24">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="grid lg:grid-cols-2 gap-10 items-center"
            :class="{ 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1': i % 2 === 1 }"
          >
            <!-- Content -->
            <div>
              <div class="text-5xl font-bold text-muted-foreground/10 mb-3">{{ step.number }}</div>
              <component :is="step.icon" class="size-6 text-primary mb-4" />
              <h2 class="text-2xl font-bold tracking-tight mb-4">{{ step.title }}</h2>
              <p class="text-muted-foreground leading-relaxed mb-6">{{ step.description }}</p>
              <ul class="space-y-2">
                <li
                  v-for="(detail, di) in step.details"
                  :key="di"
                  class="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 class="size-4 text-primary shrink-0" />
                  {{ detail }}
                </li>
              </ul>
            </div>

            <!-- Image -->
            <div class="rounded-2xl overflow-hidden border border-black/5">
              <img
                :src="step.image"
                :alt="step.imageAlt"
                class="w-full block"
              />
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-24 p-10 rounded-2xl border border-primary/20" style="background: oklch(0.45 0.16 162.48 / 5%)">
          <h2 class="text-2xl font-bold tracking-tight mb-3">Ready to get started?</h2>
          <p class="text-muted-foreground mb-6">Download Chess Lens free for macOS and Windows.</p>
          <NuxtLink
            to="/download"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Download Chess Lens — Free
          </NuxtLink>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Chess Lens
          </NuxtLink>
        </div>

      </div>
    </main>

    <LandingFooterSection />
  </div>
</template>
