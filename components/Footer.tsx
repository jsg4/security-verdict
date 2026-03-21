export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-gray-400 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <span className="font-bold text-white text-sm">
                Trusted Scorecard
              </span>
            </div>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Independent security reviews you can trust. We test every product
              we recommend and maintain strict editorial independence.
            </p>
          </div>

          <div className="flex gap-12 text-xs">
            <div>
              <p className="font-semibold text-white mb-2 uppercase tracking-wider text-[10px]">
                Resources
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a href="#methodology" className="hover:text-white transition-colors">
                    Methodology
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#learn" className="hover:text-white transition-colors">
                    Identity Theft Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2 uppercase tracking-wider text-[10px]">
                Legal
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Affiliate Disclosure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[11px] text-gray-500">
              &copy; {new Date().getFullYear()} Trusted Scorecard. All rights
              reserved. All trademarks are property of their respective owners.
            </p>
            <p className="text-[11px] text-gray-500">
              <strong className="text-gray-400">Advertising Disclosure:</strong>{" "}
              We may earn compensation from partner links. This does not affect
              our ratings.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
