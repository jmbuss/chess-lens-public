<template>
  <footer class="border-t border-black/5 py-12 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid sm:grid-cols-3 gap-8 mb-10">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
            <img src="/favicon.png" alt="Chess Lens" class="size-4" />
            Chess Lens
          </NuxtLink>
          <p class="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
            Local-first desktop chess analysis for macOS and Windows. Free.
          </p>
        </div>

        <!-- Product links -->
        <div>
          <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Product</p>
          <ul class="space-y-2">
            <li><NuxtLink to="/download" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Download</NuxtLink></li>
            <li><a href="/#features" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
            <li><NuxtLink to="/how-it-works" class="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</NuxtLink></li>
            <li><a href="/#roadmap" class="text-sm text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
          </ul>
        </div>

        <!-- Info links -->
        <div>
          <p class="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Learn More</p>
          <ul class="space-y-2">
            <li><NuxtLink to="/faq" class="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-sm text-muted-foreground hover:text-foreground transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/vs/chess-com-analysis" class="text-sm text-muted-foreground hover:text-foreground transition-colors">vs Chess.com</NuxtLink></li>
            <li><NuxtLink to="/vs/chessbase" class="text-sm text-muted-foreground hover:text-foreground transition-colors">vs ChessBase</NuxtLink></li>
            <li><NuxtLink to="/vs/lichess-analysis" class="text-sm text-muted-foreground hover:text-foreground transition-colors">vs Lichess</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-black/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-muted-foreground/60">
          &copy; {{ new Date().getFullYear() }} Chess Lens. Built for serious chess players.
        </p>
        <a
          href="mailto:bussterjason@gmail.com"
          class="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
        >
          bussterjason@gmail.com
        </a>
      </div>
    </div>
  </footer>
</template>
