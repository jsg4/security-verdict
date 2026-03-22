import { CategoryConfig } from "@/data/types";
import React from "react";

const STAT_ICONS: Record<string, React.ReactNode> = {
  services: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  readers: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  updated: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
};

export default function CategorySocialProof({ config }: { config: CategoryConfig }) {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-5 py-4">
      <div className="bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[var(--radius-lg)] p-4 md:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {config.stats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center flex-shrink-0">
                {STAT_ICONS[s.icon] || STAT_ICONS.services}
              </div>
              <div>
                <p className="text-[1.25rem] md:text-[1.5rem] font-extrabold text-[var(--foreground)] leading-none tracking-tight">{s.stat}</p>
                <p className="text-[11px] md:text-[12px] text-[var(--gray-500)] font-medium mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {config.referencedBy.length > 0 && (
        <div className="mt-4 flex flex-col items-center">
          <p className="text-[10px] font-semibold text-[var(--gray-400)] uppercase tracking-widest mb-2">
            Methodology Referenced By
          </p>
          <div className="flex items-center gap-5 md:gap-8">
            {config.referencedBy.map((name) => (
              <span key={name} className="text-[12px] md:text-[13px] font-bold tracking-wide text-[var(--gray-400)]">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
