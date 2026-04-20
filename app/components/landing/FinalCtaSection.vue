<template>
  <section id="get-early-access" class="relative py-24 md:py-32 px-6 overflow-hidden">
    <div class="absolute inset-0 bg-grid opacity-30" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[100px]" style="background: oklch(0.45 0.16 162.48 / 8%)" />

    <div class="relative z-10 max-w-2xl mx-auto text-center">
      <h2 data-reveal class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
        Ready to see your chess<br /><span class="text-gradient">differently?</span>
      </h2>
      <p data-reveal data-reveal-delay="1" class="text-base sm:text-lg text-muted-foreground mb-8">
        Join the waitlist for early access. We'll let you know when Chess Lens is ready.
      </p>
      <div data-reveal data-reveal-delay="2" class="flex justify-center">
        <LandingEmailSignupForm />
      </div>
      <p data-reveal data-reveal-delay="3" class="text-xs text-muted-foreground/70 mt-6">
        Coming soon for macOS and Windows.
      </p>
    </div>
  </section>
</template>
