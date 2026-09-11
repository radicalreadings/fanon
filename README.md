# Radical Readings

Book club reading resources — meeting date/time, supplemental links, and book info for each session. Built with Vue 3 + Vuetify, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Type-check only |
| `npm run lint` | Lint the project |
| `npm run lint:fix` | Lint and auto-fix |
| `npm run format` | Format `src/` with Prettier |

## Structure

One Vue page per book — no router, no theme toggle, no landing page, no shared data schema. Just write the page:

- `src/pages/WretchedOfTheEarth.vue` — the book's content, written directly in the page (title, author, links, etc. as plain values), composed from the shared components in `src/components/session/` (`SessionHero`, `MeetingDetailsCard`, `BookInfoCard`, `SupplementalLinksList`). Each of those takes plain individual props (`title`, `date`, `location`, ...) — there's no central "book" type they all have to conform to, so a page only passes what it actually has.
- `src/App.vue` — the app shell (header/footer) that renders that one page

Cover images go in `public/covers/`; pass the path (relative to that folder, e.g. `"wretched-of-the-earth.jpg"`) as a book's `coverImage` prop.

## Adding a second book

1. Copy `src/pages/WretchedOfTheEarth.vue` to a new page, e.g. `src/pages/NextBook.vue`, and fill in its own values.
2. Decide how the two pages coexist (a simple nav link, routes via `vue-router`, or separate static HTML entry points via Vite's multi-page build are all reasonable — worth deciding once there's an actual second book).

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which lints, builds, and publishes the site to GitHub Pages automatically. Pull requests and other branches run [`.github/workflows/ci.yml`](.github/workflows/ci.yml) (lint + build) without deploying.

For this to work, the repo's **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.

The site is served at `https://radicalreadings.github.io/fanon/`. If this repo ever moves to a custom domain, update `base` in `vite.config.ts` accordingly.
