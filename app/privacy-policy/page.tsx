import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Trusted Scorecard",
  description:
    "Trusted Scorecard's privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[var(--content-width)] mx-auto px-5 py-12 md:py-16">
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-[var(--gray-200)]">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[var(--foreground)] tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--gray-500)]">Last Updated: March 2026</p>
          </div>

          {/* Prose */}
          <div className="space-y-10 text-[var(--gray-700)] leading-relaxed">

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">1. Information We Collect</h2>
              <p className="mb-3">
                Trusted Scorecard collects limited information to improve the site and respond to your inquiries.
              </p>
              <p className="mb-3">
                <strong className="text-[var(--foreground)]">Analytics &amp; Usage Data.</strong> We automatically collect anonymized data such as pages viewed, time on site, referring URLs, browser type, and device type. This is collected through cookies and analytics tools (see Section 5 for details).
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Contact Form Data.</strong> When you submit our contact form, we collect your name, email address, selected subject, and message. This information is used solely to respond to your inquiry.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">2. How We Use Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li>Improve the quality, accuracy, and usability of our site and reviews</li>
                <li>Respond to questions and inquiries submitted through our contact form</li>
                <li>Understand which content is most useful to our readers</li>
                <li>Diagnose technical issues and ensure site stability</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to any third party, ever.
              </p>
            </section>

            {/* Affiliate Links */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">3. Affiliate Links &amp; Third-Party Services</h2>
              <p className="mb-3">
                Many links on Trusted Scorecard are affiliate links. When you click one, you will be transferred to a third-party website (such as IdentityGuard, ZenBusiness, BetterHelp, or Squarespace). These companies operate under their own privacy policies, which we encourage you to review before providing them with personal information.
              </p>
              <p>
                Trusted Scorecard earns a commission when you make a purchase through an affiliate link. This does not increase the price you pay, and it does not influence our editorial scores or rankings. See our{" "}
                <Link href="/methodology" className="text-[var(--primary)] hover:underline">methodology</Link> for more on editorial independence.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">4. Cookies &amp; Tracking</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to analyze traffic and improve our site. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li>
                  <strong className="text-[var(--foreground)]">Google Analytics</strong> — Tracks anonymized page views, session duration, and traffic sources. Google&apos;s data practices are governed by{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Google&apos;s Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Affiliate tracking cookies</strong> — Placed by affiliate networks when you click a partner link. These help attribute referrals for commission tracking.
                </li>
              </ul>
              <p className="mt-3">
                You can opt out of Google Analytics tracking by installing the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Google Analytics Opt-out Browser Add-on</a>. You can also disable cookies in your browser settings, though doing so may affect site functionality.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">5. Your Rights</h2>
              <p className="mb-3">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li><strong className="text-[var(--foreground)]">Access</strong> — Request a copy of personal data we hold about you</li>
                <li><strong className="text-[var(--foreground)]">Correction</strong> — Ask us to correct inaccurate information</li>
                <li><strong className="text-[var(--foreground)]">Deletion</strong> — Request deletion of your personal data</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please{" "}
                <Link href="/contact" className="text-[var(--primary)] hover:underline">contact us</Link> with your request. We will respond within 30 days.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to check this page periodically to stay informed. Continued use of the site after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how we handle your data, please{" "}
                <Link href="/contact" className="text-[var(--primary)] hover:underline font-medium">contact us</Link>.
                We&apos;re happy to help.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
