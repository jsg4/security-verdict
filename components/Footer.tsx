export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] text-[var(--gray-400)] pt-12 pb-8">
      <div className="max-w-[var(--content-width)] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[var(--primary)] rounded-[var(--radius-sm)] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-semibold text-white text-[14px]">Trusted Scorecard</span>
            </div>
            <p className="text-[12px] text-[var(--gray-500)] max-w-xs leading-relaxed">
              Independent, expert-tested reviews. We test every product we recommend and maintain strict editorial independence.
            </p>
          </div>

          <div className="flex gap-14 text-[12px]">
            <div>
              <p className="font-semibold text-white mb-2.5 uppercase tracking-widest text-[10px]">Resources</p>
              <ul className="space-y-1.5">
                <li><a href="#methodology" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#learn" className="hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2.5 uppercase tracking-widest text-[10px]">Legal</p>
              <ul className="space-y-1.5">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gray-800)] pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[11px] text-[var(--gray-500)]">
              &copy; {new Date().getFullYear()} Trusted Scorecard. All rights reserved.
            </p>
            <p className="text-[11px] text-[var(--gray-600)]">
              <strong className="text-[var(--gray-500)]">Disclosure:</strong> We may earn compensation from partner links. This does not affect our ratings.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
