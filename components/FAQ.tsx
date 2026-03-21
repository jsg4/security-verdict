"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I really need identity theft protection?",
    a: "If you have a credit history, file taxes, or have been notified of a data breach, identity theft protection provides meaningful value. These services monitor your SSN, credit files, and personal data 24/7 — something you can't realistically do yourself. The $1M+ insurance and fraud resolution support alone can save you hundreds of hours and thousands of dollars if your identity is stolen.",
  },
  {
    q: "Can identity theft protection actually prevent identity theft?",
    a: "No service can prevent identity theft entirely. What they do is detect it significantly faster — often within hours instead of weeks or months — and provide professional fraud resolution support to minimize the damage. Early detection is the single biggest factor in reducing financial losses from identity theft.",
  },
  {
    q: "What's the difference between identity monitoring and credit monitoring?",
    a: "Identity monitoring watches for your personal information (SSN, email, phone, etc.) appearing on the dark web, in data breaches, or in criminal databases. Credit monitoring tracks changes to your credit files at one or more bureaus — new accounts, hard inquiries, and score changes. The best services include both.",
  },
  {
    q: "Is the identity theft insurance real? Will they actually pay?",
    a: "Yes, the insurance policies are underwritten by legitimate insurers (typically AIG or similar). They cover eligible expenses like legal fees, lost wages, stolen funds, and costs associated with restoring your identity. Coverage ranges from $25,000 to $3 million depending on the service and plan.",
  },
  {
    q: "Which service is best for families?",
    a: "Aura and McAfee+ both offer strong family plans. Aura's family plan covers up to 5 adults and children with parental controls and cyberbullying monitoring. McAfee+ Family includes unlimited device protection across the household. Identity Guard also covers up to 5 adults on family plans at a competitive price point.",
  },
  {
    q: "Can I get identity theft protection for free?",
    a: "You can freeze your credit for free at all three bureaus and monitor your credit through free services like Credit Karma. However, free options don't include dark web monitoring, SSN surveillance, insurance coverage, or fraud resolution support. After a data breach, affected companies often provide 1-2 years of free monitoring through services like Experian or Identity Guard.",
  },
  {
    q: "How much does identity theft protection cost?",
    a: "Plans range from $7.50/month (Identity Guard, McAfee+ Advanced) to $24.99/month (Experian IdentityWorks). Most services offer annual billing at a discount. We recommend Aura at $9/month (annual) or McAfee+ Advanced at $7.49/month as the best value options with comprehensive feature sets.",
  },
  {
    q: "How do we make money from this comparison?",
    a: "We may earn compensation when you sign up for a service through our links. This does not influence our rankings — services cannot pay for higher placement. Our evaluation methodology is applied consistently across all services, and we regularly recommend services that don't compensate us when they genuinely offer better protection.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-2">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-500 text-base mb-6">
        Common questions about identity theft protection services.
      </p>

      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-[var(--gray-50)] transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-semibold text-base text-[var(--foreground)] pr-4">
                {faq.q}
              </span>
              <svg
                viewBox="0 0 24 24"
                className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 pt-0">
                <p className="text-base text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
