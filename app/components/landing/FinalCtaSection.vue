<template>
  <section id="signup-for-updates" class="relative py-24 md:py-32 px-6 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px]" style="background: oklch(0.45 0.16 162.48 / 8%)" />

    <div class="relative z-10 max-w-2xl mx-auto text-center">
      <h2 data-reveal class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        Ready to see your chess<br /><span class="text-gradient">differently?</span>
      </h2>
      <p data-reveal data-reveal-delay="1" class="text-base sm:text-lg text-muted-foreground mb-8">
        Download Chess Lens free for macOS and Windows. No account required.
      </p>

      <!-- Primary: Download buttons -->
      <div data-reveal data-reveal-delay="2" class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <NuxtLink
          to="/download/mac"
          class="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <PlatformBrandIcon platform="apple" class="size-4" />
          Download for macOS
        </NuxtLink>
        <NuxtLink
          to="/download/windows"
          class="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-black/10 bg-black/[0.03] text-foreground font-semibold text-sm hover:bg-black/[0.06] transition-colors"
        >
          <PlatformBrandIcon platform="windows" class="size-4" />
          Download for Windows
        </NuxtLink>
      </div>

      <!-- Secondary: email -->
      <div data-reveal data-reveal-delay="3" class="flex flex-col items-center gap-2">
        <p class="text-xs text-muted-foreground/70">Sign up for updates</p>
        <LandingEmailSignupForm />
      </div>
    </div>
  </section>
</template>
