/** Re-fetch GitHub latest release after static HTML hydration (build-time version may be stale). */
export default defineNuxtPlugin(() => {
  const { refresh } = useLatestRelease()
  refresh()
})
