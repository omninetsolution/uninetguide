import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Shield, Eye, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const About = () => {
  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> NetGuidePro is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl lg:text-5xl font-bold font-display mb-6 text-center">About <span className="gradient-text">NetGuidePro</span></h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              NetGuidePro is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi, and cable TV services.
            </p>
          </motion.div>

          <div className="space-y-8 mb-16">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns. Our goal is to make navigating the world of internet, broadband, and cable services easier and more accessible for everyone.
              </p>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold font-display mb-4">What We Are</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are a startup founded in 2026, committed to providing independent, unbiased guidance. We do not provide internet or cable services directly, and we do not represent or partner with any telecom, internet, or cable TV provider. Our focus is transparency, clarity, and responsible service assistance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Transparency", desc: "Complete honesty about who we are and what we offer." },
              { icon: Eye, title: "Clarity", desc: "Clear communication without misleading claims or jargon." },
              { icon: Users, title: "Independence", desc: "No provider affiliations, no brand partnerships." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-10 h-14 text-base">
              <a href={TFN_LINK}>
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-bold">{TFN_DISPLAY}</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
