export default function ThreatBanner() {
  return (
    <section className="bg-[#0d47a1] py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">
            Identity Theft Is Getting Worse
          </h2>
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">
            Data breaches hit record levels in 2025. Here&apos;s why millions are investing in protection.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              stat: "1.4M+",
              label: "Identity theft reports filed with FTC in 2025",
              icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
            },
            {
              stat: "$10.2B",
              label: "Total consumer losses from identity fraud",
              icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              stat: "200+ hrs",
              label: "Average time victims spend resolving theft",
              icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              stat: "Every 22s",
              label: "A new identity theft case is reported in the U.S.",
              icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
            >
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {item.stat}
              </p>
              <p className="text-[11px] text-blue-200 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="#top-picks"
            className="inline-flex items-center gap-2 bg-white text-[#0d47a1] font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            See Our Top Recommendations
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
