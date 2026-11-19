import Link from "next/link";
import { ArrowLeft, Clock, ShieldAlert } from "lucide-react";

interface MilestoneNoticeProps {
  routeLabel: string;
  milestone: string;
  title: string;
  description: string;
  plannedCapabilities: readonly string[];
}

export function MilestoneNotice({
  routeLabel,
  milestone,
  title,
  description,
  plannedCapabilities,
}: MilestoneNoticeProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10 dark:border-slate-800 dark:bg-[#091426]">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-cyan-700 dark:text-cyan-400">
          <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{milestone}</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-500 dark:text-[#A8B6C8]">{routeLabel}</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-[#F1F5F9] sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
          {description}
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-[#101D30]">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-400"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                Not yet implemented in Milestone 1
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
                NEXORA intentionally avoids simulated authentication, placeholder
                conversations, or unverified cryptography. Planned capabilities
                for this surface:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-[#A8B6C8]">
                {plannedCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-cyan-400 dark:text-[#050B16] dark:hover:bg-cyan-300 whitespace-nowrap"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:text-[#F1F5F9] dark:hover:border-cyan-400 dark:hover:text-cyan-300 whitespace-nowrap"
          >
            Read Project Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}
