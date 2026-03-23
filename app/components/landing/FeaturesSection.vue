<script setup lang="ts">
import {
  Search, BookMarked, Brain, Zap, BarChart2, RefreshCw,
  PanelLeft, GitBranch, HardDrive, Monitor,
} from 'lucide-vue-next'

const headlineFeatures = [
  {
    icon: Search,
    title: 'Searchable Chess Games',
    description: 'Your games become a personal database you can actually query. "How often do I blunder in the opening?" "How do I perform in pawn endgames?" Chess Lens indexes your analyzed games so you can search across hundreds or thousands of games and get real answers about your play.',
  },
  {
    icon: BookMarked,
    title: 'Positions Library — Your Mistakes, Catalogued',
    description: 'Chess Lens automatically saves and categorizes critical positions from your games: blunders, strategic mistakes, missed tactics. Over time, you build a personal library of your weaknesses — recurring blind spots you didn\'t know you had. Stop making the same mistakes.',
  },
]

const coreFeatures = [
  {
    icon: Brain,
    title: 'Engine + Human Fusion',
    description: 'Stockfish for objective evaluation, Maia for human-like predictions at your rating level. See where your thinking diverges from both.',
  },
  {
    icon: Zap,
    title: 'Automated Analysis',
    description: 'One-click deep analysis with multiple presets. Every move classified with mistake probability distributions, not just labels.',
  },
  {
    icon: BarChart2,
    title: 'Interactive Eval Chart',
    description: 'Evaluation over the entire game with phase-colored backgrounds for opening, middlegame, and endgame. Click to jump.',
  },
  {
    icon: RefreshCw,
    title: 'Chess.com Sync',
    description: 'Connect your Chess.com account and sync games automatically. Stored locally in a fast SQLite database.',
  },
  {
    icon: PanelLeft,
    title: 'Resizable Workspace',
    description: 'PGN viewer, board, engine lines, and analysis tabs in resizable panels you can arrange to your preference.',
  },
  {
    icon: GitBranch,
    title: 'Variation Explorer',
    description: 'Play out alternative lines directly on the board. Variations are persisted and analyzed, building a full game tree.',
  },
  {
    icon: HardDrive,
    title: 'Local-First & Offline',
    description: 'Everything on your machine. No cloud dependency, no latency, no subscription to access your own analysis.',
  },
  {
    icon: Monitor,
    title: 'Native Desktop App',
    description: 'A real desktop application. Keyboard navigation, dark mode, and a purpose-built UI for focused analysis.',
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
          class="group relative p-7 rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div class="relative z-10">
            <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <component :is="feature.icon" class="size-5 text-primary" />
            </div>
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-6">{{ feature.description }}</p>
            <!-- Placeholder for future screenshot -->
            <div class="rounded-lg border border-white/5 bg-black/30 p-4 h-36 flex flex-col gap-2">
              <div class="h-7 rounded bg-white/5 flex items-center px-3 gap-2">
                <div class="size-3 rounded-sm bg-white/10" />
                <div class="h-1.5 w-24 rounded bg-white/10" />
              </div>
              <div class="flex-1 grid grid-cols-3 gap-1.5">
                <div class="rounded bg-white/[0.03] border border-white/5" />
                <div class="rounded bg-white/[0.03] border border-white/5" />
                <div class="rounded bg-white/[0.03] border border-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core features grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(feature, i) in coreFeatures"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 4) + 1"
          class="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
        >
          <component :is="feature.icon" class="size-5 text-primary/70 mb-3" />
          <h4 class="text-sm font-semibold mb-1.5">{{ feature.title }}</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
