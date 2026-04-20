<script setup lang="ts">
import { Clock, TrendingUp, Globe, BookOpen } from 'lucide-vue-next'

const roadmapItems = [
  {
    icon: Globe,
    title: 'Lichess Integration',
    description: 'Sync games from Lichess alongside Chess.com for a complete picture of your play across platforms.',
  },
  {
    icon: Clock,
    title: 'Time Management Insights',
    description: 'Understand how you use your clock. See where you spend the most time, where you move too fast, and how time pressure affects your accuracy.',
  },
  {
    icon: TrendingUp,
    title: 'Opening Analysis',
    description: 'See how you handle your openings — where you deviate from theory, which lines give you the best results, and what to study next.',
  },
  {
    icon: BookOpen,
    title: 'Opening Repertoire Tracking',
    description: 'Map your actual games against your intended repertoire to see where you deviate and how often.',
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

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, i) in roadmapItems"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 4) + 1"
          class="p-5 rounded-xl border border-black/5 bg-black/[0.02]"
        >
          <div class="flex items-center gap-3 mb-3">
            <component :is="item.icon" class="size-5 text-muted-foreground" />
            <Badge variant="secondary" class="text-[10px] bg-black/5 text-muted-foreground border border-black/10">
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
