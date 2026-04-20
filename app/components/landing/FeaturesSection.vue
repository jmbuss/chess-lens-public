<script setup lang="ts">
import {
  Brain, Zap, BarChart2, RefreshCw,
  PanelLeft, GitBranch, HardDrive, Monitor, TableProperties, FileDown,
} from 'lucide-vue-next'

const headlineFeatures = [
  {
    title: 'Recurring Patterns — Find What\'s Holding You Back',
    description: 'Chess Lens groups similar positions from your recent games and surfaces recurring mistake patterns. See which types of positions cause you trouble, how often they appear, and the average evaluation loss. Drill into any pattern to walk through every instance across your games — and finally answer the question: what should I actually work on?',
    image: '/marketing/Recurring_Patterns.png',
    imageAlt: 'Recurring Patterns view showing position cards with average centipawn loss, frequency, and pattern categories like Threats and King Safety',
  },
  {
    title: 'Deep Game Analysis',
    description: 'Walk through your games move-by-move with full Stockfish and Maia analysis. See your move vs. the best move with annotation arrows, an interactive eval curve with Maia overlays for ratings 1100–1900, position-level mistake probability, human move distributions, and full NAG breakdowns — blunders, misses, inaccuracies, brilliant moves, and more.',
    image: '/marketing/Analysis.png',
    imageAlt: 'Game analysis interface showing chess board with annotation arrows, position analysis panel with Maia move probabilities, and eval curve',
  },
]

const coreFeatures = [
  {
    icon: Brain,
    title: 'Engine + Human Fusion',
    description: 'Stockfish for objective evaluation, Maia for human-like predictions at ratings 1100–1900. See where your thinking diverges from both.',
  },
  {
    icon: Zap,
    title: 'Automated Analysis',
    description: 'One-click deep analysis using your own hardware — free and fully offline. Every move classified with mistake probability and NAG annotations.',
  },
  {
    icon: BarChart2,
    title: 'Interactive Eval Chart',
    description: 'Evaluation over the entire game with Maia model overlays for ratings 1100–1900. Easily spot where human players — and you — go wrong.',
  },
  {
    icon: TableProperties,
    title: 'Games Library',
    description: 'All your games in a searchable, sortable, filterable data table. Filter by opponent, rating, result, opening, time control, and more. Favorite games for easy access.',
  },
  {
    icon: RefreshCw,
    title: 'Chess.com Sync',
    description: 'Connect your Chess.com account and sync games automatically. Lichess integration coming soon.',
  },
  {
    icon: PanelLeft,
    title: 'Resizable Workspace',
    description: 'PGN viewer, board, engine lines, and analysis tabs in resizable panels you can arrange to your preference.',
  },
  {
    icon: GitBranch,
    title: 'Variation Explorer',
    description: 'Play out alternative lines directly on the board. Variations are persisted and analyzed, building a full game tree you can review later.',
  },
  {
    icon: FileDown,
    title: 'PGN & FEN Export',
    description: 'Export a full game PGN or copy any position as FEN for sharing with coaches, study partners, or other tools.',
  },
  {
    icon: HardDrive,
    title: 'Local-First & Offline',
    description: 'Everything on your machine. No cloud dependency, no latency, no subscription to access your own analysis.',
  },
  {
    icon: Monitor,
    title: 'Native Desktop App',
    description: 'A real desktop application built for macOS and Windows. Keyboard navigation, dark mode, and a purpose-built UI for focused analysis.',
  },
]
</script>

<template>
  <section id="features" class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Features</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Everything you need to improve</h2>
      </div>

      <!-- Headline features -->
      <div class="grid lg:grid-cols-2 gap-5 mb-6">
        <div
          v-for="(feature, i) in headlineFeatures"
          :key="i"
          data-reveal
          :data-reveal-delay="i + 1"
          class="group relative p-7 rounded-2xl border border-black/5 bg-black/[0.02] overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="relative z-10">
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-6">{{ feature.description }}</p>
            <div class="rounded-lg overflow-hidden">
              <img
                :src="feature.image"
                :alt="feature.imageAlt"
                class="w-full block"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Core features grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="(feature, i) in coreFeatures"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 5) + 1"
          class="group p-5 rounded-xl border border-black/5 bg-black/[0.02] hover:bg-black/[0.04] transition-colors"
        >
          <component :is="feature.icon" class="size-5 text-primary/70 mb-3" />
          <h4 class="text-sm font-semibold mb-1.5">{{ feature.title }}</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
