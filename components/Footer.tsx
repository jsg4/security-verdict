import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--gray-900)] text-[var(--gray-400)] pt-12 pb-8">
      <div className="max-w-[var(--content-width)] mx-auto px-5">

        {/* Branding section */}
        <div className="mb-10">
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

        {/* 4-column link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-[12px]">

          {/* Column 1: Categories */}
          <div>
            <p className="font-semibold text-white mb-3 uppercase tracking-widest text-[10px]">Categories</p>
            <ul className="space-y-2">
              <li><Link href="/identity-protection" className="hover:text-white transition-colors">Identity Protection</Link></li>
              <li><Link href="/business-formation" className="hover:text-white transition-colors">Business Formation</Link></li>
              <li><Link href="/online-therapy" className="hover:text-white transition-colors">Online Therapy</Link></li>
              <li><Link href="/website-builders" className="hover:text-white transition-colors">Website Builders</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <p className="font-semibold text-white mb-3 uppercase tracking-widest text-[10px]">Resources</p>
            <ul className="space-y-2">
              <li><Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/methodology#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <p className="font-semibold text-white mb-3 uppercase tracking-widest text-[10px]">Legal</p>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <p className="font-semibold text-white mb-3 uppercase tracking-widest text-[10px]">Company</p>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/about#standards" className="hover:text-white transition-colors">Editorial Standards</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="border-t border-[var(--gray-800)] pt-6 mb-5">
          <div className="flex flex-wrap items-center gap-6 text-[11px] text-[var(--gray-600)]">
            <span className="flex items-center gap-1.5">
              {/* Shield icon */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Independently Tested
            </span>
            <span className="flex items-center gap-1.5">
              {/* Check badge icon */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              CISSP-Certified Reviewers
            </span>
            <span className="flex items-center gap-1.5">
              {/* Clock icon */}
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Updated Monthly
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--gray-800)] pt-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[11px] text-[var(--gray-500)]">
              &copy; {year} Trusted Scorecard. All rights reserved.
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
