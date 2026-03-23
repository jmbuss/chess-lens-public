<script setup lang="ts">
import { Target, TrendingUp, Download, Filter, BookOpen, Share2 } from 'lucide-vue-next'

const roadmapItems = [
  {
    icon: Target,
    title: 'Similar Position Search',
    description: 'Find structurally similar positions across your game history. Discover recurring themes and patterns you never noticed.',
  },
  {
    icon: TrendingUp,
    title: 'Mistake Trend Analysis',
    description: 'Track how your mistake patterns change over time. Are you blundering less? Are your endgames improving? See progress backed by data.',
  },
  {
    icon: Download,
    title: 'Lichess Integration',
    description: 'Sync games from Lichess alongside Chess.com for a complete picture of your play.',
  },
  {
    icon: Filter,
    title: 'Advanced Filtering & Sorting',
    description: 'Filter your game library by opening, result, time control, rating range, and more.',
  },
  {
    icon: BookOpen,
    title: 'Opening Repertoire Tracking',
    description: 'See how your actual play maps to your intended repertoire and where you deviate.',
  },
  {
    icon: Share2,
    title: 'Export & Sharing',
    description: 'Export annotated PGNs and share analysis with coaches or study partners.',
  },
]
</script>

<template>
  <section id="roadmap" class="relative py-24 md:py-32 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Roadmap</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">What's coming next</h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, i) in roadmapItems"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 3) + 1"
          class="p-5 rounded-xl border border-white/5 bg-white/[0.02]"
        >
          <div class="flex items-center gap-3 mb-3">
            <component :is="item.icon" class="size-5 text-muted-foreground" />
            <Badge variant="secondary" class="text-[10px] bg-white/5 text-muted-foreground border border-white/10">
              Coming soon
            </Badge>
          </div>
          <h4 class="text-sm font-semibold mb-1.5">{{ item.title }}</h4>
          <p class="text-xs text-muted-foreground leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
