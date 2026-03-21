import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCategories } from "@/data/categories";
import Link from "next/link";

export default function Home() {
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[var(--primary-light)] to-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-3">
              Trusted Scorecard
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] leading-tight mb-4">
              Independent Reviews You Can{" "}
              <span className="text-[var(--cta)]">Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Expert-tested comparison guides to help you find the best products
              and services. No bias, no shortcuts — just honest reviews backed by
              real research.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 -mt-8 pb-16">
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
                <h2 className="text-xl font-extrabold text-[var(--foreground)] mb-2">
                  {cat.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {cat.metaDescription.slice(0, 120)}...
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                  View comparison
                  <svg viewBox="0 0 24 24" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}

            {/* Coming soon placeholders */}
            {["Credit Cards", "VPN Services", "Insurance", "Antivirus"].map((name) => (
              <div
                key={name}
                className="block bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 opacity-60"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-extrabold text-gray-400 mb-2">
                  {name}
                </h2>
                <p className="text-sm text-gray-400 mb-4">
                  Expert comparison guide coming soon.
                </p>
                <span className="text-sm font-bold text-gray-400">Coming Soon</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
