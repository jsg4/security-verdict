export default function ProductShowcase() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left — visual mockup */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[var(--primary-light)] to-blue-100 rounded-2xl p-6 md:p-8">
            {/* Phone mockup */}
            <div className="mx-auto w-48 md:w-56">
              <div className="bg-[var(--foreground)] rounded-[2rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[1.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[var(--primary)] px-4 py-2 flex items-center justify-between">
                    <span className="text-[9px] text-white font-bold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2 bg-white/60 rounded-sm" />
                      <div className="w-3 h-2 bg-white/60 rounded-sm" />
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-[var(--success)] rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-[10px] font-bold text-[var(--success)]">All Clear</span>
                    </div>
                    <p className="text-[10px] font-bold text-[var(--foreground)] mb-2">Your Identity Status</p>
                    <div className="space-y-1.5">
                      {["SSN Monitoring", "Dark Web Scan", "Credit Score", "Bank Accounts"].map((item) => (
                        <div key={item} className="flex items-center justify-between bg-green-50 rounded-lg px-2 py-1.5">
                          <span className="text-[9px] text-gray-600">{item}</span>
                          <svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--success)]" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    {/* Alert notification */}
                    <div className="mt-3 bg-red-50 border border-red-200 rounded-lg px-2 py-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[8px] text-white font-bold">!</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-bold text-red-700">Alert: New Activity</p>
                          <p className="text-[7px] text-red-500">Credit inquiry detected &middot; 2m ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 hidden md:flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--success)]" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] font-bold text-[var(--foreground)]">Real-time alerts</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 hidden md:flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="currentColor">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] font-bold text-[var(--foreground)]">256-bit encryption</span>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div>
          <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">
            24/7 monitoring so you don&apos;t have to
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Identity theft protection services continuously scan the dark web,
            credit bureaus, public records, and financial databases for signs
            that your personal information has been compromised. When something
            is detected, you get an immediate alert — often before your bank
            even knows.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Instant threat alerts",
                desc: "Get notified within minutes when your data appears where it shouldn't.",
                icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
              },
              {
                title: "$1M+ insurance coverage",
                desc: "Financial protection to cover eligible losses if the worst happens.",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Expert fraud resolution",
                desc: "U.S.-based specialists handle the recovery process so you don't have to.",
                icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--foreground)]">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
