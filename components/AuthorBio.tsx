import Image from "next/image";

export default function AuthorBio({ variant = "inline" }: { variant?: "inline" | "full" }) {
  const VerifiedBadge = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );

  if (variant === "inline") {
    return (
      <div className="flex items-center gap-3">
        <Image
          src="/photos/author.jpg"
          alt="Daniel Rosenberg"
          width={42}
          height={42}
          className="rounded-full object-cover flex-shrink-0"
          style={{ width: 42, height: 42 }}
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-[var(--foreground)]">
              Daniel Rosenberg
            </span>
            <VerifiedBadge />
          </div>
          <p className="text-xs text-gray-500">
            Cybersecurity Analyst &middot; 8+ years in digital security research
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6">
      <div className="flex items-start gap-4">
        <Image
          src="/photos/author.jpg"
          alt="Daniel Rosenberg"
          width={64}
          height={64}
          className="rounded-full object-cover flex-shrink-0"
          style={{ width: 64, height: 64 }}
        />
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <h4 className="font-bold text-[var(--foreground)]">
              Daniel Rosenberg
            </h4>
            <VerifiedBadge />
            <span className="text-xs bg-[var(--primary-light)] text-[var(--primary)] font-semibold px-2 py-0.5 rounded-full ml-1">
              Verified Expert
            </span>
          </div>
          <p className="text-sm font-medium text-gray-600 mb-2">
            Lead Cybersecurity Analyst
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Daniel has spent 8+ years researching identity theft protection,
            cybersecurity tools, and consumer privacy products. He has personally
            tested over 40 security services and his work has been cited by
            consumer protection organizations. He holds a CISSP certification
            and previously worked in fraud prevention at a Fortune 500 financial
            institution.
          </p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              47 articles published
            </span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
              </svg>
              CISSP Certified
            </span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last reviewed Mar 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
