import PageLayout from "@/components/PageLayout";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> Uninetguide is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold font-display mb-8 text-center">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="text-muted-foreground text-center mb-12">Last Updated: January 2026</p>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold font-display mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">Uninetguide ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy describes how we collect, use, and safeguard information when you use our independent third-party service assistance platform.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">We may collect the following information when you use our services:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Contact details (name, email address, phone number) when voluntarily provided</li>
                <li>General inquiry details related to your connectivity concerns</li>
                <li>Usage data including browser type, IP address, and pages visited</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">3. Information We Do NOT Collect</h2>
              <p className="text-muted-foreground leading-relaxed">We do not request, store, or process provider account passwords, social security numbers, banking credentials, or any other sensitive personal credentials. Our assistance is informational and does not require access to your provider accounts.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">4. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>To provide independent guidance and informational support</li>
                <li>To respond to your inquiries and service requests</li>
                <li>To improve our services and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">Our website uses HTTPS encryption to protect data in transit. We implement appropriate technical and organizational measures to safeguard the personal data we process.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">6. Third-Party Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytical purposes.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a> or call <a href={TFN_LINK} className="font-bold text-primary hover:underline">{TFN_DISPLAY}</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
