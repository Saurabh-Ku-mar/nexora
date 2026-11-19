"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/layout/ThemeProvider";

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 transition-colors hover:border-cyan-600 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:border-slate-700/80 dark:bg-[#101D30] dark:text-[#F1F5F9] dark:hover:border-cyan-400/70 dark:hover:text-cyan-300 whitespace-nowrap shrink-0"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-cyan-400" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 text-cyan-700" aria-hidden="true" />
      )}
      {!compact && <span>{isDark ? "Light theme" : "Dark theme"}</span>}
    </button>
  );
}
