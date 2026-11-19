import { EyeOff, Globe, Shield } from "lucide-react";

export function PrivacyIntroSection() {
  return (
    <section
      id="introduction"
      className="border-b border-slate-200 bg-white dark:border-slate-800/80 dark:bg-[#091426]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
              Privacy-first introduction
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
              Communication without surrendering your phone number
            </h2>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
              Most mainstream messaging platforms bind your account to a
              personal telephone number. Across much of the world, a mobile
              number is tied directly to government identification, banking
              verification, and carrier location logs.
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
              NEXORA is engineered from the ground up so individuals can
              communicate globally without handing over a SIM-linked identifier,
              enduring behavioral ad targeting, or exposing their social graph
              to third-party monetization.
            </p>

            <div className="grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-3 dark:border-slate-800">
              <div>
                <EyeOff
                  className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  Zero Ad Trackers
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                  No advertising SDKs, fingerprinting scripts, or commercial
                  profiling.
                </p>
              </div>
              <div>
                <Shield
                  className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  Data Minimization
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                  Collect only what is strictly required for explicit user
                  functionality.
                </p>
              </div>
              <div>
                <Globe
                  className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  Global Access
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                  Free to use globally and licensed openly under GNU AGPL-3.0.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
