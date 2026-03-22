import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import CategoryHero from "@/components/CategoryHero";
import CategorySocialProof from "@/components/CategorySocialProof";
import Disclosure from "@/components/Disclosure";
import CategoryTopPicks from "@/components/CategoryTopPicks";
import CategoryShowcase from "@/components/CategoryShowcase";
import CategoryTableOfContents from "@/components/CategoryTableOfContents";
import CategoryReview from "@/components/CategoryReview";
import QuickCompare from "@/components/QuickCompare";
import PromoBanner from "@/components/PromoBanner";
import CategoryComparisonTable from "@/components/CategoryComparisonTable";
import CategoryBanner from "@/components/CategoryBanner";
import CategoryTestimonials from "@/components/CategoryTestimonials";
import CategoryEducation from "@/components/CategoryEducation";
import CategoryMethodology from "@/components/CategoryMethodology";
import CategoryAuthor from "@/components/CategoryAuthor";
import CategoryFAQ from "@/components/CategoryFAQ";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";
import { getCategory, getAllCategorySlugs } from "@/data/categories";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const config = getCategory(category);
  if (!config) return {};
  return {
    title: `${config.metaTitle} | Trusted Scorecard`,
    description: config.metaDescription,
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      type: "article",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const config = getCategory(category);
  if (!config) notFound();

  // Insert promo banner after product #3 (GAP #5)
  const promoProduct = config.products[0];

  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryHero config={config} />
        <CategorySocialProof config={config} />
        <Disclosure />
        <CategoryTopPicks config={config} />
        <CategoryShowcase config={config} />
        <QuickCompare products={config.products} />
        <CategoryTableOfContents config={config} />
        <section id="reviews" className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">
            Detailed Reviews
          </h2>
          {config.products.map((product, i) => (
            <div key={product.slug}>
              <CategoryReview product={product} rank={i + 1} />
              {/* GAP #5: Promo banner between product #3 and #4 */}
              {i === 2 && config.products.length > 3 && (
                <PromoBanner product={promoProduct} />
              )}
            </div>
          ))}
        </section>
        <CategoryComparisonTable config={config} />
        <CategoryBanner config={config} />
        <CategoryTestimonials config={config} />
        <CategoryEducation config={config} />
        <CategoryMethodology config={config} />
        <div className="max-w-4xl mx-auto px-4">
          <CategoryAuthor config={config} />
        </div>
        <CategoryFAQ config={config} />
      </main>
      <Footer />
      {/* GAP #12: Sticky mobile bottom CTA */}
      <StickyMobileCTA product={config.products[0]} />
    </>
  );
}
