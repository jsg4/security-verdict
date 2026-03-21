import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Disclosure from "@/components/Disclosure";
import TopPicks from "@/components/TopPicks";
import TableOfContents from "@/components/TableOfContents";
import DetailedReview from "@/components/DetailedReview";
import ComparisonTable from "@/components/ComparisonTable";
import HowWeEvaluate from "@/components/HowWeEvaluate";
import EducationalContent from "@/components/EducationalContent";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Disclosure />
        <TopPicks products={products.slice(0, 3)} />
        <TableOfContents />
        <section id="reviews" className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
            Detailed Reviews
          </h2>
          {products.map((product, i) => (
            <DetailedReview key={product.slug} product={product} rank={i + 1} />
          ))}
        </section>
        <ComparisonTable products={products} />
        <EducationalContent />
        <HowWeEvaluate />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
