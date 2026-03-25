"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const categories = [
  { label: "Identity Protection", href: "/identity-protection" },
  { label: "Business Formation", href: "/business-formation" },
  { label: "Online Therapy", href: "/online-therapy" },
  { label: "Website Builders", href: "/website-builders" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-[var(--primary)] shadow-md transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      <div className={`max-w-[var(--wide-width)] mx-auto px-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-11" : "h-14"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className={`bg-white/20 rounded-[var(--radius-sm)] flex items-center justify-center transition-all duration-300 ${scrolled ? "w-6 h-6" : "w-7 h-7"}`}>
            <svg viewBox="0 0 24 24" className={`text-white transition-all duration-300 ${scrolled ? "w-3.5 h-3.5" : "w-4 h-4"}`} fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <span className={`font-semibold text-white tracking-tight transition-all duration-300 ${scrolled ? "text-[14px]" : "text-[15px]"}`}>
            Trusted Scorecard
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Categories dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="text-[13px] font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Categories
              <svg viewBox="0 0 24 24" className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-[var(--radius-md)] shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[var(--gray-200)] py-1.5 z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block px-4 py-2.5 text-[13px] text-[var(--foreground)] hover:bg-[var(--gray-50)] hover:text-[var(--primary)] transition-colors"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/methodology" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors">
            Methodology
          </Link>
          <Link href="/about" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[13px] font-medium text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Updated badge */}
        <div className="hidden md:flex items-center gap-1.5 text-[12px] text-white/50 font-medium">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Updated Mar 2026
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1.5 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[var(--primary)] px-5 py-4 space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 pt-1">Categories</p>
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block text-[14px] font-medium text-white/80 hover:text-white py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              {cat.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-3 mt-3 space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">More</p>
            <Link href="/methodology" className="block text-[14px] font-medium text-white/80 hover:text-white py-1.5" onClick={() => setMenuOpen(false)}>Methodology</Link>
            <Link href="/about" className="block text-[14px] font-medium text-white/80 hover:text-white py-1.5" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="block text-[14px] font-medium text-white/80 hover:text-white py-1.5" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
