<script setup lang="ts">
import { Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="relative py-24 md:py-32 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Built by a chess player,<br />for chess players</h2>
      </div>

      <div data-reveal data-reveal-delay="1" class="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
        <div class="flex flex-col sm:flex-row items-start gap-6">
          <!-- Avatar placeholder -->
          <div class="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <span class="text-2xl font-bold text-primary">JB</span>
          </div>

          <div class="space-y-4">
            <p class="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Chess Lens is built by <span class="text-foreground font-medium">Jason Buss</span> — a software engineer
              and chess enthusiast who got tired of existing tools not answering the questions that actually matter
              for improvement. This is a passion project born from real frustration with the gap between what chess
              analysis tools offer and what players actually need.
            </p>

            <p class="text-sm text-muted-foreground/70 leading-relaxed">
              Interested in working together, or building something like this at scale? I'd love to hear from you.
            </p>

            <div class="flex flex-wrap gap-3 pt-1">
              <a
                href="https://github.com/jmbuss"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-sm text-muted-foreground hover:text-foreground"
              >
                <Github class="size-4" />
                GitHub
              </a>
              <a
                href="mailto:bussterjason@gmail.com"
                class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail class="size-4" />
                bussterjason@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
