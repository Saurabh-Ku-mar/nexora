# NEXORA Architecture (Milestone 1)

## Directory Layout

```text
src/
├── app/                   # Next.js App Router pages, layout, CSS, and manifest
│   ├── about/             # Project overview, route catalog, and Founder section
│   ├── chat/              # Milestone 3 & 4 honest placeholder
│   ├── login/             # Milestone 2 honest placeholder
│   ├── privacy/           # Privacy policy and data minimization commitment
│   ├── register/          # Milestone 2 honest placeholder
│   ├── settings/          # Active Light/Dark appearance settings + upcoming modules
│   ├── terms/             # Terms of service and GNU AGPL-3.0 notice
│   ├── globals.css        # Tailwind CSS v4 + class-based dark mode variant
│   ├── layout.tsx         # Root Server Component layout & metadata
│   ├── manifest.ts        # PWA Web App Manifest metadata route
│   └── page.tsx           # Public landing page
├── components/
│   ├── layout/            # Header, Footer, and ThemeProvider
│   ├── marketing/         # Landing page sections (Hero, Intro, Principles, Roadmap, Security)
│   └── ui/                # Reusable UI controls (ThemeToggle, MilestoneNotice, MotionFadeIn)
├── lib/
│   ├── config/            # Centralized site metadata, roadmap, and route definitions
│   ├── security/          # HTTP security header definitions and URL/text sanitization
│   └── validation/        # Zod boundary validation schemas prepared for Milestone 2
└── types/                 # Shared TypeScript interfaces and domain types
public/
└── icons/                 # PWA icon assets (192x192, 512x512, maskable, 180x180)
docs/                      # Architecture, Security, and Development guides
tests/                     # Automated validation and security unit tests
```

## Server vs. Client Component Strategy

- **Server Components by Default**: Root layout, landing page, `/about`, `/privacy`, `/terms`, `/login`, `/register`, `/chat`, and `/settings` render on the server.
- **Minimal Client Leaves**: Only interactive controls (`ThemeProvider`, `ThemeToggle`, `SiteHeader` mobile drawer, `RoadmapSection` filter tabs, `SecurityPhilosophySection` step tabs, `SettingsAppearanceCard`, and `MotionFadeIn`) use `"use client"`.

## Planned Multi-Milestone Evolution

1. **Milestone 1 (Active)**: Web foundation, design tokens, routes, validation schemas, security headers, PWA manifest, and tests.
2. **Milestone 2**: Supabase integration, username identity registration (no phone number required), and server-verified authentication.
3. **Milestone 3**: Direct messaging core, contact handles, and real-time message delivery.
4. **Milestone 4**: Audited client-side end-to-end encryption (E2EE) and device key verification.
