import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllCategories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Our Review Methodology | Trusted Scorecard",
  description:
    "How Trusted Scorecard evaluates and scores products. Our transparent, criteria-based methodology for independent reviews.",
  openGraph: {
    title: "Our Review Methodology | Trusted Scorecard",
    description:
      "Full scoring criteria and testing process for every category we cover. Independent, criteria-driven, updated quarterly.",
    type: "article",
  },
};

const RATING_SCALE = [
  { range: "9.0+", label: "Exceptional", color: "var(--success)", bg: "var(--success-light)" },
  { range: "8.5–8.9", label: "Excellent", color: "#1565c0", bg: "#e8f0fe" },
  { range: "8.0–8.4", label: "Very Good", color: "#0d47a1", bg: "#e3f2fd" },
  { range: "7.5–7.9", label: "Good", color: "var(--warning)", bg: "#fff8e1" },
  { range: "7.0–7.4", label: "Decent", color: "var(--gray-600)", bg: "var(--gray-100)" },
];

const TESTING_STEPS = [
  {
    step: "01",
    title: "Initial Research",
    desc: "We identify products with meaningful market share, active user bases, and sufficient public information to evaluate fairly. We set up accounts and gather baseline data.",
  },
  {
    step: "02",
    title: "Hands-On Testing",
    desc: "Every product is actively used by our category specialist. We complete onboarding, exercise core features, interact with customer support, and simulate real user scenarios.",
  },
  {
    step: "03",
    title: "Scoring",
    desc: "Each product is scored against our published criteria using a weighted formula. Scores are calculated independently before any comparison to competing products.",
  },
  {
    step: "04",
    title: "Peer Review",
    desc: "Draft scores and review text are reviewed by a second editor for accuracy, fairness, and consistency with past reviews in the same category.",
  },
  {
    step: "05",
    title: "Publication",
    desc: "Once approved, reviews are published with full methodology disclosure. The review date is displayed prominently on each page.",
  },
];

