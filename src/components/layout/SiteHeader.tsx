"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/config/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#F8FAFC]/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#050B16]/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md dark:text-[#F1F5F9] dark:hover:text-cyan-300 whitespace-nowrap shrink-0"
        >
          <ShieldCheck
            className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
            aria-hidden="true"
          />
          <span>{SITE_CONFIG.name}</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm py-1 ${
                  active
                    ? "text-cyan-700 underline decoration-cyan-600 underline-offset-8 dark:text-cyan-400 dark:decoration-cyan-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-[#A8B6C8] dark:hover:text-[#F1F5F9]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/login"
            className="hidden md:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-cyan-400 dark:text-[#050B16] dark:hover:bg-cyan-300 whitespace-nowrap shrink-0"
          >
            Sign In
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-800 transition-colors hover:border-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 md:hidden dark:border-slate-700 dark:bg-[#091426] dark:text-[#F1F5F9]"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-slate-200 bg-white px-6 py-5 md:hidden dark:border-slate-800 dark:bg-[#091426]"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-cyan-50 text-cyan-800 dark:bg-[#101D30] dark:text-cyan-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-[#A8B6C8] dark:hover:bg-[#101D30] dark:hover:text-[#F1F5F9]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700 dark:bg-cyan-400 dark:text-[#050B16]"
              >
                Sign In
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
