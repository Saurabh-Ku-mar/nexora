import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "NEXORA Terms of Service and GNU AGPL-3.0 open-source licensing notice.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
        Governance · Terms
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-slate-500 dark:text-[#718096]">
        {SITE_CONFIG.founderCredit} · {SITE_CONFIG.licenseName}
      </p>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            1. Open-source license
          </h2>
          <p>
            The NEXORA codebase is distributed under the GNU Affero General
            Public License v3.0 (AGPL-3.0). Anyone inspecting, modifying, or
            operating a modified network service based on NEXORA must comply
            with the source-disclosure obligations set forth in the repository{" "}
            <span className="font-mono text-sm">LICENSE</span> file.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            2. Milestone 1 foundation scope
          </h2>
          <p>
            This release provides the public architecture and web foundation of
            NEXORA. User registration, accounts, messaging transport, and
            end-to-end encryption are not active yet and carry no service-level
            or cryptographic guarantees during Milestone 1.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
            3. Acceptable use direction
          </h2>
          <p>
            When messaging features launch in future milestones, NEXORA is
            intended for lawful, private human communication free of spam,
            automated abuse, or malicious exploitation of service endpoints.
          </p>
        </section>
      </div>
    </article>
  );
}
