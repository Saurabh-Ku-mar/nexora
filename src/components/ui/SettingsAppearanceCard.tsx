"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

export function SettingsAppearanceCard() {
  const { theme, setTheme } = useTheme();

  return (
    <section
      aria-labelledby="appearance-heading"
      className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-[#091426]"
    >
      <h2
        id="appearance-heading"
        className="text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]"
      >
        Appearance
      </h2>
      <p className="mt-1.5 text-sm text-slate-600 dark:text-[#A8B6C8]">
        Choose between NEXORA&apos;s Dark Navy interface and the high-contrast
        Light theme. Only your visual theme preference is saved locally.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setTheme("dark")}
          aria-pressed={theme === "dark"}
          className={`flex min-h-[56px] items-center justify-between rounded-lg border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
            theme === "dark"
              ? "border-cyan-600 bg-cyan-50/70 dark:border-cyan-400 dark:bg-[#101D30]"
              : "border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <Moon
              className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                Dark Navy
              </p>
              <p className="text-xs text-slate-500 dark:text-[#A8B6C8]">
                Default low-glare interface
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
            {theme === "dark" ? "Active" : "Select"}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          aria-pressed={theme === "light"}
          className={`flex min-h-[56px] items-center justify-between rounded-lg border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
            theme === "light"
              ? "border-cyan-600 bg-cyan-50/70 dark:border-cyan-400 dark:bg-[#101D30]"
              : "border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          }`}
        >
          <div className="flex items-center gap-3">
            <Sun
              className="h-5 w-5 text-cyan-700 dark:text-cyan-400"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
                Light
              </p>
              <p className="text-xs text-slate-500 dark:text-[#A8B6C8]">
                Soft off-white daylight surface
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-cyan-700 dark:text-cyan-400">
            {theme === "light" ? "Active" : "Select"}
          </span>
        </button>
      </div>
    </section>
  );
}
