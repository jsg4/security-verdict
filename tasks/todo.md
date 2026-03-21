# Multi-Category Affiliate Comparison Site — Architecture Plan

## Goal
Refactor Trusted Scorecard from a single identity-theft page into a multi-category platform.
Each category lives at its own URL (e.g., `/identity-protection`, `/credit-cards`, `/vpn`, `/insurance`)
and reuses the same battle-tested comparison template.

## Architecture

### Data Layer: `data/categories/[slug].ts`
Each category file exports a `CategoryConfig` with:
- **Category metadata**: title, slug, description, hero copy, accent color
- **Products**: array of products (same `Product` interface, extended with category-specific fields)
- **Testimonials**: array of testimonials specific to this category
- **FAQ**: array of FAQ Q&A pairs
- **Educational content**: sections of educational copy
- **Stats**: threat/urgency stats for the banner
- **Methodology**: scoring criteria and weights
- **Author**: author info for this category

### Routing: `app/[category]/page.tsx`
Single dynamic route that:
1. Reads the `[category]` param
2. Loads the matching category config from `data/categories/`
3. Passes all data to the same reusable components
4. Generates static paths via `generateStaticParams()`

### Homepage: `app/page.tsx`
Landing page showing all available categories with cards linking to each one.

### Components — Already Reusable (just need props)
- `Header` — add category nav dropdown
- `Hero` — accepts: title, subtitle, badges, author
- `SocialProof` — accepts: stats array
- `Disclosure` — generic, no changes
- `TopPicks` — already accepts products[]
- `ProductShowcase` — accepts: title, features, mockup config
- `DetailedReview` — already accepts product
- `ComparisonTable` — already accepts products[], needs configurable rows
- `ThreatBanner` — accepts: stats array, headline, CTA
- `TestimonialCarousel` — accepts: testimonials array
- `EducationalContent` — accepts: sections array
- `HowWeEvaluate` — accepts: criteria array
- `FAQ` — accepts: faq array
- `AuthorBio` — accepts: author object
- `Footer` — generic, no changes

### Comparison Table Rows — Category-Specific
Identity theft has: darkWebMonitoring, ssnMonitoring, creditLock, etc.
Credit cards has: annualFee, rewardsRate, signUpBonus, etc.
VPN has: serverCount, speed, noLogs, etc.

Solution: Each category config defines its own `comparisonRows` array specifying
which product fields to show and how to display them.

## Planned Categories

1. `/identity-protection` — current content (Aura, McAfee, LifeLock, etc.)
2. `/credit-cards` — travel, cashback, balance transfer cards
3. `/vpn` — NordVPN, Surfshark, ExpressVPN, etc.
4. `/insurance` — life, home, auto, pet insurance
5. `/antivirus` — McAfee, Norton, Bitdefender, etc.

## Implementation Steps

- [x] Write architecture plan
- [ ] Create `CategoryConfig` type in `data/types.ts`
- [ ] Refactor current identity-theft data into `data/categories/identity-protection.ts`
- [ ] Make all hardcoded components accept props (Hero, SocialProof, ThreatBanner, TestimonialCarousel, EducationalContent, HowWeEvaluate, FAQ, AuthorBio, ProductShowcase)
- [ ] Create `app/[category]/page.tsx` dynamic route
- [ ] Create category index for `app/page.tsx` homepage
- [ ] Update Header with category navigation
- [ ] Add `generateStaticParams()` for SSG
- [ ] Test build
- [ ] Push and verify