export default function MethodologyPage() {
  const categories = getAllCategories();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="bg-[var(--gray-50)] border-b border-[var(--gray-200)] py-12 md:py-16">
          <div className="max-w-[var(--content-width)] mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Transparent &amp; Criteria-Based
            </div>
            <h1 className="text-[2rem] md:text-[2.75rem] font-extrabold text-[var(--foreground)] tracking-tight mb-4">
              Our Review Methodology
            </h1>
            <p className="text-lg text-[var(--gray-600)] max-w-2xl mx-auto leading-relaxed">
              Every score on Trusted Scorecard is derived from a documented, weighted formula — not gut feel, not advertiser budgets. Here is exactly how we do it.
            </p>
          </div>
        </div>

        <div className="max-w-[var(--content-width)] mx-auto px-5 py-12 md:py-16 space-y-16">

          {/* Intro */}
          <section>
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-5">Why We Built a Different Kind of Review Site</h2>
            <div className="space-y-4 text-[var(--gray-700)] leading-relaxed">
              <p>
                Most review sites are built around SEO traffic and affiliate optimization. The products that rank highest are often the ones with the most generous commission structures — not necessarily the best products. We built Trusted Scorecard to break that pattern.
              </p>
              <p>
                Our approach is simple: define the criteria that actually matter to consumers, weight each criterion based on real-world importance, test every product against those criteria, and publish the resulting scores — regardless of where they land. If a high-commission product earns a 7.2, we publish a 7.2.
              </p>
              <p>
                We re-evaluate all reviews quarterly to account for pricing changes, feature updates, and shifts in the competitive landscape. Review dates are displayed prominently on every page so you always know how fresh the information is.
              </p>
            </div>
          </section>

          {/* How We Select Products */}
          <section>
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-5">How We Select Products to Review</h2>
            <p className="text-[var(--gray-700)] leading-relaxed mb-4">
              We do not review every product in a category — only those that meet all three of the following criteria:
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Market Share",
                  desc: "The product must be used by a meaningful portion of the target audience. Niche or obscure tools are excluded unless they serve a specific underserved use case.",
                },
                {
                  title: "User Demand",
                  desc: "We prioritize products our readers are actively researching. Search data, community discussions, and reader feedback all factor into our inclusion decisions.",
                },
                {
                  title: "Availability",
                  desc: "The product must be available for direct purchase or sign-up in the United States. Beta-only or invite-only products are excluded.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-5">
                  <h3 className="font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--gray-600)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testing Process */}
          <section>
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-6">Our Testing Process</h2>
            <div className="space-y-5">
              {TESTING_STEPS.map((step) => (
                <div key={step.step} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--foreground)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[var(--gray-600)] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Rating Scale */}
          <section>
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-5">Our Rating Scale</h2>
            <p className="text-[var(--gray-700)] leading-relaxed mb-6">
              All scores are on a 1–10 scale, calculated by applying each criterion&apos;s weight to its sub-score and summing the results. Below is how we interpret the final numbers:
            </p>
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--gray-200)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--gray-50)] border-b border-[var(--gray-200)]">
                    <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)]">Score Range</th>
                    <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)]">Rating</th>
                    <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)] hidden sm:table-cell">What It Means</th>
                  </tr>
                </thead>
                <tbody>
                  {RATING_SCALE.map((row, i) => (
                    <tr key={row.range} className={i < RATING_SCALE.length - 1 ? "border-b border-[var(--gray-200)]" : ""}>
                      <td className="px-5 py-3.5 font-mono font-semibold text-[var(--foreground)]">{row.range}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className="inline-block px-3 py-0.5 rounded-full text-xs font-bold"
                          style={{ color: row.color, background: row.bg }}
                        >
                          {row.label}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-[var(--gray-600)] hidden sm:table-cell">
                        {row.label === "Exceptional" && "Best-in-class. Recommended without reservation."}
                        {row.label === "Excellent" && "Top-tier product. Minor weaknesses don't detract meaningfully."}
                        {row.label === "Very Good" && "Strong performer. Suitable for most use cases."}
                        {row.label === "Good" && "Above average. Worthwhile for the right buyer."}
                        {row.label === "Decent" && "Meets basic needs. Notable trade-offs vs. top picks."}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Category Scoring Breakdowns */}
          <section>
            <h2 className="text-2xl font-extrabold text-[var(--foreground)] mb-2">Category Scoring Breakdowns</h2>
            <p className="text-[var(--gray-700)] leading-relaxed mb-8">
              Different categories call for different criteria. Here is the exact weighting we use for each.
            </p>
            <div className="space-y-10">
              {categories.map((category) => (
                <div key={category.slug}>
                  <h3 className="text-lg font-extrabold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <span className="w-2 h-5 rounded-sm bg-[var(--primary)] inline-block" aria-hidden="true" />
                    {category.title}
                  </h3>
                  <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--gray-200)]">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[var(--gray-50)] border-b border-[var(--gray-200)]">
                          <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)]">Criteria</th>
                          <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)]">Weight</th>
                          <th className="text-left px-5 py-3 font-semibold text-[var(--gray-700)] hidden sm:table-cell">What We Evaluate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.scoringCriteria.map((criterion, i) => (
                          <tr
                            key={criterion.label}
                            className={i < category.scoringCriteria.length - 1 ? "border-b border-[var(--gray-200)]" : ""}
                          >
                            <td className="px-5 py-3.5 font-semibold text-[var(--foreground)]">{criterion.label}</td>
                            <td className="px-5 py-3.5">
                              <span className="inline-block bg-[var(--primary-light)] text-[var(--primary)] text-xs font-bold px-2.5 py-0.5 rounded-full">
                                {criterion.weight}
                              </span>
                            </td>
                            <td className="px-5 py-3.5 text-[var(--gray-600)] hidden sm:table-cell leading-relaxed">
                              {criterion.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Update Schedule */}
          <section className="bg-[var(--gray-50)] rounded-[var(--radius-lg)] border border-[var(--gray-200)] p-7">
            <h2 className="text-xl font-extrabold text-[var(--foreground)] mb-3">Update Schedule</h2>
            <p className="text-[var(--gray-700)] leading-relaxed">
              All reviews are re-evaluated quarterly — typically in March, June, September, and December. When a product makes a significant pricing or feature change between scheduled reviews, we update that product&apos;s entry within 30 days of the change being confirmed. The &ldquo;Last Reviewed&rdquo; date on each review reflects the most recent evaluation date.
            </p>
          </section>

          {/* Editorial Independence Statement */}
          <section className="border-l-4 border-[var(--primary)] pl-6">
            <h2 className="text-xl font-extrabold text-[var(--foreground)] mb-3">Editorial Independence Statement</h2>
            <p className="text-[var(--gray-700)] leading-relaxed mb-3">
              Trusted Scorecard operates with complete editorial independence from its commercial partners. No company can purchase a higher ranking, a more favorable review, or placement in our top-picks sections. Affiliate relationships are disclosed on every page, but they do not influence scores.
            </p>
            <p className="text-[var(--gray-700)] leading-relaxed">
              If you believe a review contains an error or conflict of interest, please{" "}
              <a href="/contact" className="text-[var(--primary)] hover:underline font-medium">contact us</a>.
              We take corrections seriously and publish amendments promptly. Learn more about our team on our{" "}
              <a href="/about" className="text-[var(--primary)] hover:underline font-medium">About page</a>.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
