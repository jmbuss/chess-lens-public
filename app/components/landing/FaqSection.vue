<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  limit?: number
}>(), {
  limit: undefined,
})

const faqs = computed(() =>
  props.limit !== undefined ? ALL_FAQS.slice(0, props.limit) : ALL_FAQS,
)

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

useSchemaOrg(
  ALL_FAQS.map(faq =>
    defineQuestion({
      name: faq.question,
      acceptedAnswer: faq.answer,
    }),
  ),
)
</script>

<template>
  <section id="faq" class="relative py-24 md:py-32 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-16" data-reveal>
        <p class="text-sm font-medium text-primary mb-3 tracking-wide uppercase">FAQ</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">Common questions</h2>
      </div>

      <div class="space-y-2">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          data-reveal
          :data-reveal-delay="(i % 6) + 1"
          class="rounded-xl border border-black/5 bg-black/[0.02] overflow-hidden"
        >
          <button
            type="button"
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-black/[0.02] transition-colors"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="text-sm font-semibold leading-snug">{{ faq.question }}</span>
            <ChevronDown
              class="size-4 text-muted-foreground shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === i }"
            />
          </button>
          <div
            v-show="openIndex === i"
            class="px-6 pb-5"
          >
            <p class="text-sm text-muted-foreground leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>

      <div v-if="limit !== undefined" class="text-center mt-10" data-reveal>
        <NuxtLink
          to="/faq"
          class="text-sm text-primary hover:underline font-medium"
        >
          View all frequently asked questions →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
