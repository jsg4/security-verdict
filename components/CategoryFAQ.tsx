"use client";

import { useState } from "react";
import { CategoryConfig } from "@/data/types";

export default function CategoryFAQ({ config }: { config: CategoryConfig }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-2">Frequently Asked Questions</h2>
      <p className="text-gray-500 text-base mb-6">Common questions about {config.title.toLowerCase()} services.</p>
      <div className="space-y-2">
        {config.faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[var(--gray-50)] transition-colors" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span className="font-semibold text-base text-[var(--foreground)] pr-4">{faq.q}</span>
              <svg viewBox="0 0 24 24" className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 pt-0">
                <p className="text-base text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
