# NEXORA Security Architecture & Honest Disclosures

## Current Security Status (Milestone 1)

NEXORA is currently at **Milestone 1 (Application Foundation)**.

- **End-to-End Encryption (E2EE)**: **Not implemented yet.** Do not treat Milestone 1 as providing encrypted messaging. E2EE and per-device cryptographic keys are scheduled for Milestone 4 using audited, standard cryptographic libraries—never homemade cryptography.
- **Authentication & Database**: **Not implemented yet.** No accounts, sessions, or user messages are stored. Supabase persistence and server-verified auth are planned for Milestone 2.

## Security Controls Implemented in Milestone 1

1. **Zero Client-Side Secrets**:
   - No secret keys or tokens are embedded in client bundles or `NEXT_PUBLIC_*` environment variables.
   - `.gitignore` excludes `.env` and `.env*.local` while preserving `.env.example` with placeholders only.
2. **Safe Browser Storage Policy**:
   - Passwords, session tokens, and cryptographic keys are never stored in `localStorage`.
   - Only the non-sensitive UI theme choice (`"dark" | "light"`) is saved in `localStorage`.
3. **Boundary Input Validation**:
   - `src/lib/validation/auth.ts` defines strict Zod schemas (`usernameSchema`, `passwordSchema`, `loginInputSchema`, `registerInputSchema`) ready for Milestone 2 server boundaries.
   - `src/lib/security/sanitize.ts` validates external URLs (`https:`/`http:` without embedded credentials), blocks protocol-relative open redirects (`//`), and strips control characters from plain text.
4. **HTTP Security Headers (`next.config.ts`)**:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`
   - `X-DNS-Prefetch-Control: off`
   - `poweredByHeader: false`
5. **No Unsafe HTML Rendering**:
   - Zero use of `dangerouslySetInnerHTML`, `eval`, or unescaped HTML injection.
6. **PWA Cache Safety**:
   - Web App Manifest (`src/app/manifest.ts`) and icons prepare installability without registering an unsafe service worker that could cache authenticated payloads.
