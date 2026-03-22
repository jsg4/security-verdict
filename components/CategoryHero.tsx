import Image from "next/image";
import { CategoryConfig } from "@/data/types";

export default function CategoryHero({ config }: { config: CategoryConfig }) {
  return (
    <section className="bg-gradient-to-b from-[var(--primary-light)] to-white pt-8 pb-6 md:pt-12 md:pb-8">
      <div className="max-w-[var(--content-width)] mx-auto px-5">
        {/* Independently Reviewed badge + aggregate rating */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-[var(--primary)] text-white text-[12px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-[var(--radius-full)]">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            {config.heroLabel}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} viewBox="0 0 24 24" className={`w-4 h-4 ${star <= 4 ? "text-[var(--gold)]" : "text-[var(--gold)]"}`} fill="currentColor">
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-[var(--foreground)]">4.8</span>
            <span className="text-[12px] text-[var(--gray-500)]">avg. rating across top picks</span>
          </div>
        </div>

        <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-[var(--foreground)] leading-[1.1] tracking-tight mb-5">
          {config.heroTitle}{" "}
          <span className="text-[var(--cta)]">{config.heroTitleAccent}</span>
        </h1>
        <p className="text-[1.125rem] md:text-[1.25rem] text-[var(--gray-600)] leading-relaxed mb-7 max-w-2xl">
          {config.heroSubtitle}
        </p>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={config.author.photo}
            alt={config.author.name}
            width={44}
            height={44}
            className="rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow-sm"
            style={{ width: 44, height: 44 }}
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[14px] text-[var(--foreground)]">
                {config.author.name}
              </span>
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] text-[var(--primary)]" fill="currentColor">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-[12px] text-[var(--gray-500)]">{config.author.title}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
          {config.heroBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--gray-200)] rounded-[var(--radius-full)] text-[12px] font-medium text-[var(--gray-700)] shadow-sm whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)] flex-shrink-0" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
