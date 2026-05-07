/**
 * GitHub Releases source for installers. Keep firebase.json redirects aligned with
 * LATEST_*_DOWNLOAD_URL when asset filenames change.
 */
export const GITHUB_RELEASES_REPO = 'jmbuss/chess-lens-releases' as const

const GITHUB_LATEST_DOWNLOAD_BASE = `https://github.com/${GITHUB_RELEASES_REPO}/releases/latest/download`

/** Filenames attached to each GitHub release (latest/download/...). */
export const MAC_INSTALLER_ASSET = 'ChessLens-mac.dmg' as const
export const WINDOWS_INSTALLER_ASSET = 'ChessLens-Setup.exe' as const

export const LATEST_MAC_DOWNLOAD_URL = `${GITHUB_LATEST_DOWNLOAD_BASE}/${MAC_INSTALLER_ASSET}`
export const LATEST_WINDOWS_DOWNLOAD_URL = `${GITHUB_LATEST_DOWNLOAD_BASE}/${WINDOWS_INSTALLER_ASSET}`
