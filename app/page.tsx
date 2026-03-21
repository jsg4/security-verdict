import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Disclosure from "@/components/Disclosure";
import TopPicks from "@/components/TopPicks";
import TableOfContents from "@/components/TableOfContents";
import ProductShowcase from "@/components/ProductShowcase";
import DetailedReview from "@/components/DetailedReview";
import ComparisonTable from "@/components/ComparisonTable";
import ThreatBanner from "@/components/ThreatBanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import EducationalContent from "@/components/EducationalContent";
import HowWeEvaluate from "@/components/HowWeEvaluate";
import AuthorBio from "@/components/AuthorBio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Disclosure />
        <TopPicks products={products.slice(0, 3)} />
        <ProductShowcase />
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
        <ThreatBanner />
        <TestimonialCarousel />
        <EducationalContent />
        <HowWeEvaluate />
        <div className="max-w-4xl mx-auto px-4">
          <AuthorBio variant="full" />
        </div>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
