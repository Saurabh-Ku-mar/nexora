import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { SettingsAppearanceCard } from "@/components/ui/SettingsAppearanceCard";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Manage NEXORA appearance preferences and inspect upcoming Milestone 2–4 controls.",
};

const upcomingSettings = [
  {
    title: "Account & Username Identity",
    milestone: "Milestone 2",
    description:
      "Username management, session revocation, and passphrase rotation.",
  },
  {
    title: "Privacy & Contact Controls",
    milestone: "Milestone 3",
    description:
      "Message request filtering and contact discovery visibility.",
  },
  {
    title: "Device Keys & Verification",
    milestone: "Milestone 4",
    description:
      "Linked device fingerprints and cryptographic key verification.",
  },
] as const;

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
        Preferences
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
        Settings
      </h1>
      <p className="mt-3 text-base text-slate-600 dark:text-[#A8B6C8]">
        Configure your interface appearance now. Account, privacy, and device
        key controls will be enabled in future milestones.
      </p>

      <div className="mt-10 space-y-8">
        <SettingsAppearanceCard />

        <section
          aria-labelledby="upcoming-settings-heading"
          className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-[#091426]"
        >
          <h2
            id="upcoming-settings-heading"
            className="text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]"
          >
            Upcoming preference modules
          </h2>
          <div className="mt-5 divide-y divide-slate-200 dark:divide-slate-800">
            {upcomingSettings.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-[#A8B6C8]">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-[#718096] whitespace-nowrap shrink-0">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{item.milestone} · Not yet available</span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
