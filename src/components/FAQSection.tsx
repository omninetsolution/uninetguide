import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "No. NetGuidePro is an independent third-party assistance platform launched in 2026. We are not an Internet Service Provider (ISP) and do not deliver internet, cable, or streaming services directly to consumers." },
  { q: "Do you sell internet, cable, or streaming plans?", a: "No. We do not sell, resell, or distribute any internet, cable TV, or streaming subscriptions. Our role is limited to providing independent guidance and informational assistance only." },
  { q: "Do you charge for your services?", a: "Yes. NetGuidePro charges a separate service fee for the independent guidance and assistance we provide. This fee is entirely separate from any charges billed by your internet or cable service provider." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Your billing arrangement with your internet, cable, or streaming service provider remains completely unchanged. Our services and fees are independent and do not affect your provider's billing in any way." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never request your provider account passwords, social security number, or any other sensitive personal credentials. We may only ask for general information necessary to guide you through your inquiry." },
  { q: "Which providers do you support?", a: "We may reference multiple internet, cable, and streaming service providers for general informational and guidance purposes only. Such references do not imply any affiliation, authorization, or endorsement by those providers." },
  { q: "Are your services refundable?", a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility is determined by whether assistance has already been delivered and the nature of the service. Please review our Refund Policy page for full eligibility details." },
  { q: "How do I reach your support team?", a: `You can reach our independent support team by calling ${TFN_DISPLAY} or by emailing ${SUPPORT_EMAIL}. Our greeting confirms: 'Thank you for calling NetGuidePro, an independent service assistance platform.'` },
];

const FAQSection = ({ showAll = false }: { showAll?: boolean }) => {
  const displayFaqs = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-card/30" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find answers to common questions about our independent assistance services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {displayFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="text-left font-display font-semibold text-sm lg:text-base hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Still have questions? Our independent support team is here to help.</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-10 h-14 text-base">
            <a href={TFN_LINK}>
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-bold">{TFN_DISPLAY}</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
