import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Trusted Scorecard",
  description:
    "Get in touch with the Trusted Scorecard editorial team. Questions, corrections, business inquiries, and partnership requests welcome.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page header */}
        <div className="bg-[var(--gray-50)] border-b border-[var(--gray-200)] py-10 md:py-14">
          <div className="max-w-[var(--content-width)] mx-auto px-5 text-center">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[var(--foreground)] tracking-tight mb-2">
              Contact Us
            </h1>
            <p className="text-[var(--gray-600)] text-lg">We&apos;d love to hear from you</p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[var(--wide-width)] mx-auto px-5 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: contact form */}
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Right: info cards */}
            <div className="space-y-4">
              {/* Editorial Inquiries */}
              <div className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-6 flex gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">Editorial Inquiries</h3>
                  <p className="text-sm text-[var(--gray-600)] mb-2">
                    Corrections, product suggestions, review requests, or editorial feedback.
                  </p>
                  <a
                    href="mailto:editorial@trustedscorecard.com"
                    className="text-sm text-[var(--primary)] font-semibold hover:underline"
                  >
                    editorial@trustedscorecard.com
                  </a>
                </div>
              </div>

              {/* Business & Partnerships */}
              <div className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-6 flex gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={1.8}/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                    <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                    <line x1="10" y1="14" x2="14" y2="14" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">Business &amp; Partnerships</h3>
                  <p className="text-sm text-[var(--gray-600)] mb-2">
                    Affiliate program inquiries, sponsored content, and business development.
                  </p>
                  <a
                    href="mailto:partnerships@trustedscorecard.com"
                    className="text-sm text-[var(--primary)] font-semibold hover:underline"
                  >
                    partnerships@trustedscorecard.com
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-6 flex gap-4">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.8}/>
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">Response Time</h3>
                  <p className="text-sm text-[var(--gray-600)]">
                    We typically respond within 2 business days. For urgent corrections, please note &ldquo;Correction&rdquo; in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
