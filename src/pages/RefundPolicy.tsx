import PageLayout from "@/components/PageLayout";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const RefundPolicy = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> Uninetguide is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold font-display mb-8 text-center">Refund <span className="gradient-text">Policy</span></h1>
          <p className="text-muted-foreground text-center mb-12">Last Updated: January 2026</p>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Refund Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed">Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility for a refund is determined by the following factors:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                <li><strong>Service type:</strong> The nature and scope of the independent guidance requested.</li>
                <li><strong>Delivery status:</strong> Whether the assistance or guidance has already been provided in full or in part.</li>
                <li><strong>Timing:</strong> Requests submitted outside the 7–15 day window may not be eligible for a refund.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Non-Refundable Situations</h2>
              <p className="text-muted-foreground leading-relaxed">Refunds may not be issued in the following circumstances:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                <li>The guidance or assistance has been fully delivered and acknowledged.</li>
                <li>The refund request is submitted beyond the eligible window.</li>
                <li>The user has received the informational support they requested.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed">To submit a refund request, please contact our support team at <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a> or call <a href={TFN_LINK} className="font-bold text-primary hover:underline">{TFN_DISPLAY}</a>. Include your service reference number and the reason for your request. Our team will review and respond within 3–5 business days.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Important Note</h2>
              <p className="text-muted-foreground leading-relaxed">Uninetguide's service fees are entirely separate from any charges by your internet, cable, or streaming service provider. Refunds processed by Uninetguide apply only to our independent service fees and do not affect your provider billing in any way.</p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RefundPolicy;
