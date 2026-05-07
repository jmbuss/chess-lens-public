<script setup lang="ts">

useSeoMeta({
  title: 'Chess Lens FAQ — Frequently Asked Questions',
  description: 'Answers to common questions about Chess Lens: how to download, supported platforms, engines used, how recurring patterns work, privacy, and more.',
  ogTitle: 'Chess Lens FAQ — Frequently Asked Questions',
  ogDescription: 'Everything you need to know about Chess Lens: download, install, engines, features, privacy, and more.',
  ogImage: 'https://chesslens.org/og/chess-lens-og.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://chesslens.org/og/chess-lens-og.png',
})

useSchemaOrg([
  defineWebPage({ '@type': 'FAQPage' }),
  ...ALL_FAQS.map(faq =>
    defineQuestion({
      name: faq.question,
      acceptedAnswer: faq.answer,
    }),
  ),
])

const openIndex = ref<number | null>(null)
function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <div>
    <LandingStickyHeader />

    <main class="min-h-screen pt-24 pb-24 px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
          <p class="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Chess Lens.
          </p>
        </div>

        <div class="space-y-2 mb-12">
          <div
            v-for="(faq, i) in ALL_FAQS"
            :key="i"
            class="rounded-xl border border-black/5 bg-black/[0.02] overflow-hidden"
          >
            <button
              type="button"
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-black/[0.02] transition-colors"
              :aria-expanded="openIndex === i"
              @click="toggle(i)"
            >
              <span class="text-sm font-semibold leading-snug">{{ faq.question }}</span>
              <svg
                class="size-4 text-muted-foreground shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180': openIndex === i }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="openIndex === i" class="px-6 pb-5">
              <p class="text-sm text-muted-foreground leading-relaxed">{{ faq.answer }}</p>
            </div>
          </div>
        </div>

        <div class="text-center space-y-4">
          <p class="text-sm text-muted-foreground">Still have a question?</p>
          <a
            href="mailto:bussterjason@gmail.com"
            class="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            Email Jason →
          </a>
          <div class="pt-2">
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
