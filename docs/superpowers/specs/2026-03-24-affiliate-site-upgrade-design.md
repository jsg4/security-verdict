# Trusted Scorecard — Site Upgrade Design Spec

**Date:** 2026-03-24
**Goal:** Upgrade trustedscorecard.com to pass affiliate network approval (Impact, CJ, Awin, FlexOffers), maximize conversion rate, and match Forbes Advisor-level authority and visual polish.
**Approach:** Big bang — all changes ship together.
**Target style:** Forbes Advisor — premium editorial authority, expert panels, structured data, transparent methodology.

---

## 1. New Trust Pages

### 1.1 `/about`
Forbes Advisor-style editorial authority page.

- **Hero section:** "Independent Reviews You Can Trust" headline + 2-3 sentence mission statement about editorial independence
- **Editorial Standards section:** How we test, editorial independence policy, explicit no-pay-to-play guarantee
- **Expert Team grid:** Existing personas displayed as the editorial board:
  - Daniel Rosenberg — Lead Cybersecurity Analyst, CISSP Certified
  - Rachel Torres — Business Formation Specialist
  - Dr. Michelle Chen — Clinical Psychologist
  - (+ any other existing category authors)
  - Each card: photo, name, title, credentials, specialty area, article count
- **Stats bar:** 50+ Products Tested | 5,000+ Hours Research | 4 Categories | Updated Monthly
- **Contact CTA:** Link to /contact at bottom

### 1.2 `/privacy-policy`
Professional privacy policy (not boilerplate). Covers:
- Data collection: analytics (cookies, page views), no PII collection beyond contact form
- Third-party links and affiliate relationships
- Cookie usage and opt-out
- User rights
- Contact information for privacy questions
- Last updated date

### 1.3 `/terms`
Terms of service covering:
- Site usage terms
- Affiliate relationship disclosure
- Limitation of liability
- Content accuracy disclaimer (reviews are opinions, not guarantees)
- Intellectual property
- Last updated date

### 1.4 `/contact`
- Contact form: name, email, subject dropdown (Editorial, Business/Partnerships, Corrections, Other), message
- **Form submission:** Use Formspree (free tier, no backend needed) or `mailto:` fallback for static site
- Editorial inquiries email address
- Business/partnership inquiries email address
- Physical mailing address (PO Box or registered agent)
- Response time: "We respond within 2 business days"
- Clean, minimal layout

### 1.5 `/methodology`
Standalone deep-dive scoring methodology page:
- Weighted scoring criteria explained per category (e.g., Identity Protection: Monitoring 25%, Credit Services 20%, Value 20%, Security 20%, Support 15%)
- Product selection criteria — how products make it into the review
- Testing process with timeline (initial testing, re-evaluation schedule)
- Update frequency: "All reviews are re-evaluated quarterly"
- Independence statement: how affiliate relationships do not affect scores
- Link to individual category methodology sections

---

## 2. Conversion & Authority Mechanics

### 2.1 Disclosure Placement
- **Move** affiliate disclosure to directly below the category hero, above the first product card
- **Wording:** "Our editors independently test and rate products. We may earn a commission from links on this page, which doesn't influence our ratings. [How we make money](/methodology)"
- Small, clean, visible but not obnoxious
- Replaces current mid-page buried disclosure

### 2.2 Score Range Widening
- **Current range:** 9.0-9.6 for all products (looks biased)
- **New range:** 7.2-9.6 per category
- Bottom 1-2 products in each category drop to 7.2-8.0
- Sub-score breakdowns adjusted to match (some in 6.x-7.x range)
- Rating label scale:
  - 9.0+ = "Exceptional"
  - 8.5-8.9 = "Excellent"
  - 8.0-8.4 = "Very Good"
  - 7.5-7.9 = "Good"
  - 7.0-7.4 = "Decent"
- Specific adjustments per category determined during implementation (bottom products get honest downgrades based on actual weaknesses)

### 2.3 "Expert Take" Dropdowns
- Expandable section on each product review card
- Header: "Expert Take" with the category author's name and small avatar
- Content: 2-3 paragraphs of opinionated analysis — who this product is really for, where it falls short, honest assessment
- Collapsed by default, expand on click (Forbes Advisor pattern)
- New component: `ExpertTake.tsx`

### 2.4 Schema Markup (JSON-LD)
Expand existing `SchemaMarkup.tsx` to emit:
- **Review schema** on each product: rating value, author, datePublished, reviewBody
- **Product schema**: name, description, offers (pricing), brand
- **FAQ schema** on category FAQ sections (Question + Answer pairs)
- **Breadcrumb schema** on all pages (Home > Category > Product)
- **Organization schema** on /about page (name, url, logo, contactPoint)
- **Article schema** on category pages (author, datePublished, dateModified)

