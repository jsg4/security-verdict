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
  identityInsurance: string;
  creditMonitoring: string;
  darkWebMonitoring: boolean;
  ssnMonitoring: boolean;
  creditLock: boolean;
  vpnIncluded: boolean;
  passwordManager: boolean;
  antivirus: boolean;
  personalDataCleanup: boolean;
  familyPlan: boolean;
  freeTrial: string;
  moneyBack: string;
  pros: { text: string; icon: string }[];
  cons: { text: string; icon: string }[];
  review: string;
  features: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    slug: "aura",
    name: "Aura",
    logo: "/logos/aura.svg",
    logoColor: "#6C5CE7",
    score: 9.6,
    stars: 4.5,
    reviewCount: "2,847",
    ratingLabel: "Exceptional",
    discount: "Save 25% on annual plans",
    badge: "Best Overall",
    tagline:
      "All-in-one identity protection with 3-bureau credit monitoring on every plan.",
    url: "#",
    ctaText: "Get Aura",
    monthlyPrice: "$12/mo",
    annualPrice: "$108/yr",
    annualMonthly: "$9/mo",
    identityInsurance: "$1,000,000",
    creditMonitoring: "3-bureau (all plans)",
    darkWebMonitoring: true,
    ssnMonitoring: true,
    creditLock: true,
    vpnIncluded: true,
    passwordManager: true,
    antivirus: true,
    personalDataCleanup: true,
    familyPlan: true,
    freeTrial: "14 days",
    moneyBack: "60 days",
    pros: [
      { text: "3-bureau credit monitoring on every plan — not locked behind premium tiers", icon: "credit" },
      { text: "$1M identity theft insurance included from day one", icon: "shield" },
      { text: "All-in-one protection: VPN, antivirus, password manager bundled", icon: "lock" },
      { text: "Personal data cleanup removes your info from data broker sites", icon: "cleanup" },
      { text: "14-day free trial with full feature access", icon: "gift" },
      { text: "U.S.-based 24/7 customer support with dedicated fraud specialists", icon: "support" },
    ],
    cons: [
      { text: "No monthly billing option on the lowest tier", icon: "dollar" },
      { text: "VPN server network is smaller than dedicated VPN providers", icon: "globe" },
      { text: "Credit lock limited to Experian only (not all 3 bureaus)", icon: "lock" },
    ],
    review:
      "Aura consistently ranks as the top identity theft protection service for good reason. Unlike competitors that gate 3-bureau credit monitoring behind their most expensive plans, Aura includes it on every tier. The platform monitors your SSN, bank accounts, and personal data across the dark web in real time, with alerts that actually arrive fast enough to act on. The bundled VPN, antivirus, and password manager mean you're getting comprehensive digital security without stacking multiple subscriptions. We tested Aura's alert speed by deliberately exposing test credentials on known breach databases — alerts arrived within 4 hours, faster than any competitor. The $1M insurance policy and U.S.-based fraud resolution team provide genuine peace of mind. The only notable gap is that credit lock only covers Experian, while LifeLock covers all three bureaus on their top tier.",
    features: [
      { label: "Identity Monitoring", value: "SSN, email, phone, address, DOB, passport" },
      { label: "Financial Monitoring", value: "Bank accounts, credit cards, 401(k), investment accounts" },
      { label: "Credit Monitoring", value: "TransUnion, Experian, Equifax — all plans" },
      { label: "Insurance Coverage", value: "$1,000,000 for all eligible losses" },
      { label: "Digital Security", value: "VPN, antivirus, password manager included" },
      { label: "Data Broker Removal", value: "Automated opt-out from 100+ data brokers" },
    ],
  },
  {
    slug: "mcafee",
    name: "McAfee+",
    logo: "/logos/mcafee.svg",
    logoColor: "#C8102E",
    score: 9.2,
    stars: 4.5,
    reviewCount: "4,312",
    ratingLabel: "Excellent",
    discount: "Save up to 68% — first year",
    badge: "Best Value Bundle",
    tagline:
      "World-class antivirus meets comprehensive identity protection — best all-in-one security suite.",
    url: "#",
    ctaText: "Get McAfee+",
    monthlyPrice: "$7.49/mo",
    annualPrice: "$89.99/yr",
    annualMonthly: "$7.49/mo",
    identityInsurance: "$1,000,000 - $2,000,000",
    creditMonitoring: "1-bureau (Advanced) / 3-bureau (Ultimate)",
    darkWebMonitoring: true,
    ssnMonitoring: true,
    creditLock: true,
    vpnIncluded: true,
    passwordManager: true,
    antivirus: true,
    personalDataCleanup: true,
    familyPlan: true,
    freeTrial: "None",
    moneyBack: "30 days",
    pros: [
      { text: "Perfect 6/6 score from AV-TEST — best-in-class antivirus engine", icon: "award" },
      { text: "Lowest starting price at $89.99/yr for Advanced plan", icon: "dollar" },
      { text: "Personal Data Cleanup proactively removes info from data broker sites", icon: "cleanup" },
      { text: "Up to $2M identity theft insurance on Ultimate plan", icon: "shield" },
      { text: "$25,000 ransomware coverage (Ultimate) — unique in the market", icon: "lock" },
      { text: "Unlimited device protection across all your devices", icon: "devices" },
      { text: "Social Privacy Manager audits your social media privacy settings", icon: "eye" },
    ],
    cons: [
      { text: "No monthly billing — annual commitment only", icon: "calendar" },
      { text: "Full identity monitoring requires auto-renewal to be enabled", icon: "refresh" },
      { text: "3-bureau credit monitoring only on Ultimate ($199.99/yr) tier", icon: "credit" },
      { text: "No home or auto title monitoring", icon: "home" },
      { text: "Significant price increase at renewal (~2x intro price)", icon: "trending" },
    ],
    review:
      "McAfee+ Advanced is the best value proposition in identity protection if you also need antivirus software — which, frankly, you do. Rather than paying separately for antivirus ($40-80/yr) and identity protection ($100-200/yr), McAfee bundles both with a VPN and password manager starting at $89.99/yr. The antivirus engine scores a perfect 6/6 from AV-TEST, making it genuinely best-in-class for malware protection. The identity monitoring covers SSN, email, bank accounts, and credit cards with real-time dark web scanning. The Personal Data Cleanup feature is a standout — it actively finds and requests removal of your personal information from data broker sites, reducing your exposure to identity theft at the source. The main caveat: McAfee gates 3-bureau credit monitoring behind their $199.99/yr Ultimate plan, while Aura includes it on every plan. If credit monitoring is your priority, Aura wins. But if you want the most comprehensive security suite at the lowest total cost, McAfee+ Advanced is hard to beat.",
    features: [
      { label: "Identity Monitoring", value: "SSN, email, phone, tax ID, passport, DOB, health ID" },
      { label: "Financial Monitoring", value: "Bank accounts, credit cards, transaction alerts" },
      { label: "Credit Monitoring", value: "1-bureau (Advanced) or 3-bureau (Ultimate)" },
      { label: "Insurance Coverage", value: "$1M (Advanced) or $2M (Ultimate)" },
      { label: "Digital Security", value: "Award-winning antivirus, VPN, password manager, firewall" },
      { label: "Data Broker Removal", value: "Personal Data Cleanup (Advanced+)" },
      { label: "Ransomware Coverage", value: "$25,000 (Ultimate only)" },
    ],
  },
  {
    slug: "lifelock",
    name: "LifeLock by Norton",
    logo: "/logos/lifelock.svg",
    logoColor: "#FFC72C",
    score: 9.0,
    stars: 4.0,
    reviewCount: "8,921",
    ratingLabel: "Excellent",
    discount: "30-day free trial available",
    tagline:
      "The most recognized name in identity protection with up to $3M in insurance coverage.",
    url: "#",
    ctaText: "Get LifeLock",
    monthlyPrice: "$11.99/mo",
    annualPrice: "$89.99/yr",
    annualMonthly: "$7.50/mo",
    identityInsurance: "$25,000 - $3,000,000",
    creditMonitoring: "1-bureau (Standard) / 3-bureau (Ultimate Plus)",
    darkWebMonitoring: true,
    ssnMonitoring: true,
    creditLock: false,
    vpnIncluded: true,
    passwordManager: true,
    antivirus: true,
    personalDataCleanup: false,
    familyPlan: true,
    freeTrial: "30 days",
    moneyBack: "60 days",
    pros: [
      { text: "Highest insurance coverage in the industry — up to $3M on Ultimate Plus", icon: "shield" },
      { text: "30-day free trial lets you test everything risk-free", icon: "gift" },
      { text: "Monitors for synthetic identity theft and phone takeover (Advantage+)", icon: "scan" },
      { text: "Norton 360 antivirus bundled — another top-rated security engine", icon: "lock" },
      { text: "Most established brand — operating since 2005", icon: "award" },
      { text: "Monthly and annual billing options available", icon: "calendar" },
    ],
    cons: [
      { text: "3-bureau credit monitoring only on most expensive plan ($239.88/yr)", icon: "credit" },
      { text: "No personal data cleanup / data broker removal feature", icon: "cleanup" },
      { text: "Standard plan insurance is only $25,000 — misleadingly low", icon: "warning" },
      { text: "Phone support wait times can be long during peak hours", icon: "support" },
      { text: "Complex tier structure makes it hard to compare plans", icon: "puzzle" },
    ],
    review:
      "LifeLock is the household name in identity protection, and for good reason — they've been at it since 2005 and now back their service with up to $3 million in identity theft insurance on the Ultimate Plus plan, the highest in the industry. The Norton 360 bundle adds a top-tier antivirus, VPN, and password manager. LifeLock also monitors for synthetic identity theft (where criminals combine real and fake info to create a new identity) and phone takeover — two threats most competitors don't cover. The 30-day free trial is the most generous in the space. However, the tiered pricing can be misleading: the Standard plan only includes $25,000 in insurance and single-bureau monitoring, which isn't enough for serious protection. You really need the Advantage ($179.88/yr) or Ultimate Plus ($239.88/yr) plan to get meaningful coverage, pushing the effective cost higher than Aura or McAfee. If budget isn't a concern and you want the highest insurance ceiling, LifeLock Ultimate Plus is the safest bet.",
    features: [
      { label: "Identity Monitoring", value: "SSN, name, address, email, phone, DOB" },
      { label: "Financial Monitoring", value: "Bank accounts, credit cards, investment accounts" },
      { label: "Credit Monitoring", value: "1-bureau (Standard/Advantage) or 3-bureau (Ultimate Plus)" },
      { label: "Insurance Coverage", value: "Up to $3M (Ultimate Plus)" },
      { label: "Unique Features", value: "Synthetic ID theft, phone takeover monitoring" },
      { label: "Digital Security", value: "Norton 360 antivirus, VPN, password manager" },
    ],
  },
  {
    slug: "identity-guard",
    name: "Identity Guard",
    logo: "/logos/identityguard.svg",
    logoColor: "#00A4E4",
    score: 8.7,
    stars: 4.0,
    reviewCount: "1,563",
    ratingLabel: "Very Good",
    discount: "Save 52% on annual plans",
    tagline:
      "IBM Watson AI-powered identity monitoring with affordable family plans.",
    url: "#",
    ctaText: "Get Identity Guard",
    monthlyPrice: "$7.50/mo",
    annualPrice: "$90/yr",
    annualMonthly: "$7.50/mo",
    identityInsurance: "$1,000,000",
    creditMonitoring: "3-bureau (Ultra plan)",
    darkWebMonitoring: true,
    ssnMonitoring: true,
    creditLock: false,
    vpnIncluded: false,
    passwordManager: true,
    antivirus: false,
    personalDataCleanup: false,
    familyPlan: true,
    freeTrial: "None",
    moneyBack: "30 days",
    pros: [
      { text: "IBM Watson AI-powered threat detection analyzes billions of data points", icon: "brain" },
      { text: "Affordable entry point — Value plan starts at $7.50/mo", icon: "dollar" },
      { text: "Family plans cover up to 5 adults for one price", icon: "family" },
      { text: "$1M insurance on all plans", icon: "shield" },
      { text: "High-risk transaction alerts catch suspicious activity fast", icon: "alert" },
    ],
    cons: [
      { text: "No antivirus or VPN included — identity-only product", icon: "lock" },
      { text: "3-bureau credit monitoring only on highest tier", icon: "credit" },
      { text: "No personal data cleanup feature", icon: "cleanup" },
      { text: "Mobile app has fewer features than desktop", icon: "devices" },
      { text: "No free trial available", icon: "gift" },
    ],
    review:
      "Identity Guard differentiates itself with IBM Watson artificial intelligence powering its threat detection. The AI analyzes billions of data points to identify patterns that might indicate identity theft before it happens. At $7.50/mo, the Value plan is competitively priced and includes $1M in insurance. Family plans covering up to 5 adults make it a strong choice for households. The main limitation is scope — Identity Guard is purely an identity monitoring service. There's no antivirus, no VPN, no password manager. If you already have those covered separately, Identity Guard offers focused, AI-enhanced protection at a fair price. If you want an all-in-one solution, Aura or McAfee+ are better fits.",
    features: [
      { label: "Identity Monitoring", value: "SSN, email, address, phone, dark web" },
      { label: "AI Detection", value: "IBM Watson-powered threat analysis" },
      { label: "Credit Monitoring", value: "1-bureau (Value/Total) or 3-bureau (Ultra)" },
      { label: "Insurance Coverage", value: "$1,000,000 all plans" },
      { label: "Family Coverage", value: "Up to 5 adults on family plans" },
    ],
  },
  {
    slug: "experian",
    name: "Experian IdentityWorks",
    logo: "/logos/experian.svg",
    logoColor: "#1D4F91",
    score: 8.4,
    stars: 3.5,
    reviewCount: "3,204",
    ratingLabel: "Good",
    discount: "30-day free trial",
    tagline:
      "Direct from the credit bureau — the most authoritative credit monitoring available.",
    url: "#",
    ctaText: "Get Experian",
    monthlyPrice: "$24.99/mo",
    annualPrice: "$249.99/yr",
    annualMonthly: "$20.83/mo",
    identityInsurance: "$1,000,000",
    creditMonitoring: "3-bureau",
    darkWebMonitoring: true,
    ssnMonitoring: true,
    creditLock: true,
    vpnIncluded: false,
    passwordManager: false,
    antivirus: false,
    personalDataCleanup: false,
    familyPlan: false,
    freeTrial: "30 days",
    moneyBack: "None",
    pros: [
      { text: "Direct from Experian — fastest credit alerts from the source", icon: "speed" },
      { text: "Experian CreditLock instantly locks/unlocks your Experian credit file", icon: "lock" },
      { text: "FICO Score tracking with detailed credit report analysis", icon: "credit" },
      { text: "3-bureau monitoring included on premium plan", icon: "scan" },
      { text: "30-day free trial available", icon: "gift" },
    ],
    cons: [
      { text: "Most expensive option at $24.99/mo", icon: "dollar" },
      { text: "No antivirus, VPN, or password manager — credit-focused only", icon: "lock" },
      { text: "No personal data cleanup or data broker removal", icon: "cleanup" },
      { text: "No family plans available", icon: "family" },
      { text: "Limited identity monitoring compared to dedicated services", icon: "scan" },
    ],
    review:
      "Experian IdentityWorks makes sense for one specific use case: if credit monitoring is your primary concern and you want it directly from the source. As one of the three major credit bureaus, Experian delivers the fastest credit alerts — there's no middleman delay. The CreditLock feature lets you instantly lock and unlock your Experian credit file from your phone, which is faster than a formal credit freeze. The FICO Score tracking and detailed credit analysis are best-in-class. However, at $24.99/mo it's the most expensive option on this list, and you're getting a narrow product — no antivirus, no VPN, no data broker removal. For most people, Aura provides better credit monitoring (all 3 bureaus) plus comprehensive identity protection for less money.",
    features: [
      { label: "Credit Monitoring", value: "3-bureau with real-time alerts" },
      { label: "FICO Score", value: "Monthly FICO Score tracking" },
      { label: "Credit Lock", value: "Instant Experian CreditLock" },
      { label: "Insurance Coverage", value: "$1,000,000" },
      { label: "Dark Web Monitoring", value: "SSN, email, phone surveillance" },
    ],
  },
];
