export default function Disclosure() {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-5 py-3">
      <div className="bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[var(--radius-md)] px-4 py-3 flex items-start gap-2.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--gray-400)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p className="text-[12px] text-[var(--gray-500)] leading-relaxed">
          <span className="font-semibold text-[var(--gray-600)]">Advertising Disclosure:</span>{" "}
          We may earn compensation from some providers listed on this page. This does not influence our rankings or reviews — our evaluations are based on independent testing and research.{" "}
          <a href="#methodology" className="text-[var(--primary)] font-medium hover:underline">
            See our methodology
          </a>
          .
        </p>
      </div>
    </div>
  );
}
