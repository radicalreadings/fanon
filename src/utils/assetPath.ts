/**
 * Resolves a path relative to public/ into a URL that respects Vite's
 * configured `base` (e.g. "/fanon/" on GitHub Pages, so this never breaks
 * if the site ever moves to a custom domain and base changes to "/").
 *
 * Usage: withBase('covers/wretched-of-the-earth.jpg')
 */
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
