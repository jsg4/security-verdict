import Image from "next/image";
import { CategoryConfig } from "@/data/types";

export default function CategoryHero({ config }: { config: CategoryConfig }) {
  return (
    <section className="bg-gradient-to-b from-[var(--primary-light)] to-white pt-10 pb-8 md:pt-14 md:pb-10">
      <div className="max-w-[var(--content-width)] mx-auto px-5">
        <p className="text-[13px] font-semibold text-[var(--primary)] uppercase tracking-widest mb-4">
          {config.heroLabel}
        </p>
        <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-extrabold text-[var(--foreground)] leading-[1.1] tracking-tight mb-5">
          {config.heroTitle}{" "}
          <span className="text-[var(--cta)]">{config.heroTitleAccent}</span>
        </h1>
        <p className="text-[1.125rem] md:text-[1.25rem] text-[var(--gray-600)] leading-relaxed mb-7 max-w-2xl">
          {config.heroSubtitle}
        </p>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-7">
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
        <div className="flex flex-wrap gap-2.5">
          {config.heroBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[var(--gray-200)] rounded-[var(--radius-full)] text-[12px] font-medium text-[var(--gray-700)] shadow-sm">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)]" fill="currentColor">
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
