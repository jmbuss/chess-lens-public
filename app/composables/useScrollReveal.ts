export function useScrollReveal() {
  if (import.meta.server) return

  onMounted(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const viewportHeight = window.innerHeight

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportHeight - 40) {
        el.classList.add('revealed')
      }
    })

    document.documentElement.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el)
      }
    })
  })
}
