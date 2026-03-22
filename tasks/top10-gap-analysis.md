# Top10.com Deep Gap Analysis — Trust, Authority & CRO

**Date:** March 22, 2026
**Focus:** Specific UI patterns from top10.com that Trusted Scorecard should implement for maximum trust, authority, and conversion rate optimization.

---

## CRITICAL GAPS (Ranked by Conversion Impact)

### 1. STICKY SIDEBAR WITH CTA (Review Pages)
**What top10 does:** On individual review pages, they have a **sticky desktop sidebar** containing:
- Product logo
- Starting price ("From $16/month")
- Key feature highlights (Free Version: Yes, SEO Features: Yes)
- "Visit Site" CTA button that follows you as you scroll

**What we do:** No sidebar. Single CTA at the bottom of each review card.

**Impact:** HIGH — sidebar keeps the CTA visible during the entire scroll, dramatically increasing click-through. Users reading a 5-section review always see the "Visit Site" button.

**Implementation:**
- Add a sticky sidebar component to CategoryReview on desktop (lg:grid-cols-[1fr_280px])
- Contains: BrandLogo, price, 3-4 key specs, "Visit Site" CTA
- On mobile: collapses into a sticky bottom bar with price + CTA

---

### 2. VISITOR COUNTER ("7,647 people visited this site this week")
**What top10 does:** Shows a live-looking visitor counter on the #1 product card: "**7,647** people visited this site this week" with a subtle animation delay.

**What we do:** Nothing.

**Impact:** HIGH — social proof through implied popularity. Creates FOMO and validates the user's consideration of that product.

**Implementation:**
- Add `weeklyVisitors` field to Product type (string like "7,647")
- Display on top 1-2 products only (scarcity of the signal makes it more believable)
- Subtle gray text below CTA: "X,XXX people visited this site this week"
- CSS animation: fade-in after 2s delay to feel "live"

---

### 3. REVIEW COUNTS FROM EXTERNAL SOURCES
**What top10 does:** Displays actual review counts per product pulled from external platforms:
- Wix: "26,707 reviews"
- GoDaddy: "134,789 reviews"
- Hostinger: "64,580 reviews"

These are massive social proof numbers that our "2,847 reviews" feel weak against.

**What we do:** Generic review counts that appear to be internal.

**Impact:** HIGH — external review counts from Trustpilot/G2/App Store are orders of magnitude more credible than proprietary counts.

**Implementation:**
- Add `externalReviewCount` and `externalReviewSource` to Product type
- Display as: "26,707 reviews on Trustpilot" with Trustpilot logo mini-icon
- Source these from actual Trustpilot/G2 page counts (public data)

---

### 4. USE-CASE TABS / CATEGORY FILTERS
**What top10 does:** Horizontal scrollable tabs above the product list:
"Website Builders | Small Business | AI | Easy to Create | Blog Builders"

Each tab filters/reorders the product list for that use case.

**What we do:** Single flat list of all products.

**Impact:** MEDIUM-HIGH — helps users self-segment, reducing decision fatigue. Also captures more long-tail keywords per page.

**Implementation:**
- Add `useCaseTabs` array to CategoryConfig: `[{ label: "All", filter: "all" }, { label: "Best for Families", filter: "family" }, ...]`
- Add `useCases` string array to Product (e.g., ["family", "budget", "comprehensive"])
- Client-side filtering — tabs re-sort/highlight products matching the use case

---

### 5. PROMOTIONAL BANNERS BETWEEN PRODUCT CARDS
**What top10 does:** Between product #3 and #4, they insert a **full-width promotional banner** for a specific product (e.g., Squarespace with "Save 10% with code TOP10").

**What we do:** No interstitial content between review cards.

**Impact:** MEDIUM-HIGH — breaks up the scroll, highlights a deal, and creates a second conversion path for users who scrolled past the top picks.

**Implementation:**
- Add an optional `interstitialAfter` field to CategoryConfig (number — insert after Nth product)
- Component: PromoCard with deal image, discount code, and CTA
- Initially can be a "Don't miss this deal" callout for the #1 product

---

### 6. COUPON/PROMO CODES DISPLAYED ON CARDS
**What top10 does:** Shows actual promo codes directly on product cards:
- "Get 10% off with the code: **TOP10OFFER**"
- "Save 10% with code **TOP10**"

The codes are shown in **bold** inline with benefit bullets.

**What we do:** Generic discount text ("Save up to 68%") with no actionable code.

**Impact:** MEDIUM-HIGH — promo codes create a sense of exclusive access and urgency. Users feel they're getting a special deal through our site.

**Implementation:**
- Add `promoCode` field to Product type (optional string)
- Display in the discount callout area: "Get 10% off with code: **TOP10**"
- Make the code appear copyable (click to copy with tooltip)

---

### 7. "OUR RECOMMENDATION" / "TOP PICK" RIBBON BADGE
**What top10 does:** The #1 product gets a distinctive green "Our Recommendation" or "Top Site Builder" ribbon badge that visually separates it from all others. The card is also larger with more padding.

**What we do:** We have badges ("Best Overall") but they're small pill badges, not prominent ribbons. The #1 card has a gold border but isn't dramatically larger.

**Impact:** MEDIUM — creates clear visual hierarchy. Users scanning quickly can immediately see the recommendation.

