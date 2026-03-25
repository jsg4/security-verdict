export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trusted Scorecard",
    url: "https://trustedscorecard.com",
    logo: "https://trustedscorecard.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@trustedscorecard.com",
      contactType: "customer support",
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
