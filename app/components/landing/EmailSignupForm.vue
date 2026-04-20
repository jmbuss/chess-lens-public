<script setup lang="ts">
import { CheckCircle2, ArrowRight } from 'lucide-vue-next'

const email = ref('')
const status = ref<'idle' | 'success'>('idle')

function handleSubmit() {
  if (!email.value) return

  const { $posthog } = useNuxtApp()
  const ph = ($posthog as any)()
  ph?.identify(email.value, { email: email.value })
  ph?.capture('waitlist_signup')

  status.value = 'success'
  email.value = ''
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
        class="flex-1 bg-black/[0.03] border-black/10 text-foreground placeholder:text-muted-foreground h-11"
      />
      <Button
        type="submit"
        size="lg"
        class="h-11 px-5 shrink-0 cursor-pointer"
      >
        Get early access
        <ArrowRight class="size-4" />
      </Button>
    </form>

    <div v-else class="flex items-center gap-2 text-primary">
      <CheckCircle2 class="size-5" />
      <span class="text-sm font-medium">You're on the list! We'll be in touch.</span>
    </div>

  </div>
</template>