**Implementation:**
- Make the #1 product card 20% larger with a full-width green ribbon banner across the top
- Ribbon text: "Our Recommendation" or "Editor's Choice"
- Larger padding, more prominent score display
- Different background color (very subtle green tint)

---

### 8. EXPERT TEAM SECTION
**What top10 does on homepage:** Named experts with photos, titles, and credentials:
- "Katherine Cullen, Licensed Clinical Social Worker"
- "Cassidy Horton, Personal Finance Expert"

Positioned as "Our Experts" section.

**What we do:** Single author per category page. No "team" presentation.

**Impact:** MEDIUM — shows organizational depth beyond a single reviewer.

**Implementation:**
- Add "Our Expert Team" section to homepage below categories
- Show 4-5 experts with photos, names, titles, credentials
- Link each to their relevant category pages

---

### 9. SCORE BREAKDOWN (Sub-Ratings)
**What top10 does on review pages:** Overall score PLUS sub-category breakdown:
- Editor Score: 9.5
- Easy-to-use: 10.0
- Website Packages: 9.5
- Reliability: 9.0
- Customer Service: 10.0
- Integrations: 9.0

**What we do:** Single overall score (9.6/10) with no breakdown.

**Impact:** MEDIUM — sub-scores add credibility and specificity. Users see the score is data-driven, not arbitrary.

**Implementation:**
- Add `scoreBreakdown` to Product: `[{ label: "Features", score: 9.5 }, ...]`
- Display as horizontal bar chart or mini score rings in the review header
- Matches our methodology criteria (5 categories with weights)

---

### 10. MULTIPLE CTA PLACEMENTS PER REVIEW
**What top10 does:** 4 "Visit Site" buttons per review:
1. Hero/header section
2. Sticky sidebar (desktop)
3. After pros/cons section
4. Bottom of review

**What we do:** 1 CTA at the bottom of each review card (the entire card is also a link, but users don't always realize that).

**Impact:** MEDIUM — more CTAs = more opportunities to convert. The key is the mid-content CTA after pros/cons when buying intent peaks.

**Implementation:**
- Add a mid-content CTA bar between pros/cons and the review text
- Styled as: "Ready to get started? → Visit Site" with coral button
- Keeps the bottom CTA as the closing action

---

### 11. AGGREGATE TRUST METRICS ON HOMEPAGE
**What top10 does:**
- "500+ Comparison Lists"
- "5,000+ Hours of Research"
- "16M+ Decisions made with Top10.com"

**What we do:** "50+ Products Tested | 500+ Hours | 100K+ Readers"

**Impact:** MEDIUM — our numbers are solid but the "16M+ decisions" framing is more powerful than "100K+ readers" because it implies ongoing utility, not just pageviews.

**Implementation:**
- Reframe as: "Helping X readers make smarter decisions"
- Consider adding a real-time counter animation (counting up to the number)

---

### 12. STICKY BOTTOM BAR ON MOBILE
**What top10 does:** Fixed header stays visible on scroll. No floating bottom CTA.

**What we SHOULD do (they don't but it's proven):** Add a sticky bottom bar on mobile that appears after scrolling past the first product. Shows: "[Product Logo] | $X/mo | Visit Site →"

**Impact:** MEDIUM — mobile users lose the CTA as they scroll through long review content. A sticky bottom bar keeps conversion accessible.

**Implementation:**
- Client component that shows/hides based on scroll position
- Only appears after scrolling past the Top Picks section
- Shows the #1 product with price and CTA

---

## SUMMARY: IMPLEMENTATION PRIORITY

| # | Feature | Impact | Effort | Priority |
|---|---------|--------|--------|----------|
| 1 | Sticky sidebar with CTA (desktop) | HIGH | Medium | **Week 1** |
| 2 | Visitor counter on top product | HIGH | Low | **Week 1** |
| 3 | External review counts (Trustpilot/G2) | HIGH | Low | **Week 1** |
| 4 | Use-case tabs/filters | MED-HIGH | Medium | **Week 1** |
| 5 | Promo banners between cards | MED-HIGH | Low | **Week 1** |
| 6 | Promo codes on product cards | MED-HIGH | Low | **Week 1** |
| 7 | Larger #1 product with ribbon | MEDIUM | Low | **Week 1** |
| 8 | Expert team section (homepage) | MEDIUM | Low | **Week 2** |
| 9 | Score breakdown sub-ratings | MEDIUM | Medium | **Week 2** |
| 10 | Mid-content CTA after pros/cons | MEDIUM | Low | **Week 2** |
| 11 | Aggregate trust metric reframing | MEDIUM | Low | **Week 2** |
| 12 | Sticky mobile bottom CTA bar | MEDIUM | Medium | **Week 2** |

---

## WHAT TOP10 DOES NOT DO (Our Advantages to Keep)

1. **No email capture** — We should add this (they don't have it either, but it's a missed opportunity for both)
2. **No quiz/recommendation funnels** — Massive opportunity for both, but we can build first
3. **No detailed methodology pages** — Our methodology sections are more transparent
4. **No author social verification** — Neither site links to LinkedIn/Twitter for author verification
5. **No head-to-head comparison pages** — Neither has "X vs Y" pages
6. **No schema markup for reviews** — top10 has FAQ schema but not Review/Product schema

These are areas where we can leapfrog top10.com rather than just catching up.
