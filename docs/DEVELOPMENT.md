# NEXORA Development Guide

## Prerequisites

- Node.js 22+
- npm 10+ (use `npm` with `package-lock.json`)

## Setup

```bash
npm install
cp .env.example .env.local
```

## Environment Variables

See `.env.example`. Milestone 1 requires no secret credentials to run locally. Future Milestone 2+ variables for Supabase are documented as commented placeholders and must never be committed to version control.

## Development Workflow

- `npm run dev` — Launches Next.js dev server at `http://0.0.0.0:3000`.
- `npm run typecheck` — Runs `tsc --noEmit` with strict mode enabled.
- `npm run lint` — Runs ESLint (`eslint-config-next/core-web-vitals` and `typescript`).
- `npm test` — Runs unit tests in `tests/` using `node --test`.
- `npm run build` — Produces the standalone production Next.js build.

## PWA Preparation

- Manifest route: `src/app/manifest.ts`
- Icons: `public/icons/` (`icon-192x192.png`, `icon-512x512.png`, `icon-maskable-512x512.png`, `apple-touch-icon.png`)
- Documentation: `public/icons/README.md`
- No service worker is registered in Milestone 1 to avoid premature caching before authenticated routes exist.
