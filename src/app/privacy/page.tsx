import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NEXORA Privacy Policy: zero advertising, zero data sales, and strict data minimization.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
        Governance · Privacy
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500 dark:text-[#718096]">
        Applies to {SITE_CONFIG.currentMilestone}
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            1. Core business model commitment
          </h2>
          <p>
            NEXORA is free to use, contains no advertisements, and never sells,
            rents, or brokers user data. Privacy protections are architectural
            constraints rather than optional paid tiers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            2. Current Milestone 1 data posture
          </h2>
          <p>
            In Milestone 1, NEXORA operates strictly as a public application
            foundation. No user accounts, authentication tokens, phone numbers,
            messages, or tracking cookies are collected or stored.
          </p>
          <p>
            If you change the interface theme (Light or Dark) in Settings or the
            footer, only your visual theme preference string is saved locally in
            your browser. No credentials, tokens, or personal identifiers are
            stored in localStorage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            3. Future milestones and encryption honesty
          </h2>
          <p>
            Phone numbers will never be required to create a NEXORA account.
            Authentication and persistence (Milestone 2), messaging (Milestone
            3), and client-side end-to-end encryption (Milestone 4) will each
            ship with updated privacy disclosures reflecting only verified
            capabilities.
          </p>
        </section>
      </div>
    </article>
  );
}
