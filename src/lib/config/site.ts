import type {
  EncryptionStage,
  ProductPrinciple,
  RoadmapMilestone,
  RouteStatusInfo,
} from "@/types/nexora";

export const SITE_CONFIG = {
  name: "NEXORA",
  shortName: "NEXORA",
  slogan: "Private conversations. No phone number required.",
  description:
    "NEXORA is a privacy-first global messaging platform built around username identity, zero advertising, and transparent open-source architecture.",
  founderName: "Saurabh Kumar",
  founderCredit: "NEXORA — Founded by Saurabh Kumar",
  repositoryUrl: "https://github.com/Saurabh-Ku-mar/nexora",
  licenseName: "GNU AGPL-3.0",
  currentMilestone: "Milestone 1 — Application Foundation",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/chat", label: "Chat" },
  { href: "/settings", label: "Settings" },
] as const;

export const PRODUCT_PRINCIPLES: readonly ProductPrinciple[] = [
  {
    id: "no-phone",
    index: "01",
    title: "No phone number required",
    description:
      "Your personal telephone number is linked to banking, identity documents, and carrier records. NEXORA is designed around username identity instead of SIM-based identifiers.",
  },
  {
    id: "zero-ads",
    index: "02",
    title: "Free with zero advertisements",
    description:
      "NEXORA does not run ad networks, behavioral tracking pixels, or sponsored message feeds. Privacy cannot coexist with surveillance advertising.",
  },
  {
    id: "no-data-sales",
    index: "03",
    title: "Never sold or brokered",
    description:
      "User profiles, contact graphs, and metadata are never packaged, licensed, or sold to third-party data brokers or analytics aggregators.",
  },
  {
    id: "honest-security",
    index: "04",
    title: "Honest engineering milestones",
    description:
      "Security claims are stated strictly for features that are implemented and audited. Unfinished cryptographic capabilities are never misrepresented as active.",
  },
  {
    id: "open-license",
    index: "05",
    title: "AGPL-3.0 open transparency",
    description:
      "Released under the GNU Affero General Public License v3.0 so anyone can inspect the codebase, audit privacy guarantees, and verify client behavior.",
  },
] as const;

export const ROADMAP_MILESTONES: readonly RoadmapMilestone[] = [
  {
    id: "milestone-1",
    phase: "Milestone 1",
    title: "Application Foundation & Architecture",
    stage: "current",
    summary:
      "Production-grade Next.js App Router foundation, strict TypeScript configuration, security headers, boundary validation schemas, PWA manifest preparation, and dual-theme UI.",
    deliverables: [
      "App Router architecture with Server Components",
      "Strict TypeScript, ESLint, and automated boundary tests",
      "Dual-theme Light and Dark Navy design system",
      "PWA manifest metadata and icon specification",
    ],
  },
  {
    id: "milestone-2",
    phase: "Milestone 2",
    title: "Username Identity & Supabase Auth",
    stage: "planned",
    summary:
      "Account creation and sign-in without requiring a phone number, backed by dedicated database persistence and server-verified sessions.",
    deliverables: [
      "Username-first registration without mandatory phone numbers",
      "Server-verified session management via Supabase",
      "Strict Zod boundary validation on auth routes",
      "Account recovery and session revocation controls",
    ],
  },
  {
    id: "milestone-3",
    phase: "Milestone 3",
    title: "Private Messaging Core",
    stage: "planned",
    summary:
      "Direct conversation workflows, real-time message delivery, contact requests, and responsive desktop and mobile messaging layouts.",
    deliverables: [
      "Real-time direct conversation threads",
      "Contact discovery by explicit username handle",
      "Accessible desktop split-pane and mobile conversation views",
      "Message delivery state synchronization",
    ],
  },
  {
    id: "milestone-4",
    phase: "Milestone 4",
    title: "End-to-End Encryption & Device Keys",
    stage: "planned",
    summary:
      "Audited client-side cryptographic key exchange and message encryption using vetted cryptographic standards—never homemade algorithms.",
    deliverables: [
      "Per-device identity and pre-key generation",
      "Client-side message encryption before network transit",
      "Key safety number verification between participants",
      "Independent cryptographic review before public claims",
    ],
  },
] as const;

export const E2EE_EDUCATIONAL_STEPS: readonly EncryptionStage[] = [
  {
    step: 1,
    actor: "Alice",
    title: "Alice writes a plaintext message",
    payloadState: "Plaintext on Alice's device",
    detail:
      "Alice composes her message locally in the client interface before any network transmission begins.",
  },
  {
    step: 2,
    actor: "Alice",
    title: "Alice's device encrypts the message",
    payloadState: "Ciphertext generated locally",
    detail:
      "Using Bob's verified public key material, Alice's device transforms the message into authenticated ciphertext.",
  },
  {
    step: 3,
    actor: "Network",
    title: "Ciphertext travels through the server",
    payloadState: "Opaque encrypted payload in transit",
    detail:
      "Relay servers route the ciphertext to Bob without possessing the decryption keys needed to read its contents.",
  },
  {
    step: 4,
    actor: "Bob",
    title: "Bob's device decrypts the payload",
    payloadState: "Local key verification & decryption",
    detail:
      "Bob's device receives the ciphertext and applies his local private key material to verify authenticity and decrypt.",
  },
  {
    step: 5,
    actor: "Bob",
    title: "Bob reads the original message",
    payloadState: "Plaintext restored for Bob",
    detail:
      "The original message appears on Bob's screen while remaining unreadable to intermediaries along the path.",
  },
] as const;

export const ROUTE_STATUS_CATALOG: readonly RouteStatusInfo[] = [
  {
    path: "/",
    title: "Home",
    milestone: "Milestone 1",
    implemented: true,
    description: "Public landing page introducing NEXORA's principles, roadmap, and security philosophy.",
  },
  {
    path: "/about",
    title: "About",
    milestone: "Milestone 1",
    implemented: true,
    description: "Project mission, AGPL-3.0 open-source commitment, and founder introduction.",
  },
  {
    path: "/privacy",
    title: "Privacy",
    milestone: "Milestone 1",
    implemented: true,
    description: "Zero-ad, zero-data-sale privacy architecture and data minimization stance.",
  },
  {
    path: "/terms",
    title: "Terms",
    milestone: "Milestone 1",
    implemented: true,
    description: "Platform terms foundation and GNU AGPL-3.0 software licensing details.",
  },
  {
    path: "/login",
    title: "Login",
    milestone: "Milestone 2",
    implemented: false,
    description: "Authentication is scheduled for Milestone 2 and intentionally inactive in Milestone 1.",
  },
  {
    path: "/register",
    title: "Register",
    milestone: "Milestone 2",
    implemented: false,
    description: "Username account registration is scheduled for Milestone 2.",
  },
  {
    path: "/chat",
    title: "Chat",
    milestone: "Milestone 3",
    implemented: false,
    description: "Private messaging and encrypted channels are planned for Milestones 3 and 4.",
  },
  {
    path: "/settings",
    title: "Settings",
    milestone: "Milestone 1 (Appearance)",
    implemented: true,
    description: "Theme preferences are active now; account and device key controls arrive in later milestones.",
  },
] as const;
