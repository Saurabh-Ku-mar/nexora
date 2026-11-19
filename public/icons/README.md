# NEXORA PWA Icon Assets

This directory contains the Progressive Web App (PWA) icons referenced by `src/app/manifest.ts` and `src/app/layout.tsx`.

## Required Assets

| File | Dimensions | Purpose | Notes |
| --- | --- | --- | --- |
| `icon-192x192.png` | `192x192` | `any` | Standard home-screen and launcher icon |
| `icon-512x512.png` | `512x512` | `any` | Splash screen and high-DPI icon |
| `icon-maskable-512x512.png` | `512x512` | `maskable` | Android adaptive icon with 15% safe-zone margin |
| `apple-touch-icon.png` | `180x180` | iOS Safari | PNG required because iOS does not support SVG touch icons |

## Design Guidelines

- Background color: `#050B16` (Deep Midnight Navy)
- Accent mark: `#22D3EE` (Electric Cyan)
- Safe zone for maskable icons: Keep all primary visual geometry inside the central 80% circle so Android circular/squircle masks do not clip edges.
