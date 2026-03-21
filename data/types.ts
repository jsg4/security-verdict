export interface Product {
  slug: string;
  name: string;
  logo: string;
  logoColor: string;
  score: number;
  stars: number;
  reviewCount: string;
  ratingLabel: string;
  discount?: string;
  badge?: string;
  tagline: string;
  url: string;
  ctaText: string;
  monthlyPrice: string;
  annualPrice: string;
  annualMonthly: string;
  freeTrial: string;
  moneyBack: string;
  pros: { text: string; icon: string }[];
  cons: { text: string; icon: string }[];
  review: string;
  features: { label: string; value: string }[];
  productImage?: string;
  productImageAlt?: string;
  // Dynamic spec fields — each category defines which ones to use
  specs: Record<string, string | boolean | number>;
}

export interface ComparisonRow {
  label: string;
  key: string; // maps to product.specs[key]
  type: "boolean" | "text" | "score" | "price";
}

export interface Testimonial {
  name: string;
  photo: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  product: string;
  timeAgo: string;
  verified: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface StatItem {
  stat: string;
  label: string;
  icon: string;
}

export interface ScoringCriteria {
  label: string;
  weight: string;
  desc: string;
}

export interface EducationalSection {
  title: string;
  content: string;
  type: "text" | "types" | "warning" | "cta";
  items?: { title: string; desc: string; icon: string }[];
  warnings?: string[];
}

export interface Author {
  name: string;
  photo: string;
  title: string;
  bio: string;
  credentials: { icon: string; label: string }[];
}

export interface ShowcaseFeature {
  title: string;
  desc: string;
  icon: string;
}

export interface CategoryConfig {
  // Routing & SEO
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;

  // Hero
  heroLabel: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroBadges: string[];

  // Social proof stats
  stats: StatItem[];
  referencedBy: string[];

  // Products
  products: Product[];

  // Comparison table
  comparisonRows: ComparisonRow[];

  // Showcase section
  showcaseLabel: string;
  showcaseTitle: string;
  showcaseSubtitle: string;
  showcaseFeatures: ShowcaseFeature[];

  // Threat/urgency banner
  bannerTitle: string;
  bannerSubtitle: string;
  bannerStats: StatItem[];

  // Testimonials
  testimonials: Testimonial[];

  // Educational content
  educationalTitle: string;
  educationalSections: EducationalSection[];

  // Methodology
  scoringCriteria: ScoringCriteria[];

  // FAQ
  faqs: FAQItem[];

  // Author
  author: Author;
}