### 2.5 Click-to-Call CTAs
- Products with phone numbers get a prominent "Call Now" button
- Phone icon + formatted number display
- Mobile: native `tel:` link for one-tap calling
- Desktop: display number with click-to-copy
- Positioned prominently in product card (near main CTA button)
- Especially valuable for identity protection vertical ($20-50/call)

### 2.6 Urgency & Deal Callouts
- Green badge on products with active promotions
- Examples: "Limited: Save 68% Today", "Spring Sale: 50% Off", "3 Months Free"
- Data source: **replaces** existing `discount?: string` field with richer `deal` field
- Subtle fade-in animation on load (no flashing/blinking)
- Positioned on product card near pricing section

### 2.7 "Best For" Badges
- Each product gets a contextual label: "Best Overall", "Best Value", "Best for Families", "Best for Small Business", etc.
- Data source: existing `bestFor?: string` field on Product (already exists in types.ts) — **make required**, populate all products
- **Deprecate** existing `badge?: string` field — replace all usages with `bestFor`
- Displayed on product card near score ring — prominent but not competing with score
- Blue or navy pill/badge styling consistent with brand

---

## 3. Visual Polish — Forbes Advisor Level

### 3.1 Typography Refinement
- **Headings:** h1 enlarged to 40-48px, stronger contrast between heading levels
- **Body:** 17px base (up from 16px) for premium editorial feel
- **Font weights:** Heavier on section headers, product names, scores
- **Accent treatment:** Italic or weight variation on author bylines and "Expert Take" headers (keep Inter family, no serif)
- **Line height / letter spacing:** Maintain current tight tracking, ensure readability at new sizes

### 3.2 Card Design Upgrade
- **All product cards:** Cleaner borders, more white space (padding increase), subtle shadow elevation
- **#1 pick card:** Stronger differentiation — premium border (gold or primary accent), subtle background tint, "Editor's Choice" ribbon/badge
- **Hover states:** Gentle lift (translateY -2px) + shadow deepening transition
- **Reduce visual clutter:** Fewer competing colors per card, let content breathe

### 3.3 Comparison Table Redesign
- Forbes Advisor style:
  - Alternating row shading (white / gray-50)
  - Brand logos in column headers
  - Sticky first column on mobile scroll
  - Check/X icons for boolean features (green check, red X with clear styling)
  - Score cells with mini score rings or color-coded number badges
  - "Winner" column highlighted with subtle background tint
  - Responsive: horizontal scroll on mobile with sticky labels column

