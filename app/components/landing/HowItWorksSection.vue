<script setup lang="ts">
import { Link, Cpu, Search } from 'lucide-vue-next'

const steps = [
  {
    icon: Link,
    title: 'Connect',
    description: 'Link your Chess.com account and sync your games. Everything stored locally on your machine.',
  },
  {
    icon: Cpu,
    title: 'Analyze',
    description: 'Run automated analysis powered by Stockfish + Maia on any game. Every move classified and annotated.',
  },
  {
    icon: Search,
    title: 'Search & Improve',
    description: 'Query your games, browse your positions library, and find the patterns holding you back.',
  },
]
</script>

<template>
  <section id="how-it-works" class="relative py-24 md:py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">How It Works</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Three steps to better chess</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <div
          v-for="(step, i) in steps"
          :key="i"
          data-reveal
          :data-reveal-delay="i + 1"
          class="text-center"
        >
          <div class="size-12 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary font-semibold text-lg">
            {{ i + 1 }}
          </div>
          <component :is="step.icon" class="size-6 text-muted-foreground mx-auto mb-3" />
          <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
