<template>
  <footer class="border-t border-black/5 py-8 px-6">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2 text-sm text-muted-foreground">
        <img src="/favicon.png" alt="Chess Lens" class="size-4" />
        <span>Chess Lens</span>
      </div>
      <p class="text-xs text-muted-foreground/60">
        &copy; {{ new Date().getFullYear() }} Chess Lens. Built for serious chess players.
      </p>
    </div>
  </footer>
</template>
