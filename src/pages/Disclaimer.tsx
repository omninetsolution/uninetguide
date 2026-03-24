import PageLayout from "@/components/PageLayout";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const Disclaimer = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold font-display mb-8 text-center">
            <span className="gradient-text">Disclaimer</span>
          </h1>

          <div className="glass-card p-8 lg:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Independent Third-Party Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                NetGuidePro is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, streaming, or telecom service provider. Brand names, trademarks, and service marks mentioned on this website, if any, are the property of their respective owners and are used strictly for informational purposes only.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Nature of Our Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                NetGuidePro provides general guidance and informational assistance related to internet, broadband, Wi-Fi, and cable TV services. We do not provide internet or cable services directly. We do not sell, resell, or distribute any service plans, subscriptions, or packages. We do not provide official customer support for any brand. We do not offer guaranteed technical fixes or resolutions.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Service Fees</h2>
              <p className="text-muted-foreground leading-relaxed">
                NetGuidePro charges a separate service fee for the independent assistance and guidance we provide. This fee is completely independent of any billing or charges from your internet, cable, or streaming service provider.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">No Impersonation</h2>
              <p className="text-muted-foreground leading-relaxed">
                NetGuidePro does not impersonate, represent, or act on behalf of any internet service provider, cable company, telecom operator, or streaming platform. Our call greeting confirms: "Thank you for calling NetGuidePro, an independent service assistance platform."
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold font-display mb-3">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                NetGuidePro LLC<br />
                Phone: <a href={TFN_LINK} className="font-bold text-primary hover:underline">{TFN_DISPLAY}</a><br />
                Email: <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">{SUPPORT_EMAIL}</a><br />
                United States
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
