import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCategories } from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" style={{ width: size, height: size }} fill={i < count ? "#F59E0B" : "#E5E7EB"}>
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
        </svg>
      ))}
    </div>
  );
}

const homeReviews = [
  {
    name: "Sarah M.",
    photo: "/photos/review-sarah.jpg",
    text: "Found the perfect identity protection plan through their comparison. Saved me hours of research and the side-by-side table made the decision easy.",
    rating: 5,
    category: "Identity Protection",
  },
  {
    name: "Michael R.",
    photo: "/photos/review-michael.jpg",
    text: "Finally a review site that actually tests the products instead of just listing features. The detailed pros and cons helped me avoid a service that wouldn't have worked for my family.",
    rating: 5,
    category: "Identity Protection",
  },
  {
    name: "Jennifer L.",
    photo: "/photos/review-jennifer.jpg",
    text: "I was overwhelmed by options until I found Trusted Scorecard. The scoring methodology is transparent and the reviews feel genuinely unbiased. Bookmarked for future purchases.",
    rating: 5,
    category: "Identity Protection",
  },
];

export default function Home() {
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[var(--primary-light)] to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-3">
              Trusted Scorecard
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight mb-4">
              Independent Reviews
              <br />
              <span className="text-[#FA8072]">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Expert-tested comparison guides to help you find the best products
              and services. No bias, no shortcuts — just honest reviews backed by
              real research.
            </p>

            {/* Trust stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--success)]" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
                <strong className="text-[var(--foreground)]">50+</strong> Products Tested
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--success)]" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
                <strong className="text-[var(--foreground)]">500+</strong> Hours of Research
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--success)]" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
                <strong className="text-[var(--foreground)]">100K+</strong> Readers Helped
              </span>
            </div>

          </div>
        </section>

        {/* Category Cards */}
        <section className="max-w-5xl mx-auto px-4 -mt-8 pb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[var(--primary)] hover:shadow-xl transition-all no-underline text-inherit"
              >
                <div className="w-12 h-12 bg-[var(--primary-light)] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--primary)] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold text-[var(--foreground)] mb-2">{cat.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{cat.metaDescription.slice(0, 120)}...</p>
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                  View comparison
                  <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}

            {["Credit Cards", "VPN Services", "Insurance", "Antivirus"].map((name) => (
              <div key={name} className="block bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 opacity-60">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold text-gray-400 mb-2">{name}</h2>
                <p className="text-sm text-gray-400 mb-4">Expert comparison guide coming soon.</p>
                <span className="text-sm font-bold text-gray-400">Coming Soon</span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[var(--gray-50)] py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-3">
                How Trusted Scorecard Works
              </h2>
              <p className="text-base text-gray-500 max-w-xl mx-auto">
                We do the research so you don&apos;t have to. Every product is tested, scored, and compared using the same rigorous methodology.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "1", title: "We Test Everything", desc: "Our team subscribes to every service, tests real-world performance, and documents results over weeks of hands-on use.", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" },
                { step: "2", title: "We Score Objectively", desc: "Products are rated across weighted categories — features, pricing, ease of use, support — using transparent, published criteria.", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
                { step: "3", title: "You Decide With Confidence", desc: "Side-by-side comparison tables, honest pros and cons, and clear recommendations help you pick the right product fast.", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                  <div className="w-14 h-14 bg-[var(--primary-light)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-[var(--primary)] mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-extrabold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reader Reviews */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-3">
                What Our Readers Say
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Stars count={5} size={18} />
                <span className="text-base font-semibold text-[var(--foreground)]">4.9 out of 5</span>
              </div>
              <p className="text-sm text-gray-500">Based on reader feedback across all comparison guides</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {homeReviews.map((r, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Image src={r.photo} alt={r.name} width={48} height={48} className="rounded-full object-cover" style={{ width: 48, height: 48 }} />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-sm text-[var(--foreground)]">{r.name}</span>
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
                      </div>
                      <p className="text-[11px] text-gray-400">{r.category} reader</p>
                    </div>
                  </div>
                  <Stars count={r.rating} size={14} />
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-[#0d47a1] py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-3">
              Trusted by Over 100,000 Readers
            </h2>
            <p className="text-sm text-blue-200 mb-6 max-w-xl mx-auto">
              We&apos;re committed to helping you make smarter decisions with independent, expert-backed reviews across every category.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
              {[
                { stat: "50+", label: "Products Tested" },
                { stat: "500+", label: "Hours of Research" },
                { stat: "100K+", label: "Readers Helped" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-3 border border-white/10">
                  <p className="text-2xl font-extrabold text-white">{s.stat}</p>
                  <p className="text-[11px] text-blue-200">{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/identity-protection" className="inline-flex items-center gap-2 bg-white text-[#0d47a1] font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg no-underline">
              Explore Our Reviews
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
