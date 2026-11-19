"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Lock,
  Server,
  Smartphone,
} from "lucide-react";
import { E2EE_EDUCATIONAL_STEPS } from "@/lib/config/site";

export function SecurityPhilosophySection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedStage =
    E2EE_EDUCATIONAL_STEPS.find((item) => item.step === activeStep) ??
    E2EE_EDUCATIONAL_STEPS[0];

  return (
    <section
      id="security"
      className="border-b border-slate-200 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
            Security philosophy
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
            How end-to-end encryption works in principle
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
            When Milestone 4 introduces audited client-side cryptography, only
            participating devices will hold message decryption keys. Servers
            will route opaque ciphertext without plaintext access.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-amber-300/80 bg-amber-50/70 p-4 text-sm text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/20 dark:text-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className="leading-relaxed">
              <strong className="font-semibold">
                Educational Architecture Diagram Only:
              </strong>{" "}
              NEXORA is currently in Milestone 1 (Application Foundation).
              End-to-end encryption, device key exchange, and message transport
              are not implemented yet and will only be marked active after full
              implementation and cryptographic verification in Milestone 4.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-[#091426]">
          <div className="grid items-center gap-4 md:grid-cols-5">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-800 dark:bg-[#101D30]">
              <Smartphone
                className="mx-auto h-6 w-6 text-cyan-700 dark:text-cyan-400"
                aria-hidden="true"
              />
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                Alice&apos;s Device
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-[#A8B6C8]">
                Local encryption
              </p>
            </div>

            <div className="flex items-center justify-center text-slate-400 dark:text-slate-600">
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" aria-hidden="true" />
            </div>

            <div className="rounded-lg border border-cyan-600/30 bg-cyan-50/50 p-4 text-center dark:border-cyan-400/30 dark:bg-[#101D30]">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-cyan-600/30 bg-white dark:border-cyan-400/40 dark:bg-[#050B16]">
                <Lock
                  className="h-4 w-4 text-cyan-700 dark:text-cyan-400"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                <Server className="h-4 w-4 text-teal-700 dark:text-[#2DD4BF]" aria-hidden="true" />
                <span>Relay Server</span>
              </div>
              <p className="mt-1 text-xs text-slate-600 dark:text-[#A8B6C8]">
                Routes ciphertext only
              </p>
            </div>

            <div className="flex items-center justify-center text-slate-400 dark:text-slate-600">
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" aria-hidden="true" />
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center dark:border-slate-800 dark:bg-[#101D30]">
              <Smartphone
                className="mx-auto h-6 w-6 text-teal-700 dark:text-[#2DD4BF]"
                aria-hidden="true"
              />
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                Bob&apos;s Device
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-[#A8B6C8]">
                Local decryption
              </p>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="End-to-end encryption conceptual steps"
            className="mt-8 grid gap-2 sm:grid-cols-5"
          >
            {E2EE_EDUCATIONAL_STEPS.map((item) => {
              const isSelected = activeStep === item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveStep(item.step)}
                  className={`flex min-h-[44px] flex-col items-start rounded-lg border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isSelected
                      ? "border-cyan-600 bg-cyan-50/70 text-slate-900 dark:border-cyan-400 dark:bg-[#101D30] dark:text-[#F1F5F9]"
                      : "border-slate-200 bg-transparent text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:text-[#A8B6C8] dark:hover:border-slate-700"
                  }`}
                >
                  <span className="font-mono text-xs font-semibold tabular-nums text-cyan-700 dark:text-cyan-400">
                    Step 0{item.step}
                  </span>
                  <span className="mt-1 text-xs font-medium leading-snug">
                    {item.actor}
                  </span>
                </button>
              );
            })}
          </div>

          {selectedStage && (
            <div
              role="tabpanel"
              className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-[#101D30]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {selectedStage.step}. {selectedStage.title}
                </h3>
                <span className="font-mono text-xs text-cyan-700 dark:text-cyan-400">
                  {selectedStage.payloadState}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
                {selectedStage.detail}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
