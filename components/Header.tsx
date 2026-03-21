"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0d47a1] shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
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
          <span className="font-bold text-lg text-white hidden sm:block">
            Trusted Scorecard
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#top-picks" className="hover:text-white transition-colors">
            Top Picks
          </a>
          <a href="#reviews" className="hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#comparison" className="hover:text-white transition-colors">
            Compare
          </a>
          <a href="#methodology" className="hover:text-white transition-colors">
            Methodology
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-2 text-xs text-white/60">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Updated Mar 2026
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d47a1] px-4 py-4 space-y-3">
          {["Top Picks", "Reviews", "Compare", "Methodology", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-sm font-medium text-white/80 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
