import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config/site";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800/80 dark:bg-[#050B16]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900 dark:text-[#F1F5F9]"
            >
              <ShieldCheck
                className="h-5 w-5 text-cyan-600 dark:text-cyan-400"
                aria-hidden="true"
              />
              <span>{SITE_CONFIG.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
              {SITE_CONFIG.slogan} Free, open-source under GNU AGPL-3.0, built
              without advertisements or data brokerage.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-800 dark:text-[#F1F5F9]">
              {SITE_CONFIG.founderCredit}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
              Platform
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Chat Preview
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-[#F1F5F9]">
              Governance & Source
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  Appearance & Settings
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-600 transition-colors hover:text-cyan-700 dark:text-[#A8B6C8] dark:hover:text-cyan-300"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center dark:border-slate-800/80">
          <p className="text-xs text-slate-500 dark:text-[#718096]">
            {SITE_CONFIG.founderCredit} · Licensed under {SITE_CONFIG.licenseName}
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
