# Affiliate Site Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade trustedscorecard.com to pass affiliate network approvals, maximize conversions, and match Forbes Advisor visual quality.

**Architecture:** Existing Next.js 16 + React 19 + Tailwind 4 static site. All data lives in TypeScript config files (`data/categories/*.ts`). No backend. New trust pages as static routes, extracted UI components, widened score ranges, and visual polish across existing components.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Formspree (contact form)

**Spec:** `docs/superpowers/specs/2026-03-24-affiliate-site-upgrade-design.md`

**IMPORTANT:** This is Next.js 16 with breaking changes. Before writing any page or component code, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.

---

## File Map

### New Files
| File | Responsibility |
|------|---------------|
| `components/ExpertTake.tsx` | Expandable expert opinion dropdown |
| `components/DealBadge.tsx` | Green urgency badge for promotions |
| `components/BestForBadge.tsx` | "Best for [use case]" pill badge |
| `components/ClickToCall.tsx` | Phone CTA (mobile tel: / desktop display) |
| `components/Breadcrumbs.tsx` | Visual breadcrumb nav trail |
| `components/ContactForm.tsx` | Contact page form (Formspree submission) |
| `components/OrganizationSchema.tsx` | JSON-LD Organization schema for /about |
| `app/about/page.tsx` | About / editorial team page |
| `app/privacy-policy/page.tsx` | Privacy policy |
| `app/terms/page.tsx` | Terms of service |
| `app/contact/page.tsx` | Contact form page |
| `app/methodology/page.tsx` | Scoring methodology deep-dive |

### Modified Files
| File | Changes |
|------|---------|
| `data/types.ts` | Add `deal`, `expertTake` fields; make `bestFor`, `scoreBreakdown` required; remove `badge`, `discount` |
| `data/categories/identity-protection.ts` | Widen scores, migrate discount→deal, badge→bestFor, add expertTake content |
| `data/categories/business-formation.ts` | Same |
| `data/categories/online-therapy.ts` | Same |
| `data/categories/website-builders.ts` | Same |
| `app/globals.css` | Typography refinements (17px body, heading sizes), new animations, card polish |
| `app/[category]/page.tsx` | Move Disclosure after hero, replace PromoBanner with EmailCapture, add Breadcrumbs |
| `components/Header.tsx` | Shrink-on-scroll, category dropdown, breadcrumb support |
| `components/Footer.tsx` | 4-column layout, working links, trust badges |
| `components/Disclosure.tsx` | New wording with /methodology link |
| `components/ScoreRing.tsx` | Already handles wider range (has color tiers for 9+, 8+, 7+) — verify only |
| `components/CategoryReview.tsx` | Integrate ExpertTake, DealBadge, BestForBadge, ClickToCall; card styling upgrade |
| `components/CategoryTopPicks.tsx` | Use DealBadge, BestForBadge, ClickToCall; Editor's Choice ribbon |
| `components/CategoryComparisonTable.tsx` | Forbes Advisor style: alternating rows, logos, sticky column |
| `components/EmailCapture.tsx` | Newsletter redesign, email-only, social proof line |
| `components/SchemaMarkup.tsx` | Ensure all JSON-LD types emit correctly |
| `components/CategoryHero.tsx` | Add breadcrumb slot below hero |
| `components/StickyMobileCTA.tsx` | Visual polish |
| `components/QuickCompare.tsx` | Replace `discount`/`promoCode` references with `deal` field |

### Deleted Files
| File | Reason |
|------|--------|
| `components/PromoBanner.tsx` | Deprecated — replaced by EmailCapture in review flow |

---

## Task 1: Data Model Updates

**Files:**
- Modify: `data/types.ts`

This task updates the TypeScript interfaces that everything else depends on. Must be done first.

- [ ] **Step 1: Read current types.ts**

Read `data/types.ts` to confirm current interface structure.

- [ ] **Step 2: Update Product interface**

In `data/types.ts`, make these changes to the `Product` interface:
- Remove `discount?: string;` (line 10)
- Remove `badge?: string;` (line 11)
- Change `bestFor?: string;` (line 34) to `bestFor: string;` (required)
- Change `scoreBreakdown?: { label: string; score: number }[];` (line 35) to `scoreBreakdown: { label: string; score: number }[];` (required)
- Add after `useCases` (line 36):

