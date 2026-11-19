# NEXORA

**Private conversations. No phone number required.**

NEXORA is a privacy-first global messaging application engineered around username identity, zero advertising, zero data brokerage, and transparent open-source architecture.

**NEXORA — Founded by Saurabh Kumar**

---

## Project Status: Milestone 1 — Application Foundation

This repository currently implements **Milestone 1 (Application Foundation)** only. Unimplemented features display honest "not yet available" states rather than simulated authentication, mock chats, or placeholder encryption claims.

### Implemented in Milestone 1

- Next.js App Router architecture organized under `src/`
- Strict TypeScript configuration (`strict`, `noUncheckedIndexedAccess`)
- Tailwind CSS v4 design system with Dark Navy (`#050B16`) and Light themes
- Responsive navigation, landing page, `/about`, `/privacy`, `/terms`, `/settings`
- Honest Milestone 2–4 placeholder routes (`/login`, `/register`, `/chat`)
- Zod boundary validation schemas (`src/lib/validation/auth.ts`)
- Security headers (`next.config.ts`) and URL/text sanitization helpers (`src/lib/security/`)
- PWA manifest preparation (`src/app/manifest.ts`) and PNG icon assets (`public/icons/`)
- Automated unit tests (`tests/`), ESLint configuration, and project documentation (`docs/`)

### Not Implemented Yet (Future Milestones)

- **Milestone 2**: Supabase integration, username-based registration, authentication, and server-verified sessions
- **Milestone 3**: Real-time direct messaging core and contact management
- **Milestone 4**: Audited client-side end-to-end encryption (E2EE) and per-device cryptographic keys

---

## Technology Stack

- **Framework**: Next.js 15 (App Router, React Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Validation**: Zod
- **Animation**: Motion (`motion/react` with `prefers-reduced-motion` support)
- **Linting & Tests**: ESLint, `tsc --noEmit`, Node.js built-in test runner

---

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js development server on port `3000` (`0.0.0.0`) |
| `npm run build` | Build production bundle (`output: "standalone"`) |
| `npm run start` | Start production server on port `3000` |
| `npm run lint` | Run ESLint across the repository |
| `npm run typecheck` | Run TypeScript strict type checking (`tsc --noEmit`) |
| `npm test` | Run automated unit tests in `tests/` |

---

## Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Security Posture & Threat Model](./docs/SECURITY.md)
- [Development & PWA Guide](./docs/DEVELOPMENT.md)
- [PWA Icon Requirements](./public/icons/README.md)

---

## License

Licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See [LICENSE](./LICENSE) for full details.

**NEXORA — Founded by Saurabh Kumar**