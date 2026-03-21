import { Product } from "@/data/products";
import ScoreRing from "./ScoreRing";
import StarRating from "./StarRating";
import BrandLogo from "./BrandLogo";
import ProConIcon from "./ProConIcon";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--success)] flex-shrink-0" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 flex-shrink-0" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
    </svg>
  );
}

export default function DetailedReview({
  product,
  rank,
}: {
  product: Product;
  rank: number;
}) {
  return (
    <article
      id={product.slug}
      className="mb-10 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="bg-[var(--gray-50)] border-b border-gray-200 px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1">
            <BrandLogo brand={product.slug} size={56} />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-[var(--foreground)]">
                  #{rank} {product.name}
                </h3>
                {product.badge && (
                  <span className="px-2.5 py-0.5 bg-[var(--primary)] text-white text-xs font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{product.tagline}</p>
              <div className="mt-1.5">
                <StarRating rating={product.stars} reviewCount={product.reviewCount} size={14} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ScoreRing score={product.score} size={64} />
            <div className="text-right">
              <p className="text-xs text-gray-500">Security Score</p>
              <p className="text-lg font-bold text-[var(--foreground)]">
                {product.score}/10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Enhanced Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* PROS */}
          <div className="bg-[var(--success-light)] rounded-xl p-5 border border-green-200">
            <h4 className="text-base font-extrabold text-[var(--success)] uppercase tracking-wide mb-4 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              What We Like
            </h4>
            <ul className="space-y-3">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProConIcon icon={pro.icon} type="pro" />
                  <span className="text-sm font-medium text-gray-800 leading-snug pt-1">
                    {pro.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <h4 className="text-base font-extrabold text-[var(--danger)] uppercase tracking-wide mb-4 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
              What We Don&apos;t Like
            </h4>
            <ul className="space-y-3">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProConIcon icon={con.icon} type="con" />
                  <span className="text-sm font-medium text-gray-800 leading-snug pt-1">
                    {con.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Review */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide mb-3">
            Our Review
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed">{product.review}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[var(--foreground)] uppercase tracking-wide mb-3">
            Key Features
          </h4>
          <div className="grid sm:grid-cols-2 gap-2">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-[var(--gray-50)] rounded-lg px-3 py-2.5"
              >
                <Check />
                <div>
                  <p className="text-xs font-semibold text-gray-500">{f.label}</p>
                  <p className="text-sm text-[var(--foreground)]">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Specs */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-[var(--gray-50)] px-4 py-2 border-b border-gray-200">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              Quick Specs
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y divide-gray-200">
            {[
              { label: "Dark Web Monitoring", value: product.darkWebMonitoring },
              { label: "SSN Monitoring", value: product.ssnMonitoring },
              { label: "Credit Lock", value: product.creditLock },
              { label: "VPN Included", value: product.vpnIncluded },
              { label: "Password Manager", value: product.passwordManager },
              { label: "Antivirus", value: product.antivirus },
              { label: "Data Cleanup", value: product.personalDataCleanup },
              { label: "Family Plans", value: product.familyPlan },
            ].map((spec, i) => (
              <div key={i} className="px-3 py-2.5 text-center">
                <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                <div className="flex justify-center">
                  {spec.value ? <Check /> : <Cross />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[var(--primary-light)] rounded-lg px-5 py-4 gap-4">
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-2xl font-bold text-[var(--foreground)]">
                {product.annualMonthly}
              </span>
              <span className="text-sm text-gray-500">
                billed at {product.annualPrice}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
              {product.freeTrial !== "None" && (
                <span className="flex items-center gap-1">
                  <Check /> {product.freeTrial} free trial
                </span>
              )}
              <span className="flex items-center gap-1">
                <Check /> {product.moneyBack} money-back guarantee
              </span>
            </div>
          </div>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:brightness-110 transition-all flex-shrink-0 shadow-md"
          >
            {product.ctaText}
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
