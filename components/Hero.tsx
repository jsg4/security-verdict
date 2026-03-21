export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[var(--primary-light)] to-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wide mb-3">
              Independently Reviewed
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--foreground)] leading-tight mb-4">
              Best Identity Theft Protection Services of 2026
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
              We tested 12+ identity theft protection services over 200+ hours,
              evaluating credit monitoring, dark web surveillance, alert speed,
              insurance coverage, and real-world fraud resolution. Here are the
              services actually worth paying for.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                By <span className="font-medium text-[var(--foreground)]">Security Research Team</span>
              </span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Updated March 21, 2026
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)]" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                12+ Services Tested
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)]" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                200+ Research Hours
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)]" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                Written by Humans
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
