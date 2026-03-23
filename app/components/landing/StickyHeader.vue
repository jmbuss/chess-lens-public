<script setup lang="ts">
import { Crown } from 'lucide-vue-next'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2 text-foreground font-semibold text-lg">
        <Crown class="size-5 text-primary" />
        Chess Lens
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
        <a href="#roadmap" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a>
        <a href="#about" class="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
      </div>

      <a href="#get-early-access">
        <Button size="sm">
          Get Early Access
        </Button>
      </a>
    </nav>
  </header>
</template>
