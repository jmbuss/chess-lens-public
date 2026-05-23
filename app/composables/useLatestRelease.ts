import { GITHUB_RELEASES_REPO } from '~/utils/releaseDownloads'

export interface LatestRelease {
  version: string
  publishedAt: string
  htmlUrl: string
  macSizeBytes?: number
  windowsSizeBytes?: number
}

function formatMB(bytes?: number): string | undefined {
  if (!bytes) return undefined
  return `${(bytes / 1_048_576).toFixed(1)} MB`
}

export function useLatestRelease() {
  return useAsyncData<LatestRelease | null>(
    'latest-release',
    async (): Promise<LatestRelease | null> => {
      try {
        const url = `https://api.github.com/repos/${GITHUB_RELEASES_REPO}/releases/latest`
        const res = await fetch(url, {
          headers: {
            'User-Agent': 'chesslens-marketing-build',
            'Accept': 'application/vnd.github+json',
          },
        })

        if (!res.ok) return null

        const r = await res.json() as Record<string, unknown>
        const assets = (r.assets as Record<string, unknown>[] | undefined) ?? []
        const findAsset = (re: RegExp) => assets.find(a => re.test(a.name as string))

        const mac = findAsset(/\.dmg$/i)
        const win = findAsset(/\.msi$/i) ?? findAsset(/\.exe$/i)

        return {
          version: (r.tag_name as string | undefined)?.replace(/^v/, '') ?? '1.0',
          publishedAt: (r.published_at as string | undefined) ?? new Date().toISOString(),
          htmlUrl: (r.html_url as string | undefined) ?? `https://github.com/${GITHUB_RELEASES_REPO}/releases`,
          macSizeBytes: mac?.size as number | undefined,
          windowsSizeBytes: win?.size as number | undefined,
        }
      }
      catch {
        // Build must not fail if the API is unreachable (no releases yet, rate limit, private repo, etc.)
        return null
      }
    },
    {
      server: true,
      default: (): LatestRelease | null => null,
    },
  )
}

export function useMacSize(release: LatestRelease | null | undefined) {
  return formatMB(release?.macSizeBytes)
}

export function useWindowsSize(release: LatestRelease | null | undefined) {
  return formatMB(release?.windowsSizeBytes)
}

export { formatMB }