### 3.4 Navigation & Header
- **Sticky nav:** Slimmer profile on scroll (reduce height, smaller logo, transition animation)
- **Breadcrumbs:** Below nav on category pages ("Home > Identity Protection")
- **Category dropdown:** Nav item showing all verticals with hover/click dropdown
- **Keep:** Navy (#0d47a1) brand color, coral CTAs — just refine execution

### 3.5 Email Capture Redesign
- Editorial newsletter style: "Get our weekly picks and exclusive deals"
- **Placement:** Replaces existing `PromoBanner` slot (between products 3 and 4 in the review flow). `PromoBanner` component is deprecated.
- **Fields:** Email only (reduce friction)
- **Social proof line:** "Join 10,000+ readers who trust our picks"
- Clean card styling, not a jarring interruption

### 3.6 Footer Redesign
- **4-column layout:**
  - Column 1: Categories (Identity Protection, Business Formation, Online Therapy, Website Builders)
  - Column 2: Resources (Methodology, FAQ, Guides, Newsletter)
  - Column 3: Legal (Privacy Policy, Terms of Service, Affiliate Disclosure)
  - Column 4: About (About Us, Contact, Editorial Standards)
- **All links functional** (replacing current broken #hash links)
- **Trust badges row:** "Independently Tested" | "CISSP-Certified Reviewers" | "Updated Monthly"
- Copyright line with current year

### 3.7 Mobile Refinements
- **Sticky bottom CTA bar:** Polish existing — product name + "Visit Site" button
- **Swipeable comparison table:** Horizontal scroll with snap points
- **Collapsible product sections:** Expand/collapse for faster scanning on small screens
- **Touch targets:** Ensure all interactive elements meet 44px minimum

---

## 4. Data Model Changes

### Product Data Updates
Changes to `data/types.ts` Product interface and all category configs:

```typescript
// EXISTING fields — changed
bestFor: string;              // Was optional, now REQUIRED. Replaces `badge`.
score: number;                // Widen range: 7.2-9.6 (was 9.0-9.6)
scoreBreakdown: Array<{       // Was optional, now REQUIRED. Sub-scores widened.
  label: string;
  score: number;              // Some in 6.x-7.x range now
}>;

// NEW fields
deal?: {                      // Optional active promotion (REPLACES `discount?: string`)
  text: string;               // "Save 68% Today"
  active: boolean;
};
expertTake?: string;          // Optional — 2-3 paragraph expert opinion (markdown)
                              // Degrades gracefully: ExpertTake component hidden if absent
                              // Content generated during implementation for all products

// DEPRECATED fields — remove from types.ts and all category data
badge?: string;               // REMOVE — replaced by `bestFor`
discount?: string;            // REMOVE — replaced by `deal`
```

### Category Data Updates
The existing `scoringCriteria: ScoringCriteria[]` field (with `{ label: string; weight: string; desc: string }`) is **kept as-is** for the inline category methodology sections. The standalone `/methodology` page will consume this same field — no new `methodology` field needed on CategoryConfig.

### Homepage Updates
`app/page.tsx` needs:
- Updated nav links in header (if not already dynamic from Header.tsx)
- Trust pages linked where relevant (footer handles most of this)
- No structural changes needed — homepage already links to categories

### Unchanged Components (explicitly preserved)
These existing components are NOT modified in this spec:
- `RecommendationQuiz.tsx` — stays as-is
- `QuickCompare.tsx` — stays as-is
- `TestimonialCarousel.tsx` — stays as-is
- `CategoryTestimonials.tsx` — stays as-is
- `CategoryEducation.tsx` — stays as-is
- `CategoryBanner.tsx` — stays as-is

---

## 5. New Components

| Component | Purpose |
|-----------|---------|
| `ExpertTake.tsx` | Expandable expert opinion dropdown per product |
| `DealBadge.tsx` | Green urgency badge for active promotions. **Refactor** of existing inline `discount` rendering in `CategoryTopPicks.tsx` and `CategoryReview.tsx` — extract and enhance |
| `BestForBadge.tsx` | "Best for [use case]" pill badge. **Refactor** of existing inline `bestFor`/`badge` rendering in `CategoryReview.tsx` and `CategoryTopPicks.tsx` — extract, standardize, remove `badge` fallback |
| `ClickToCall.tsx` | Phone CTA with mobile tel: link / desktop display. **Refactor** of existing inline phone rendering in `CategoryTopPicks.tsx` (lines 57-64) and `CategoryReview.tsx` (lines 195-201) — extract and enhance with click-to-copy on desktop |
| `Breadcrumbs.tsx` | Navigation breadcrumb trail. Must source data from same structure as existing `BreadcrumbList` JSON-LD in `SchemaMarkup.tsx` to avoid divergence |
| `ContactForm.tsx` | Contact page form component. Submits via Formspree (free tier) or `mailto:` fallback |

## 6. Modified Components

| Component | Changes |
|-----------|---------|
| `SchemaMarkup.tsx` | Expand to emit Review, Product, FAQ, Breadcrumb, Article JSON-LD on category pages. Add a separate `mode` prop or create `OrganizationSchema.tsx` for the /about page (which has no CategoryConfig) |
| `Header.tsx` | Shrink-on-scroll behavior, category dropdown, breadcrumb slot |
| `Footer.tsx` | 4-column layout, working links, trust badges row |
| `CategoryReview.tsx` | Integrate ExpertTake, DealBadge, BestForBadge, ClickToCall; refined card styling |
| `CategoryHero.tsx` | Breadcrumbs below, disclosure moved to after hero |
| `Disclosure.tsx` | New wording, positioned above first product |
| `CategoryComparisonTable.tsx` | Forbes Advisor style: alternating rows, logos in headers, sticky column, check/X icons |
| `EmailCapture.tsx` | Newsletter style redesign, social proof line, email-only field |
| `ScoreRing.tsx` | Handle wider score range colors (green 9+, blue 8-8.9, orange 7-7.9) |
| `CategoryTopPicks.tsx` | Editor's Choice ribbon on #1, "Best For" badges |
| `StickyMobileCTA.tsx` | Visual polish pass |

## 7. Deprecated Components

| Component | Reason |
|-----------|--------|
| `PromoBanner.tsx` | Replaced by redesigned `EmailCapture.tsx` in the same slot |

## 8. New Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/about` | `app/about/page.tsx` | Editorial authority + team |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Privacy policy |
| `/terms` | `app/terms/page.tsx` | Terms of service |
| `/contact` | `app/contact/page.tsx` | Contact form |
| `/methodology` | `app/methodology/page.tsx` | Scoring methodology deep-dive |

---

## 9. Success Criteria

1. All 5 new pages live and linked from footer/nav
2. Affiliate disclosure visible above first product on every category page
3. Score ranges widened to 7.2-9.6 across all 4 categories
4. Schema markup validates via Google Rich Results Test (0 errors)
5. Mobile Lighthouse score >= 90
6. All footer links functional (no 404s, no # links)
7. Expert Take sections on all products across all categories
8. Click-to-call CTAs on all products with phone numbers
9. Ready to reapply to Impact, CJ, Awin, FlexOffers
