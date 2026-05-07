<script setup lang="ts">
import { Github, Mail } from 'lucide-vue-next'

useSeoMeta({
  title: 'About Chess Lens — Built by a Chess Player, for Chess Players',
  description: 'Chess Lens is built by Jason Buss, a software engineer and chess enthusiast who got tired of existing tools not answering the questions that actually matter for improvement.',
  ogTitle: 'About Chess Lens — Built by a Chess Player, for Chess Players',
  ogDescription: 'Built by Jason Buss, a software engineer and chess enthusiast. A passion project born from real frustration with existing analysis tools.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'AboutPage' }),
  definePerson({
    name: 'Jason Buss',
    url: 'https://chesslens.org/about',
    sameAs: [
      'https://github.com/jmbuss',
    ],
    email: 'bussterjason@gmail.com',
    jobTitle: 'Software Engineer',
    description: 'Software engineer and chess enthusiast. Creator of Chess Lens, a local-first desktop chess analysis workstation.',
  }),
])
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main class="min-h-screen pt-24 pb-24 px-6">
      <div class="max-w-3xl mx-auto">

        <div class="text-center mb-12">
          <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About</p>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
            Built by a chess player,<br />for chess players
          </h1>
        </div>

        <div class="p-8 rounded-2xl border border-black/5 bg-black/[0.02] mb-10">
          <div class="flex flex-col sm:flex-row items-start gap-6">
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

              <p class="text-sm text-muted-foreground leading-relaxed">
                The tools that exist are great for reviewing a single game in isolation. But they don't help you answer the bigger question: <em>what patterns of mistakes am I actually repeating?</em> Chess Lens was built to answer that question—by analyzing your entire game history, not just one game at a time.
              </p>

              <p class="text-sm text-muted-foreground/70 leading-relaxed">
                Interested in working together, or building something like this at scale? I'd love to hear from you.
              </p>

              <div class="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://github.com/jmbuss"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-black/5 bg-black/[0.03] hover:bg-black/[0.06] transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <Github class="size-4" />
                  GitHub
                </a>
                <a
                  href="mailto:bussterjason@gmail.com"
                  class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-black/5 bg-black/[0.03] hover:bg-black/[0.06] transition-colors text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail class="size-4" />
                  bussterjason@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="p-8 rounded-2xl border border-black/5 bg-black/[0.02] mb-10">
          <h2 class="font-semibold mb-4">Why Chess Lens?</h2>
          <div class="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>Most chess improvement tools show you the engine's best move. That's useful—but it doesn't help you understand <em>why</em> you missed it, or whether it's part of a larger pattern in your play.</p>
            <p>Chess Lens combines Stockfish's objective evaluation with Maia's human-level move prediction to give you a more complete picture: not just what you should have played, but how likely you were to find it—and what kinds of positions you consistently mishandle.</p>
            <p>It's also completely offline and local-first. Your games, your analysis, your data. No subscriptions, no cloud latency, no limits on how much you can analyze.</p>
          </div>
        </div>

        <div class="text-center">
          <NuxtLink to="/download" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity mb-6">
            Download Chess Lens — Free
          </NuxtLink>
          <div>
            <NuxtLink to="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Chess Lens
            </NuxtLink>
          </div>
        </div>

      </div>
    </main>

    <LandingFooterSection />
  </div>
</template>
