import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ShieldCheck, UserCheck } from "lucide-react";
import { ROUTE_STATUS_CATALOG, SITE_CONFIG } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NEXORA, its privacy-first architecture, GNU AGPL-3.0 open-source license, and founder Saurabh Kumar.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
        About {SITE_CONFIG.name}
      </p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
        Privacy-first messaging engineered in public milestones
      </h1>
      <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-[#A8B6C8]">
        {SITE_CONFIG.slogan} NEXORA is being developed as a free, open-source
        messaging platform without advertisements, behavioral profiling, or
        phone-number registration mandates.
      </p>

      <section
        aria-labelledby="founder-heading"
        className="mt-12 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-[#091426]"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-600/30 bg-cyan-50 dark:border-cyan-400/30 dark:bg-[#101D30]">
            <UserCheck
              className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
              Founder
            </p>
            <h2
              id="founder-heading"
              className="mt-1 text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]"
            >
              {SITE_CONFIG.founderCredit}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-[#A8B6C8]">
              NEXORA was founded by {SITE_CONFIG.founderName} to build an
              accessible global messaging platform where private communication
              does not require surrendering a personal telephone number or
              accepting surveillance advertising.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="license-heading" className="mt-12 space-y-4">
        <h2
          id="license-heading"
          className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]"
        >
          Open-source governance
        </h2>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-[#A8B6C8]">
          NEXORA is licensed under the {SITE_CONFIG.licenseName}. All source
          code changes are developed openly so security researchers,
          contributors, and users can inspect every milestone directly.
        </p>
        <div className="pt-2">
          <a
            href={SITE_CONFIG.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-[#091426] dark:text-[#F1F5F9] dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-700 dark:text-cyan-400" aria-hidden="true" />
            <span>Inspect Source on GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section aria-labelledby="routes-heading" className="mt-14">
        <h2
          id="routes-heading"
          className="text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]"
        >
          Milestone 1 route status
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-[#A8B6C8]">
          Transparent overview of routes active today versus routes reserved for
          subsequent milestones.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#091426]">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs font-medium text-slate-500 dark:border-slate-800 dark:text-[#A8B6C8]">
              <tr>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Target</th>
                <th className="px-4 py-3">State</th>
                <th className="px-4 py-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {ROUTE_STATUS_CATALOG.map((route) => (
                <tr key={route.path}>
                  <td className="px-4 py-3 font-mono text-xs">
                    <Link
                      href={route.path}
                      className="text-cyan-700 hover:underline dark:text-cyan-400"
                    >
                      {route.path}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-[#A8B6C8] whitespace-nowrap">
                    {route.milestone}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={
                        route.implemented
                          ? "font-medium text-emerald-700 dark:text-[#34D399]"
                          : "font-medium text-slate-500 dark:text-[#718096]"
                      }
                    >
                      {route.implemented ? "Active" : "Not yet available"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-[#A8B6C8]">
                    {route.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
