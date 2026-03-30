import PageLayout from "@/components/PageLayout";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const Terms = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> Uninetguide is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold font-display mb-8 text-center">Terms & <span className="gradient-text">Conditions</span></h1>
          <p className="text-muted-foreground text-center mb-12">Last Updated: January 2026</p>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold font-display mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">By accessing or using Uninetguide's website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our services.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">2. Nature of Services</h2>
              <p className="text-muted-foreground leading-relaxed">Uninetguide is an independent third-party service assistance provider. We offer general guidance and informational support related to internet, broadband, Wi-Fi, cable TV, and streaming services. We are not an Internet Service Provider (ISP), and we do not sell, resell, or provide internet or cable services directly. We are not affiliated with, authorized by, or endorsed by any telecom, internet, or cable TV provider.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">3. Service Fees</h2>
              <p className="text-muted-foreground leading-relaxed">Uninetguide charges a separate service fee for the independent assistance and guidance provided. This fee is entirely separate from any charges or billing by your internet, cable, or streaming service provider.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">4. No Guarantees</h2>
              <p className="text-muted-foreground leading-relaxed">We do not provide guaranteed technical fixes, outcomes, or resolutions. Our services are limited to general informational guidance and assistance. Results may vary based on your specific situation and service provider.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">5. Provider References</h2>
              <p className="text-muted-foreground leading-relaxed">Any references to internet, cable, or streaming service providers on our platform are made strictly for informational purposes only. All trademarks, service marks, and brand names belong to their respective owners.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">Uninetguide shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our informational services. Our guidance is provided on an "as-is" basis.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">For questions regarding these Terms &amp; Conditions, contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a> or <a href={TFN_LINK} className="font-bold text-primary hover:underline">{TFN_DISPLAY}</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
