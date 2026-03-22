import { CategoryConfig } from "@/data/types";

export default function SchemaMarkup({ config }: { config: CategoryConfig }) {
  // FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://trustedscorecard.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.title,
        item: `https://trustedscorecard.com/${config.slug}`,
      },
    ],
  };

  // Product + Review schema for each product
  const productSchemas = config.products.map((product, i) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.tagline,
    image: product.productImage
      ? `https://trustedscorecard.com${product.productImage}`
      : undefined,
    brand: {
      "@type": "Brand",
      name: product.name,
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: product.score,
        bestRating: 10,
        worstRating: 0,
      },
      author: {
        "@type": "Person",
        name: config.author.name,
      },
      reviewBody: product.review,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.stars,
      bestRating: 5,
      reviewCount: product.reviewCount.replace(/,/g, ""),
    },
    offers: {
      "@type": "Offer",
      price: product.annualMonthly.replace(/[^0-9.]/g, "") || "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }));

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.metaTitle,
    description: config.metaDescription,
    author: {
      "@type": "Person",
      name: config.author.name,
      jobTitle: config.author.title,
      url: config.author.linkedin || undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "Trusted Scorecard",
      url: "https://trustedscorecard.com",
    },
    datePublished: "2026-01-15",
    dateModified: "2026-03-21",
    mainEntityOfPage: `https://trustedscorecard.com/${config.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