```typescript
deal?: {
  text: string;
  active: boolean;
  promoCode?: string;  // migrated from top-level promoCode field
};
expertTake?: string;
```

- Also remove `promoCode?: string;` (line 30) — migrated into `deal.promoCode`

- [ ] **Step 3: Verify build still compiles (expect errors)**

Run: `cd ~/affiliate-site && npx tsc --noEmit 2>&1 | head -40`

Expected: TypeScript errors in category data files about missing `bestFor` (now required) and removed `discount`/`badge`. This is correct — we fix those in Task 2.

- [ ] **Step 4: Commit**

```bash
cd ~/affiliate-site && git add data/types.ts && git commit -m "feat: update Product interface — add deal/expertTake, require bestFor/scoreBreakdown, remove badge/discount"
```

---

## Task 2: Migrate Category Data (Identity Protection)

**Files:**
- Modify: `data/categories/identity-protection.ts`

Migrate the first category as the template for all others. Widen scores, migrate deprecated fields, add expertTake content.

- [ ] **Step 1: Read the identity-protection data file**

Read `data/categories/identity-protection.ts` to understand current product data.

- [ ] **Step 2: Migrate all products**

For each product in the `products` array:
1. **Replace `discount` + `promoCode` with `deal`:** If product has `discount: "Save 60%"` and/or `promoCode: "SAVE60"`, change to `deal: { text: "Save 60%", active: true, promoCode: "SAVE60" }`. If no discount, omit `deal`.
2. **Replace `badge` with `bestFor`:** If product has `badge`, move value to `bestFor`. If product has neither `badge` nor `bestFor`, add `bestFor` with an appropriate label:
   - Product #1 → "Best Overall"
   - Product #2 → contextual (e.g., "Best Value", "Best for Families")
   - Product #3 → contextual
   - Product #4 → contextual
   - Product #5 → contextual
3. **Make `scoreBreakdown` required:** Ensure every product has a `scoreBreakdown` array.
4. **Widen scores:** Adjust the bottom 1-2 products to 7.2-8.0 range. Adjust their `scoreBreakdown` sub-scores accordingly (some in 6.x-7.x). Keep top products at 9.0+ range.
5. **Update `ratingLabel`** to match the new score using this scale:
   - 9.0+ = "Exceptional"
   - 8.5-8.9 = "Excellent"
   - 8.0-8.4 = "Very Good"
   - 7.5-7.9 = "Good"
   - 7.0-7.4 = "Decent"
6. **Add `expertTake`:** Write 2-3 paragraph expert opinion for each product. Honest, opinionated — who this is really for, where it falls short. Markdown format.
7. **Remove all `discount`, `badge`, and `promoCode` fields** from every product.

- [ ] **Step 3: Verify TypeScript compiles for this file**

Run: `cd ~/affiliate-site && npx tsc --noEmit 2>&1 | grep identity-protection`

Expected: No errors for this file (other category files may still error).

- [ ] **Step 4: Commit**

```bash
cd ~/affiliate-site && git add data/categories/identity-protection.ts && git commit -m "feat: migrate identity-protection data — widen scores, add deals/expertTake, remove deprecated fields"
```

---

## Task 3: Migrate Category Data (Remaining 3 Categories)

**Files:**
- Modify: `data/categories/business-formation.ts`
- Modify: `data/categories/online-therapy.ts`
- Modify: `data/categories/website-builders.ts`

Apply the same migration pattern from Task 2 to all remaining categories.

- [ ] **Step 1: Read each category file**

Read all three category files to understand current data.

- [ ] **Step 2: Migrate business-formation.ts**

Same steps as Task 2 Step 2. Ensure bottom 1-2 products are in 7.2-8.0 range with adjusted sub-scores. Add `expertTake` for all products. Remove `discount`/`badge`, add `deal`/`bestFor`.

- [ ] **Step 3: Migrate online-therapy.ts**

Same migration pattern.

- [ ] **Step 4: Migrate website-builders.ts**

Same migration pattern.

- [ ] **Step 5: Full TypeScript compile check**

Run: `cd ~/affiliate-site && npx tsc --noEmit`

Expected: Clean compile — zero errors. All category files now match updated Product interface.

- [ ] **Step 6: Commit**

```bash
cd ~/affiliate-site && git add data/categories/ && git commit -m "feat: migrate all category data — widen scores, add deals/expertTake, remove deprecated fields"
```

---

