import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";
import { getAllCategories } from "@/data/categories";

export const metadata: Metadata = {
  title: "About Us | Trusted Scorecard",
  description:
    "Trusted Scorecard is an independent review platform built on editorial integrity. Our expert team conducts rigorous, hands-on testing so you can make confident decisions.",
  openGraph: {
    title: "About Us | Trusted Scorecard",
    description:
      "Independent reviews backed by 5,000+ hours of research. No pay-to-play, no hidden agendas — just honest expert analysis.",
    type: "website",
  },
};

export default function AboutPage() {
  const categories = getAllCategories();

  // Deduplicate authors by name
  const seenNames = new Set<string>();
  const authors = categories
    .map((c) => ({ ...c.author, specialty: c.title }))
    .filter((a) => {
      if (seenNames.has(a.name)) return false;
      seenNames.add(a.name);
      return true;
    });

  return (
    <>
      <OrganizationSchema />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--primary)] text-white py-16 md:py-20">
          <div className="max-w-[var(--content-width)] mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Independent &amp; Editorial-First
            </div>
            <h1 className="text-[2.25rem] md:text-[3rem] font-extrabold tracking-tight leading-tight mb-5">
              Independent Reviews You Can Trust
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              Trusted Scorecard was built on one principle: consumers deserve honest, unbiased
              guidance free from advertiser pressure. Our editorial team conducts hands-on testing
              of every product we review — and our scores are never influenced by the affiliate
              relationships that keep our site running.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b border-[var(--gray-200)] bg-white">
          <div className="max-w-[var(--wide-width)] mx-auto px-5 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* 50+ Products Tested */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <path d="M12 2L3 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round"/>
                    <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round"/>
                    <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-[var(--foreground)]">50+</div>
                <div className="text-sm text-[var(--gray-600)] font-medium">Products Tested</div>
              </div>

              {/* 5,000+ Hours Research */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.8}/>
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-[var(--foreground)]">5,000+</div>
                <div className="text-sm text-[var(--gray-600)] font-medium">Hours Research</div>
              </div>

              {/* 4 Categories */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth={1.8}/>
                    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth={1.8}/>
                    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth={1.8}/>
                    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth={1.8}/>
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-[var(--foreground)]">4</div>
                <div className="text-sm text-[var(--gray-600)] font-medium">Categories</div>
              </div>

              {/* Updated Monthly */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-2xl font-extrabold text-[var(--foreground)]">Monthly</div>
                <div className="text-sm text-[var(--gray-600)] font-medium">Updated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Standards */}
        <section id="standards" className="py-16 bg-[var(--gray-50)]">
          <div className="max-w-[var(--wide-width)] mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-[1.75rem] md:text-[2rem] font-extrabold text-[var(--foreground)] tracking-tight mb-3">
                Our Editorial Standards
              </h2>
              <p className="text-[var(--gray-600)] max-w-xl mx-auto">
                Every review we publish is held to the same rigorous standards — regardless of whether a company has an affiliate agreement with us.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* How We Test */}
              <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-7">
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">How We Test</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  Every product is evaluated through active, hands-on use — not just marketing materials. Our reviewers sign up for accounts, go through onboarding, test features against real-world scenarios, and monitor performance over time before scoring anything.
                </p>
              </div>

              {/* Editorial Independence */}
              <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-7">
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Editorial Independence</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  There is no pay-to-play at Trusted Scorecard. Affiliate commissions help fund our research, but companies cannot purchase favorable coverage, higher rankings, or inflated scores. Our commercial relationships are disclosed transparently on every page.
                </p>
              </div>

              {/* Transparency */}
              <div className="bg-white rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-7">
                <div className="w-11 h-11 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[var(--primary)]" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth={1.8}/>
                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                    <path d="M11 8v3m0 3h.01" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">Transparency</h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  Our scoring criteria are published openly on our{" "}
                  <a href="/methodology" className="text-[var(--primary)] hover:underline font-medium">methodology page</a>. You can see exactly how we weight each factor — and why. We re-evaluate all reviews quarterly so scores stay current.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section className="py-16 bg-white">
          <div className="max-w-[var(--wide-width)] mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-[1.75rem] md:text-[2rem] font-extrabold text-[var(--foreground)] tracking-tight mb-3">
                Meet Our Expert Team
              </h2>
              <p className="text-[var(--gray-600)] max-w-xl mx-auto">
                Each category is led by a specialist with deep domain expertise — not a generalist writer paid by the word.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {authors.map((author) => (
                <div
                  key={author.name}
                  className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-6 text-center"
                >
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-[var(--gray-200)]"
                  />
                  <h3 className="font-bold text-[var(--foreground)] text-base mb-0.5">{author.name}</h3>
                  <p className="text-xs text-[var(--primary)] font-semibold mb-1">{author.title}</p>
                  <p className="text-xs text-[var(--gray-500)] mb-3">{author.specialty} Expert</p>
                  <ul className="space-y-1">
                    {author.credentials.map((cred, i) => (
                      <li key={i} className="text-xs text-[var(--gray-600)] flex items-center justify-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                        {cred.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-14 bg-[var(--primary-light)]">
          <div className="max-w-[var(--content-width)] mx-auto px-5 text-center">
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-3">Have questions?</h2>
            <p className="text-[var(--gray-600)] mb-6 max-w-md mx-auto">
              Whether you want to suggest a product, flag an inaccuracy, or explore a partnership — we&apos;d love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-7 py-3 rounded-[var(--radius-md)] hover:bg-[var(--accent)] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
