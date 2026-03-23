<script setup lang="ts">
import { Loader2, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const config = useRuntimeConfig()

const email = ref('')
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function handleSubmit() {
  if (!email.value || status.value === 'loading') return

  status.value = 'loading'
  errorMessage.value = ''

  try {
    await $fetch(config.public.subscribeEndpoint as string, {
      method: 'POST',
      body: { email: email.value },
    })
    status.value = 'success'
    email.value = ''

    try {
      const { $posthog } = useNuxtApp()
      ;($posthog as any)?.capture('waitlist_signup')
    } catch {}
  } catch {
    status.value = 'error'
    errorMessage.value = 'Something went wrong. Please try again.'
  }
}
</script>

<template>
  <div class="w-full max-w-md">
    <form v-if="status !== 'success'" class="flex flex-col sm:flex-row gap-2" @submit.prevent="handleSubmit">
      <Input
        v-model="email"
        type="email"
        placeholder="you@email.com"
        required
        aria-label="Email address"
        class="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/30 h-11"
      />
      <Button
        type="submit"
        :disabled="status === 'loading'"
        size="lg"
        class="h-11 px-5 shrink-0 cursor-pointer"
      >
        <Loader2 v-if="status === 'loading'" class="size-4 animate-spin" />
        <template v-else>
          Get early access
          <ArrowRight class="size-4" />
        </template>
      </Button>
    </form>

    <div v-else class="flex items-center gap-2 text-primary">
      <CheckCircle2 class="size-5" />
      <span class="text-sm font-medium">You're on the list! We'll be in touch.</span>
    </div>

    <p v-if="status === 'error'" class="mt-2 text-sm text-destructive">{{ errorMessage }}</p>
  </div>
</template>
