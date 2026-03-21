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
import CategoryComparisonTable from "@/components/CategoryComparisonTable";
import CategoryBanner from "@/components/CategoryBanner";
import CategoryTestimonials from "@/components/CategoryTestimonials";
import CategoryEducation from "@/components/CategoryEducation";
import CategoryMethodology from "@/components/CategoryMethodology";
import CategoryAuthor from "@/components/CategoryAuthor";
import CategoryFAQ from "@/components/CategoryFAQ";
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

  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryHero config={config} />
        <CategorySocialProof config={config} />
        <Disclosure />
        <CategoryTopPicks config={config} />
        <CategoryShowcase config={config} />
        <CategoryTableOfContents config={config} />
        <section id="reviews" className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">
            Detailed Reviews
          </h2>
          {config.products.map((product, i) => (
            <CategoryReview key={product.slug} product={product} rank={i + 1} />
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
    </>
  );
}
