import Link from "next/link";
import { ArrowRight, KeyRound, Lock, PhoneOff, ShieldCheck } from "lucide-react";
import { MotionFadeIn } from "@/components/ui/MotionPrimitives";
import { SITE_CONFIG } from "@/lib/config/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <MotionFadeIn>
          <div className="grid items-stretch gap-12 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
                {SITE_CONFIG.currentMilestone} · {SITE_CONFIG.licenseName}
              </p>

              <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-[#F1F5F9]">
                {SITE_CONFIG.slogan}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-[#A8B6C8]">
                NEXORA is an open-source, privacy-first global messaging
                platform designed around username identity—free forever, with
                zero advertisements and zero data brokerage.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#roadmap"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-cyan-400 dark:text-[#050B16] dark:hover:bg-cyan-300 whitespace-nowrap"
                >
                  <span>Explore Roadmap</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700 dark:bg-[#091426] dark:text-[#F1F5F9] dark:hover:border-cyan-400 dark:hover:text-cyan-300 whitespace-nowrap"
                >
                  About NEXORA
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-5 dark:border-slate-800 dark:bg-[#091426]">
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
                  <span className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    Architectural Baseline
                  </span>
                  <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
                    Milestone 1
                  </span>
                </div>

                <dl className="mt-6 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <PhoneOff
                      className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-400"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-slate-900 dark:text-[#F1F5F9]">
                        Username-First Identity
                      </dt>
                      <dd className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                        Designed to decouple communication from SIM cards and
                        phone numbers.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-[#34D399]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-slate-900 dark:text-[#F1F5F9]">
                        Hardened Web Foundation
                      </dt>
                      <dd className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                        Strict TypeScript, Zod boundary validation, security
                        headers, and zero client-side secrets.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <KeyRound
                      className="mt-0.5 h-5 w-5 shrink-0 text-teal-700 dark:text-[#2DD4BF]"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm font-medium text-slate-900 dark:text-[#F1F5F9]">
                        Transparent Cryptography Policy
                      </dt>
                      <dd className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                        End-to-end encryption is planned for Milestone 4 and is
                        not active yet in Milestone 1.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-[#718096]">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Zero ads · Zero data sales</span>
                </span>
                <span>{SITE_CONFIG.licenseName}</span>
              </div>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
