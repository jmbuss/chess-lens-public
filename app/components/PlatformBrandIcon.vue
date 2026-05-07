<script setup lang="ts">
const props = defineProps<{
  platform: 'apple' | 'windows'
}>()

const maskUrl = computed(() =>
  props.platform === 'apple'
    ? "/apple-logo-svgrepo-com.svg"
    : "/windows-logo-fill-svgrepo-com.svg",
)
</script>

<template>
  <span
    class="inline-block shrink-0 bg-current"
    :style="{
      WebkitMaskImage: `url('${maskUrl}')`,
      WebkitMaskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskImage: `url('${maskUrl}')`,
      maskSize: 'contain',
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
    }"
    aria-hidden="true"
  />
</template>
