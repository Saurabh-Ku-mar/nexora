"use client";

import { useState } from "react";
import { CheckCircle2, Clock } from "lucide-react";
import { ROADMAP_MILESTONES } from "@/lib/config/site";

type RoadmapFilter = "all" | "current" | "planned";

export function RoadmapSection() {
  const [filter, setFilter] = useState<RoadmapFilter>("all");

  const visibleMilestones = ROADMAP_MILESTONES.filter((item) => {
    if (filter === "all") return true;
    return item.stage === filter;
  });

  return (
    <section
      id="roadmap"
      className="border-b border-slate-200 bg-white dark:border-slate-800/80 dark:bg-[#091426]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
              Feature roadmap
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
              Incremental, auditable milestones
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
              NEXORA is built in reviewed stages. Only Milestone 1 is active
              today; authentication, realtime messaging, and end-to-end
              encryption follow in dedicated milestones.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter roadmap milestones"
            className="inline-flex items-center gap-1 self-start rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-[#050B16]"
          >
            {(
              [
                { id: "all", label: "All" },
                { id: "current", label: "Active (M1)" },
                { id: "planned", label: "Planned (M2–M4)" },
              ] as const
            ).map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  aria-pressed={active}
                  className={`min-h-[36px] rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    active
                      ? "bg-white text-slate-900 shadow-xs dark:bg-[#101D30] dark:text-[#F1F5F9]"
                      : "text-slate-600 hover:text-slate-900 dark:text-[#A8B6C8] dark:hover:text-[#F1F5F9]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visibleMilestones.map((milestone) => {
            const isCurrent = milestone.stage === "current";
            return (
              <article
                key={milestone.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7 dark:border-slate-800 dark:bg-[#101D30]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-wide text-slate-500 dark:text-[#A8B6C8]">
                      {milestone.phase}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                        isCurrent
                          ? "text-emerald-700 dark:text-[#34D399]"
                          : "text-cyan-700 dark:text-cyan-400"
                      }`}
                    >
                      {isCurrent ? (
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      ) : (
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      )}
                      <span>{isCurrent ? "Active Foundation" : "Planned"}</span>
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {milestone.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
                    {milestone.summary}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-700 dark:border-slate-800 dark:text-[#A8B6C8]">
                  {milestone.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
