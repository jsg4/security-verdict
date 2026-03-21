export default function HowWeEvaluate() {
  const criteria = [
    {
      label: "Identity Monitoring",
      weight: "30%",
      desc: "Breadth and speed of monitoring: SSN, dark web, financial accounts, public records, and real-time alert delivery.",
    },
    {
      label: "Credit Monitoring",
      weight: "25%",
      desc: "Number of bureaus monitored, alert speed, credit score tracking frequency, and credit lock/freeze capabilities.",
    },
    {
      label: "Digital Security",
      weight: "15%",
      desc: "Bundled VPN, antivirus, password manager quality. We use AV-TEST scores and independent security lab results.",
    },
    {
      label: "Insurance & Recovery",
      weight: "15%",
      desc: "Insurance coverage amount, claim process, U.S.-based fraud specialists availability, and resolution support quality.",
    },
    {
      label: "Value & Pricing",
      weight: "15%",
      desc: "Cost relative to features included, renewal pricing transparency, free trial availability, and money-back guarantee terms.",
    },
  ];

  return (
    <section id="methodology" className="bg-[var(--gray-50)] py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
          How We Evaluate
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Our Security Score is calculated across five weighted categories,
          based on hands-on testing and independent research.
        </p>

        <div className="space-y-4 mb-8">
          {criteria.map((c) => (
            <div
              key={c.label}
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                <span className="inline-flex items-center justify-center w-12 h-8 bg-[var(--primary-light)] text-[var(--primary)] text-sm font-bold rounded">
                  {c.weight}
                </span>
                <span className="font-semibold text-sm text-[var(--foreground)]">
                  {c.label}
                </span>
              </div>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-sm text-[var(--foreground)] mb-3">
            Our Testing Process
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </span>
              <p>
                We subscribe to every service using real accounts and test
                monitoring features over 2+ weeks.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </span>
              <p>
                We deliberately expose test credentials on known breach
                databases and measure alert speed.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                3
              </span>
              <p>
                We contact customer support with identity theft scenarios and
                evaluate response quality and speed.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Scores are updated quarterly or when services make significant changes
          to features or pricing. Last full evaluation: February 2026.
        </p>
      </div>
    </section>
  );
}
