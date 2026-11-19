import { PRODUCT_PRINCIPLES } from "@/lib/config/site";

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="border-b border-slate-200 dark:border-slate-800/80"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">
            Product principles
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-[#F1F5F9]">
            Built around clear engineering commitments
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#A8B6C8]">
            Every architectural decision in NEXORA prioritizes verifiability,
            minimal metadata exposure, and long-term user trust.
          </p>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {PRODUCT_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="grid gap-4 py-7 sm:grid-cols-12 sm:items-baseline"
            >
              <div className="sm:col-span-1">
                <span className="font-mono text-sm font-medium tabular-nums text-cyan-700 dark:text-cyan-400">
                  {principle.index}
                </span>
              </div>
              <div className="sm:col-span-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-[#F1F5F9]">
                  {principle.title}
                </h3>
              </div>
              <div className="sm:col-span-7">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-[#A8B6C8]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
