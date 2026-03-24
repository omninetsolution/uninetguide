import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="glass-card p-10 lg:p-16 text-center glow-border relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
              Need Independent <span className="gradient-text">Assistance</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Speak with our independent third-party support team for general guidance on internet, broadband, Wi-Fi, and cable TV services.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-10 text-base h-14">
              <a href={TFN_LINK}>
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-bold">{TFN_DISPLAY}</span>
              </a>
            </Button>
            <p className="text-xs text-muted-foreground/60 mt-4">
              Not an ISP. Independent third-party service. Separate fees apply.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
