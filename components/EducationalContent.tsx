export default function EducationalContent() {
  return (
    <section id="learn" className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">
        Understanding Identity Theft Protection
      </h2>

      {/* What is identity theft */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
          What Is Identity Theft?
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Identity theft occurs when someone uses your personal information —
          Social Security number, credit card numbers, bank account details, or
          other identifying data — without your permission, typically for
          financial gain. In 2025, the FTC received over 1.4 million identity
          theft reports, with losses exceeding $10.2 billion. The most common
          forms include credit card fraud, loan fraud, tax identity theft, and
          medical identity theft.
        </p>
      </div>

      {/* Types */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">
          Types of Identity Theft
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              title: "Financial Identity Theft",
              desc: "Using your SSN or credit info to open accounts, take loans, or make purchases in your name.",
              icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z",
            },
            {
              title: "Medical Identity Theft",
              desc: "Using your insurance or personal info to receive medical care, prescriptions, or file false claims.",
              icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
            },
            {
              title: "Tax Identity Theft",
              desc: "Filing a fraudulent tax return using your SSN to claim your refund before you do.",
              icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
            },
            {
              title: "Synthetic Identity Theft",
              desc: "Criminals combine real and fake data to create an entirely new identity — hardest to detect.",
              icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
            },
          ].map((type) => (
            <div
              key={type.title}
              className="border border-gray-200 rounded-lg p-4 bg-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[var(--primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={type.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-sm text-[var(--foreground)]">
                  {type.title}
                </h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Warning signs */}
      <div className="bg-[var(--gold-light)] border border-[var(--gold)] rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--gold)]" fill="currentColor">
            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
          Warning Signs Your Identity May Be Compromised
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
          {[
            "Unfamiliar charges on your credit card or bank statements",
            "Bills or collection notices for accounts you didn't open",
            "Unexpected credit score drops without explanation",
            "IRS notices about duplicate tax returns filed",
            "Medical bills for services you didn't receive",
            "Calls from debt collectors about unknown debts",
            "Mail stops arriving or goes to a different address",
            "Login alerts from accounts you didn't access",
          ].map((sign, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              {sign}
            </li>
          ))}
        </ul>
      </div>

      {/* Do you need it */}
      <div>
        <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
          Do You Actually Need Identity Theft Protection?
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Identity theft protection services can&apos;t prevent identity theft — no
          service can. What they do is <strong>detect it faster</strong>,{" "}
          <strong>alert you immediately</strong>, and{" "}
          <strong>help you recover</strong> when it happens. The average identity
          theft victim spends 200+ hours and $1,300+ resolving the damage. A
          protection service with $1M+ insurance and dedicated fraud resolution
          specialists can reduce that burden dramatically.
        </p>
        <p className="text-sm text-gray-700 leading-relaxed">
          We recommend identity theft protection especially if you&apos;ve been
          notified of a data breach, have a high credit score worth protecting,
          file taxes early (tax fraud target), or simply want continuous
          monitoring without checking your credit manually every week.
        </p>
      </div>
    </section>
  );
}
