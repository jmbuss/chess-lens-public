<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'dark',
    lang: 'en',
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
