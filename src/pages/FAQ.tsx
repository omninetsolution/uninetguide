import PageLayout from "@/components/PageLayout";
import FAQSection from "@/components/FAQSection";

const FAQ = () => {
  return (
    <PageLayout>
      <div className="py-10">
        <div className="container mx-auto px-4 lg:px-8 mb-8">
          <div className="bg-secondary/50 rounded-lg p-4">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> NetGuidePro is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>
        </div>
        <FAQSection showAll />
      </div>
    </PageLayout>
  );
};

export default FAQ;
