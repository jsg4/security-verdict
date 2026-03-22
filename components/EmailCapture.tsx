"use client";

import { useState } from "react";
import { CategoryConfig } from "@/data/types";

export default function EmailCapture({ config }: { config: CategoryConfig }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to email provider (ConvertKit, Mailchimp, etc.)
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-[var(--success-light)] border border-green-200 rounded-2xl p-6 text-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-[var(--success)] mx-auto mb-3" fill="currentColor">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
          <p className="text-lg font-extrabold text-[var(--success)]">You&apos;re in!</p>
          <p className="text-sm text-gray-600 mt-1">Check your inbox for exclusive {config.title.toLowerCase()} deals and updates.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-[var(--primary)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1 text-white">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-1">Free Weekly Updates</p>
          <h3 className="text-xl md:text-2xl font-extrabold mb-1">
            Get Exclusive {config.title} Deals
          </h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Join 12,000+ readers. We send the best deals, new product alerts, and expert tips every week. Unsubscribe anytime.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:w-auto w-full flex-shrink-0">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg text-sm text-[var(--foreground)] bg-white border-0 outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-64"
          />
          <button type="submit" className="btn-cta px-6 py-3 text-sm rounded-lg font-bold flex-shrink-0">
            Get Free Updates
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
