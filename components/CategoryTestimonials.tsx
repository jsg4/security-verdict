"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CategoryConfig } from "@/data/types";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4" fill={i < count ? "#F59E0B" : "#E5E7EB"}>
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
        </svg>
      ))}
    </div>
  );
}

export default function CategoryTestimonials({ config }: { config: CategoryConfig }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { testimonials } = config;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="bg-[var(--gray-50)] py-10 sm:py-12">
      <div className="max-w-[var(--content-width)] mx-auto px-4 sm:px-5">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-2">Real User Experiences</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-3">What People Are Saying</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars count={5} />
            <span className="text-sm font-semibold text-[var(--foreground)]">4.7 out of 5</span>
          </div>
          <p className="text-sm text-gray-500">Based on verified user reviews across all services</p>
        </div>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {getVisible().map((t, i) => (
            <div key={`${t.name}-${i}`} className="bg-white rounded-lg sm:rounded-[var(--radius-lg)] border border-gray-200 p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <Image src={t.photo} alt={t.name} width={44} height={44} className="rounded-full object-cover flex-shrink-0" style={{ width: 44, height: 44 }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-[var(--foreground)]">{t.name}</span>
                    {t.verified && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)] flex-shrink-0" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400">{t.location}</p>
                </div>
                <span className="text-[10px] text-gray-400 whitespace-nowrap">{t.timeAgo}</span>
              </div>
              <Stars count={t.rating} />
              <h4 className="font-bold text-sm text-[var(--foreground)] mb-2 mt-2">&ldquo;{t.title}&rdquo;</h4>
              <p className="text-xs text-gray-600 leading-relaxed flex-1 mb-3">{t.text}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-1 rounded-full">{t.product} user</span>
                {t.verified && <span className="text-[10px] text-gray-400">Verified purchase</span>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-[var(--primary)] w-6" : "bg-gray-300 hover:bg-gray-400"}`} onClick={() => { setActiveIndex(i); setIsAutoPlaying(false); }} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