## Task 4: New UI Components (ExpertTake, DealBadge, BestForBadge, ClickToCall)

**Files:**
- Create: `components/ExpertTake.tsx`
- Create: `components/DealBadge.tsx`
- Create: `components/BestForBadge.tsx`
- Create: `components/ClickToCall.tsx`

Small, focused extraction components. These are used by CategoryReview and CategoryTopPicks.

- [ ] **Step 1: Create ExpertTake.tsx**

```tsx
"use client";

import { useState } from "react";

export default function ExpertTake({
  content,
  authorName,
  authorPhoto,
}: {
  content: string;
  authorName: string;
  authorPhoto: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-[var(--gray-200)] mt-4 pt-4">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded(!expanded);
        }}
        className="flex items-center gap-2 text-[13px] font-semibold text-[var(--primary)] hover:text-[var(--accent)] transition-colors w-full text-left"
      >
        <img
          src={authorPhoto}
          alt={authorName}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span>Expert Take — {authorName}</span>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 ml-auto transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {expanded && (
        <div className="mt-3 text-[13px] text-[var(--gray-600)] leading-relaxed space-y-2 pl-8">
          {content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Create DealBadge.tsx**

```tsx
export default function DealBadge({ deal }: { deal: { text: string; active: boolean; promoCode?: string } }) {
  if (!deal.active) return null;

  return (
    <div className="flex items-center gap-2 bg-[var(--success-light)] border border-green-200 rounded-[var(--radius-md)] px-3 py-2 animate-fade-in-up">
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)] flex-shrink-0" fill="currentColor">
        <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
      </svg>
      <span className="text-[12px] font-bold text-[var(--success)]">
        {deal.text}
        {deal.promoCode && (
          <> — Use code: <span className="bg-[var(--success-light)] px-1.5 py-0.5 rounded-[var(--radius-sm)] font-mono">{deal.promoCode}</span></>
        )}
      </span>
    </div>
  );
}
```

- [ ] **Step 3: Create BestForBadge.tsx**

```tsx
export default function BestForBadge({
  bestFor,
  variant = "default",
}: {
  bestFor: string;
  variant?: "default" | "gold";
}) {
  const classes =
    variant === "gold"
      ? "bg-[var(--gold)] text-white"
      : "bg-[var(--primary)] text-white";

  return (
    <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-[var(--radius-full)] ${classes}`}>
      {bestFor}
    </span>
  );
}
```

- [ ] **Step 4: Create ClickToCall.tsx**

```tsx
"use client";

export default function ClickToCall({
  phone,
  productName,
  variant = "inline",
}: {
  phone: string;
  productName: string;
  variant?: "inline" | "prominent";
}) {
  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
  };

  if (variant === "prominent") {
    return (
      <a
        href={`tel:${phone}`}
        onClick={(e) => e.stopPropagation()}
        className="mt-2 flex items-center justify-center gap-2 bg-[var(--primary-light)] border border-[var(--primary)]/20 rounded-[var(--radius-md)] px-4 py-2.5 text-[14px] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <span className="md:hidden">Call {phone}</span>
        <span className="hidden md:inline" onClick={handleCopyPhone} title="Click to copy">
          {phone} <span className="text-[11px] font-normal">(click to copy)</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={`tel:${phone}`}
      onClick={(e) => e.stopPropagation()}
      className="mt-2 flex items-center justify-center gap-1.5 text-[13px] text-[var(--primary)] font-semibold hover:underline"
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
      Call {phone}
    </a>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `cd ~/affiliate-site && npx tsc --noEmit`

Expected: Clean compile.

- [ ] **Step 6: Commit**

```bash
cd ~/affiliate-site && git add components/ExpertTake.tsx components/DealBadge.tsx components/BestForBadge.tsx components/ClickToCall.tsx && git commit -m "feat: add ExpertTake, DealBadge, BestForBadge, ClickToCall components"
```

---

## Task 5: Breadcrumbs + OrganizationSchema Components

**Files:**
- Create: `components/Breadcrumbs.tsx`
- Create: `components/OrganizationSchema.tsx`

- [ ] **Step 1: Create Breadcrumbs.tsx**

Must source breadcrumb data from the same structure as BreadcrumbList JSON-LD in `SchemaMarkup.tsx` (Home → Category).

```tsx
import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[var(--content-width)] mx-auto px-5 py-2">
      <ol className="flex items-center gap-1.5 text-[12px] text-[var(--gray-400)]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--primary)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--gray-600)] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] **Step 2: Create OrganizationSchema.tsx**

```tsx
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trusted Scorecard",
    url: "https://trustedscorecard.com",
    logo: "https://trustedscorecard.com/logo.png",
    description: "Independent, expert-tested product reviews and comparison guides.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@trustedscorecard.com",
      url: "https://trustedscorecard.com/contact",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd ~/affiliate-site && git add components/Breadcrumbs.tsx components/OrganizationSchema.tsx && git commit -m "feat: add Breadcrumbs and OrganizationSchema components"
```

---

## Task 6: ContactForm Component

**Files:**
- Create: `components/ContactForm.tsx`

- [ ] **Step 1: Create ContactForm.tsx**

Uses Formspree for static site form submission. Falls back to mailto if Formspree ID isn't configured.

```tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Something went wrong. Please email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-[var(--success-light)] border border-green-200 rounded-[var(--radius-lg)] p-8 text-center">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-[var(--success)] mx-auto mb-3" fill="currentColor">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <h3 className="text-xl font-extrabold text-[var(--success)] mb-1">Message Sent</h3>
        <p className="text-[var(--gray-600)]">We&apos;ll get back to you within 2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-[13px] font-semibold text-[var(--gray-700)] mb-1.5">Name</label>
        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-[var(--radius-md)] text-[14px] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none" />
      </div>
      <div>
        <label htmlFor="email" className="block text-[13px] font-semibold text-[var(--gray-700)] mb-1.5">Email</label>
        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-[var(--radius-md)] text-[14px] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-[13px] font-semibold text-[var(--gray-700)] mb-1.5">Subject</label>
        <select id="subject" name="subject" required className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-[var(--radius-md)] text-[14px] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none bg-white">
          <option value="">Select a topic...</option>
          <option value="editorial">Editorial Inquiry</option>
          <option value="business">Business / Partnerships</option>
          <option value="corrections">Corrections</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-semibold text-[var(--gray-700)] mb-1.5">Message</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 border border-[var(--gray-200)] rounded-[var(--radius-md)] text-[14px] focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none resize-y" />
      </div>
      {error && <p className="text-[var(--danger)] text-[13px] font-medium">{error}</p>}
      <button type="submit" className="btn-cta px-8 py-3 text-[15px]">
        Send Message
      </button>
    </form>
  );
}
```

**Note:** Replace `YOUR_FORM_ID` with a real Formspree form ID. The user needs to create a free Formspree account and form at formspree.io.

- [ ] **Step 2: Commit**

```bash
cd ~/affiliate-site && git add components/ContactForm.tsx && git commit -m "feat: add ContactForm component with Formspree integration"
```

---

## Task 7: Trust Pages (About, Privacy, Terms, Contact, Methodology)

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/privacy-policy/page.tsx`
- Create: `app/terms/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/methodology/page.tsx`

**IMPORTANT:** Before creating any page, read `node_modules/next/dist/docs/` for Next.js 16 page conventions. Check for breaking changes in metadata, layout, and routing.

- [ ] **Step 1: Read Next.js 16 docs for page conventions**

Run: `ls ~/affiliate-site/node_modules/next/dist/docs/` and read relevant files.

Also read `app/[category]/page.tsx` as a reference for how existing pages are structured (metadata, imports, layout pattern).

- [ ] **Step 2: Create app/about/page.tsx**

Page structure:
- Import `Header`, `Footer`, `OrganizationSchema`
- Metadata export: title "About Us | Trusted Scorecard", description about editorial independence
- Hero: "Independent Reviews You Can Trust" h1, mission statement paragraph
- Editorial Standards section: 3-column grid (How We Test, Editorial Independence, No Pay-to-Play)
- Expert Team grid: Card per persona with photo, name, title, credentials, specialty, article count. Use the existing `Author` data from each category config — import `getAllCategories` from `data/categories` and extract unique authors.
- Stats bar: 50+ Products Tested | 5,000+ Hours Research | 4 Categories | Updated Monthly
- Contact CTA section with link to /contact

- [ ] **Step 3: Create app/privacy-policy/page.tsx**

Professional privacy policy page. Import Header/Footer. Metadata with title "Privacy Policy | Trusted Scorecard". Content sections:
- Information We Collect (analytics via cookies, contact form data)
- How We Use Information
- Third-Party Links & Affiliate Relationships
- Cookies & Tracking
- Your Rights
- Contact Us (link to /contact)
- Last Updated: March 2026

Style: max-w-[var(--content-width)] container, prose-like typography with h2 section headers.

- [ ] **Step 4: Create app/terms/page.tsx**

Terms of service page. Same layout pattern. Sections:
- Acceptance of Terms
- Use of Site
- Affiliate Relationships & Advertising Disclosure
- Content Accuracy
- Limitation of Liability
- Intellectual Property
- Changes to Terms
- Contact
- Last Updated: March 2026

- [ ] **Step 5: Create app/contact/page.tsx**

Contact page using ContactForm component. Layout:
- Header + Footer
- H1: "Contact Us"
- Two-column on desktop: left = ContactForm, right = contact info cards (Editorial email, Business email, mailing address, response time)
- Single column on mobile

- [ ] **Step 6: Create app/methodology/page.tsx**

Methodology deep-dive page. Import `getAllCategories` from `data/categories` to pull `scoringCriteria` from each category.

Sections:
- H1: "Our Review Methodology"
- Intro paragraph about independence
- "How We Select Products" section
- "Our Testing Process" section with timeline
- Per-category scoring breakdown: for each category, show scoring criteria table (label, weight, description) pulled from `config.scoringCriteria`
- "Update Schedule" section — quarterly re-evaluation
- "Editorial Independence" statement
- Rating scale explanation (Exceptional 9.0+, Excellent 8.5+, etc.)

- [ ] **Step 7: Verify all pages render**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -30`

Expected: Build succeeds. All 5 new routes should appear in the build output.

- [ ] **Step 8: Commit**

```bash
cd ~/affiliate-site && git add app/about/ app/privacy-policy/ app/terms/ app/contact/ app/methodology/ && git commit -m "feat: add trust pages — about, privacy policy, terms, contact, methodology"
```

---

## Task 8: Update Disclosure Component

**Files:**
- Modify: `components/Disclosure.tsx`

- [ ] **Step 1: Update Disclosure.tsx**

Replace current wording and link target. New content:

```tsx
export default function Disclosure() {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-5 py-3">
      <div className="bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[var(--radius-md)] px-4 py-3 flex items-start gap-2.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--gray-400)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p className="text-[12px] text-[var(--gray-500)] leading-relaxed">
          Our editors independently test and rate products. We may earn a commission from links on this page, which doesn&apos;t influence our ratings.{" "}
          <a href="/methodology" className="text-[var(--primary)] font-medium hover:underline">
            How we make money
          </a>
        </p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd ~/affiliate-site && git add components/Disclosure.tsx && git commit -m "feat: update disclosure wording and link to /methodology"
```

---

## Task 9: Update Category Page Layout + Cleanup

**Files:**
- Modify: `app/[category]/page.tsx`
- Modify: `components/QuickCompare.tsx`
- Delete: `components/PromoBanner.tsx`

Move Disclosure to after hero (above first product), add Breadcrumbs, replace PromoBanner with EmailCapture in review loop. Fix QuickCompare to use `deal` instead of `discount`/`promoCode`. Delete deprecated PromoBanner.

- [ ] **Step 1: Read current category page**

Read `app/[category]/page.tsx` for current layout.

- [ ] **Step 2: Update imports and layout**

Changes:
1. Add `import Breadcrumbs from "@/components/Breadcrumbs";`
2. Remove `import PromoBanner from "@/components/PromoBanner";`
3. Move `<Disclosure />` to after `<RecommendationQuiz>` and before `<CategoryTopPicks>` — this places it directly above the first product cards, visible before any product is shown but after the quiz
4. Add `<Breadcrumbs items={[{ label: "Home", href: "/" }, { label: config.title }]} />` after `<Header />`
5. In the review products loop, replace the `PromoBanner` insertion with inline `EmailCapture`:

```tsx
{i === 2 && config.products.length > 3 && (
  <div className="my-6">
    <EmailCapture config={config} />
  </div>
)}
```

6. Remove the standalone `<EmailCapture>` from its current position (between TopPicks and Showcase)

- [ ] **Step 3: Delete PromoBanner.tsx**

```bash
rm ~/affiliate-site/components/PromoBanner.tsx
```

This file is no longer imported anywhere and references the removed `discount`/`promoCode` fields. Must be deleted to avoid compile errors.

- [ ] **Step 4: Update QuickCompare.tsx**

Read `components/QuickCompare.tsx`. Find all references to `product.discount` and `product.promoCode` and replace with `product.deal`:
- Where it renders `product.discount`, change to `product.deal?.text`
- Where it renders `product.promoCode`, change to `product.deal?.promoCode`
- Add null checks since `deal` is optional

- [ ] **Step 5: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
cd ~/affiliate-site && git add app/[category]/page.tsx components/QuickCompare.tsx && git rm components/PromoBanner.tsx && git commit -m "feat: move disclosure above products, add breadcrumbs, replace PromoBanner, update QuickCompare"
```

---

## Task 10: Update CategoryReview with New Components

**Files:**
- Modify: `components/CategoryReview.tsx`

Integrate ExpertTake, DealBadge, BestForBadge, ClickToCall. Remove inline discount/badge/phone rendering. Refine card styling.

- [ ] **Step 1: Read full CategoryReview.tsx**

Read the entire file to understand all inline rendering that needs extraction.

- [ ] **Step 2: Update imports**

Add:
```tsx
import ExpertTake from "./ExpertTake";
import DealBadge from "./DealBadge";
import BestForBadge from "./BestForBadge";
import ClickToCall from "./ClickToCall";
```

- [ ] **Step 3: Replace inline badge rendering**

Find the `bestFor`/`badge` section (around line 44-45) and replace with:
```tsx
<BestForBadge bestFor={product.bestFor} />
```

Remove the `badge` fallback logic entirely.

- [ ] **Step 4: Replace inline discount rendering**

Find the `discount`/`promoCode` section and replace with:
```tsx
{product.deal && <DealBadge deal={product.deal} />}
```

Remove all `product.discount` and `product.promoCode` references (promoCode can stay if still in types — check).

- [ ] **Step 5: Replace inline phone rendering**

Find the phone section and replace with:
```tsx
{product.phone && <ClickToCall phone={product.phone} productName={product.name} variant="prominent" />}
```

- [ ] **Step 6: Add ExpertTake section**

Before the closing `</a>` tag of the product card, add (needs to receive author info — pass it as a prop):

Update component signature to accept `authorName` and `authorPhoto`:
```tsx
export default function CategoryReview({
  product,
  rank,
  authorName,
  authorPhoto,
}: {
  product: Product;
  rank: number;
  authorName: string;
  authorPhoto: string;
})
```

**IMPORTANT:** The ExpertTake component contains interactive `<button>` elements and MUST NOT be nested inside the `<a>` tag (invalid HTML, accessibility violations). Restructure the card so that the `<a>` wrapper covers only the main card content, and ExpertTake renders AFTER the closing `</a>` tag but still visually inside the card container.

Pattern: Wrap everything in a `<div>` with the card styling, put the `<a>` tag inside for the clickable portion, then render ExpertTake as a sibling:

```tsx
<div className={`border border-[var(--gray-200)] bg-white shadow-sm rounded-[var(--radius-lg)] overflow-hidden ${isTopPick ? "ring-2 ring-[var(--gold)]" : ""}`}>
  {/* Top pick banner if applicable */}
  <a href={product.url} target="_blank" rel="noopener noreferrer nofollow" className="block hover:shadow-lg transition-all no-underline text-inherit">
    {/* ... all existing card content ... */}
  </a>
  {product.expertTake && (
    <ExpertTake
      content={product.expertTake}
      authorName={authorName}
      authorPhoto={authorPhoto}
    />
  )}
</div>
```

- [ ] **Step 7: Update card styling for premium feel**

- Increase padding from `px-4 sm:px-6 py-5` to `px-5 sm:px-8 py-6`
- Add `hover:-translate-y-0.5` to the card's hover transition
- Ensure `.card` class shadow transition is smooth

- [ ] **Step 8: Update category page to pass author props**

In `app/[category]/page.tsx`, update the CategoryReview usage:
```tsx
<CategoryReview
  product={product}
  rank={i + 1}
  authorName={config.author.name}
  authorPhoto={config.author.photo}
/>
```

- [ ] **Step 9: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

- [ ] **Step 10: Commit**

```bash
cd ~/affiliate-site && git add components/CategoryReview.tsx app/[category]/page.tsx && git commit -m "feat: integrate ExpertTake, DealBadge, BestForBadge, ClickToCall into CategoryReview"
```

---

## Task 11: Update CategoryTopPicks

**Files:**
- Modify: `components/CategoryTopPicks.tsx`

Replace inline discount/badge/phone with extracted components. Add Editor's Choice ribbon on #1.

- [ ] **Step 1: Update imports and replace inline code**

1. Import `DealBadge`, `BestForBadge`, `ClickToCall`
2. Replace `product.discount` rendering (lines 38-45) with `{product.deal && <DealBadge deal={product.deal} />}`
3. Replace `(product.bestFor || product.badge)` rendering (lines 20-23) with `<BestForBadge bestFor={product.bestFor} variant={i === 0 ? "gold" : "default"} />`
4. Replace inline phone link (lines 57-64) with `{product.phone && <ClickToCall phone={product.phone} productName={product.name} />}`
5. Add "Editor's Choice" ribbon to the #1 card — a small absolute-positioned badge at top-right:

```tsx
{i === 0 && (
  <div className="absolute -top-3 right-4 bg-[var(--success)] text-white text-[10px] font-bold px-2.5 py-1 rounded-[var(--radius-full)] shadow-sm flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" /></svg>
    Editor's Choice
  </div>
)}
```

- [ ] **Step 2: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
cd ~/affiliate-site && git add components/CategoryTopPicks.tsx && git commit -m "feat: update CategoryTopPicks with extracted components and Editor's Choice ribbon"
```

---

## Task 12: Footer Redesign

**Files:**
- Modify: `components/Footer.tsx`

4-column layout, all working links, trust badges row.

- [ ] **Step 1: Rewrite Footer.tsx**

Replace entire footer with 4-column layout. All `#` links become real routes. Add trust badges row above copyright.

Columns:
1. Categories: Identity Protection (/identity-protection), Business Formation (/business-formation), Online Therapy (/online-therapy), Website Builders (/website-builders)
2. Resources: Methodology (/methodology), FAQ (/methodology#faq — links to methodology page FAQ section), Newsletter (email capture anchor)
3. Legal: Privacy Policy (/privacy-policy), Terms of Service (/terms), Affiliate Disclosure (/methodology)
4. Company: About Us (/about), Contact (/contact), Editorial Standards (/about#standards)

Trust badges: "Independently Tested" | "CISSP-Certified Reviewers" | "Updated Monthly"

Keep existing branding section (logo + tagline) above the columns. Keep copyright + disclosure line below.

- [ ] **Step 2: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

- [ ] **Step 3: Commit**

```bash
cd ~/affiliate-site && git add components/Footer.tsx && git commit -m "feat: redesign footer — 4-column layout, working links, trust badges"
```

---

## Task 13: Header Upgrade

**Files:**
- Modify: `components/Header.tsx`

Shrink-on-scroll, category dropdown in nav.

- [ ] **Step 1: Read current Header.tsx**

Already read — it's a `"use client"` component with `useState` for mobile menu.

- [ ] **Step 2: Add scroll-based shrink behavior**

Add `useEffect` with scroll listener:
- Default height: `h-14`
- Scrolled (past 50px): `h-11` with smaller logo, transition animation
- Use `requestAnimationFrame` or passive scroll listener for performance

- [ ] **Step 3: Add category dropdown to nav**

Replace the static nav items with:
- "Categories" dropdown (hover/click) showing all 4 verticals with links to their pages
- Keep "Methodology" linking to /methodology
- Keep "About" linking to /about
- Add "Contact" linking to /contact

- [ ] **Step 4: Update mobile menu**

Add category links and trust page links to the mobile hamburger menu.

- [ ] **Step 5: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

- [ ] **Step 6: Commit**

```bash
cd ~/affiliate-site && git add components/Header.tsx && git commit -m "feat: header shrink-on-scroll and category dropdown navigation"
```

---

## Task 14: Visual Polish — globals.css + Comparison Table + EmailCapture

**Files:**
- Modify: `app/globals.css`
- Modify: `components/CategoryComparisonTable.tsx`
- Modify: `components/EmailCapture.tsx`
- Modify: `components/StickyMobileCTA.tsx`

- [ ] **Step 1: Update globals.css typography**

In `app/globals.css`:
- Change body `font-size: 16px` to `font-size: 17px` (line 82)
- Add to heading system:

```css
h1 { font-size: 2.5rem; } /* 40px */
h2 { font-size: 1.75rem; }
h3 { font-size: 1.25rem; }

@media (min-width: 768px) {
  h1 { font-size: 3rem; } /* 48px */
  h2 { font-size: 2rem; }
}
```

- Update `.card:hover` to add `transform: translateY(-2px)`:

```css
.card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border-color: var(--gray-300);
  transform: translateY(-2px);
}
```

- Add `.card` transition to include transform:

```css
.card {
  /* existing... */
  transition: box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}
```

- [ ] **Step 2: Read and update CategoryComparisonTable.tsx**

Read the current file, then update to Forbes Advisor style:
- Alternating row background: odd rows `bg-white`, even rows `bg-[var(--gray-50)]`
- Brand logos in column headers (use BrandLogo component)
- Boolean cells: green checkmark / red X icons
- Score cells: color-coded number (green 9+, blue 8+, orange 7+)
- Sticky first column on mobile: `position: sticky; left: 0; z-index: 10;` on the label column
- Winner column: subtle primary-light background tint on the highest-scoring product's column

- [ ] **Step 3: Update EmailCapture.tsx**

Read current file. Redesign to newsletter editorial style:
- Change heading from "Get Exclusive {category} Deals" to "Get our weekly picks and exclusive deals"
- Remove category-specific reference — make it universal
- Add social proof: "Join 10,000+ readers who trust our picks"
- Keep email-only input (already is)
- Clean card styling — lighter background, less aggressive than current blue block

- [ ] **Step 4: Polish StickyMobileCTA.tsx**

Read current file. Visual polish:
- Ensure touch target is 44px minimum
- Smooth slide-up animation
- Clean shadow and backdrop

- [ ] **Step 5: Verify build**

Run: `cd ~/affiliate-site && npm run build 2>&1 | tail -20`

- [ ] **Step 6: Commit**

```bash
cd ~/affiliate-site && git add app/globals.css components/CategoryComparisonTable.tsx components/EmailCapture.tsx components/StickyMobileCTA.tsx && git commit -m "feat: visual polish — typography, comparison table, email capture, mobile CTA"
```

---

## Task 15: CategoryHero Breadcrumb Integration

**Files:**
- Modify: `components/CategoryHero.tsx`

- [ ] **Step 1: Read CategoryHero.tsx**

Read current file.

- [ ] **Step 2: Verify breadcrumb placement works**

Breadcrumbs are added in the category page layout (Task 9), not inside CategoryHero itself. Verify the visual spacing between Breadcrumbs → Header → CategoryHero looks correct. If CategoryHero has top padding that creates too much space after breadcrumbs, reduce it.

- [ ] **Step 3: Commit (if changes needed)**

```bash
cd ~/affiliate-site && git add components/CategoryHero.tsx && git commit -m "fix: adjust CategoryHero spacing for breadcrumb integration"
```

---

## Task 16: Final Build + Verification

**Files:** None (verification only)

- [ ] **Step 1: Full production build**

Run: `cd ~/affiliate-site && npm run build`

Expected: Clean build with all new routes appearing:
- /about
- /privacy-policy
- /terms
- /contact
- /methodology
- /identity-protection
- /business-formation
- /online-therapy
- /website-builders

- [ ] **Step 2: Run linter**

Run: `cd ~/affiliate-site && npm run lint`

Expected: No errors (warnings acceptable).

- [ ] **Step 3: Verify all new pages are accessible**

Run dev server: `cd ~/affiliate-site && npm run dev &`

Then verify each new page returns 200:
```bash
for path in about privacy-policy terms contact methodology; do
  curl -s -o /dev/null -w "%{http_code} /$path\n" http://localhost:3000/$path
done
```

Expected: All return 200.

- [ ] **Step 4: Verify footer links work**

Check that footer renders with real links (not # anchors) by fetching the homepage and checking for link targets.

- [ ] **Step 5: Verify disclosure placement**

Load a category page and verify disclosure appears between hero and first product card (not buried mid-page).

- [ ] **Step 6: Verify score ranges**

Check that at least one product per category has a score below 8.5.

- [ ] **Step 7: Final commit (if any fixes needed)**

```bash
cd ~/affiliate-site && git add -A && git commit -m "fix: final verification fixes"
```

- [ ] **Step 8: Stop dev server**

```bash
kill %1 2>/dev/null
```
