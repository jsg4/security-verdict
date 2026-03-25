import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Trusted Scorecard",
  description:
    "Terms of Service for Trusted Scorecard. Review the rules governing your use of our site and content.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[var(--content-width)] mx-auto px-5 py-12 md:py-16">
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-[var(--gray-200)]">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[var(--foreground)] tracking-tight mb-2">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--gray-500)]">Last Updated: March 2026</p>
          </div>

          {/* Prose */}
          <div className="space-y-10 text-[var(--gray-700)] leading-relaxed">

            {/* Acceptance */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using trustedscorecard.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service and all applicable laws. If you do not agree with any of these terms, please discontinue use of the Site immediately. Trusted Scorecard reserves the right to modify these terms at any time.
              </p>
            </section>

            {/* Use of Site */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">2. Use of Site</h2>
              <p className="mb-3">
                You may use this Site for personal, non-commercial informational purposes only. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li>Scrape, crawl, or systematically extract content from the Site without prior written permission</li>
                <li>Reproduce, republish, or redistribute our editorial content without attribution and a link back to the original</li>
                <li>Use the Site in any way that violates applicable local, national, or international laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Site or its related systems</li>
              </ul>
            </section>

            {/* Affiliate Relationships */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">3. Affiliate Relationships &amp; Advertising</h2>
              <p className="mb-3">
                Trusted Scorecard participates in affiliate marketing programs. When you click links to third-party products or services on our Site, we may earn a commission on qualifying purchases. This compensation does not affect the price you pay.
              </p>
              <p>
                Our affiliate relationships do not influence our editorial scores, rankings, or recommendations. Products are evaluated objectively based on criteria published on our{" "}
                <Link href="/methodology" className="text-[var(--primary)] hover:underline">methodology page</Link>.
                A disclosure notice is displayed on all pages that contain affiliate links.
              </p>
            </section>

            {/* Content Accuracy */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">4. Content Accuracy</h2>
              <p className="mb-3">
                Our reviews and ratings represent the expert opinions of our editorial team at the time of publication. While we strive for accuracy and update reviews regularly, product pricing, features, and availability can change.
              </p>
              <p>
                The content on this Site is for informational purposes only and does not constitute professional financial, legal, or medical advice. We recommend researching independently and consulting qualified professionals before making significant purchasing decisions.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">5. Limitation of Liability</h2>
              <p className="mb-3">
                To the fullest extent permitted by law, Trusted Scorecard and its contributors shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this Site or any content herein.
              </p>
              <p>
                This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses — even if we have been advised of the possibility of such damages.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">6. Intellectual Property</h2>
              <p>
                All content on this Site — including written reviews, editorial commentary, scoring systems, graphics, and design — is the intellectual property of Trusted Scorecard. No part of this Site may be reproduced, distributed, or transmitted in any form without prior written permission, except for brief quotations with attribution and a link to the source.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">7. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Continued use of the Site after any such changes constitutes your acceptance of the new terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">8. Contact</h2>
              <p>
                If you have questions about these Terms of Service, please{" "}
                <Link href="/contact" className="text-[var(--primary)] hover:underline font-medium">contact us</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
