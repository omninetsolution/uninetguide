import { motion } from "framer-motion";
import { XCircle, ShieldX, Ban, AlertTriangle, DollarSign, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const items = [
  { icon: XCircle, title: "Not an ISP", desc: "We do not deliver internet, cable, or satellite service. For active service, contact your provider directly — Xfinity, Spectrum, AT&T, HughesNet, or DirecTV." },
  { icon: ShieldX, title: "Not Official Support", desc: "We are not an official support channel for any provider. Our guidance is independent and not a substitute for contacting your provider's support team." },
  { icon: Ban, title: "No Provider Affiliation", desc: "We are not affiliated with, authorized by, or endorsed by Xfinity, Spectrum, HughesNet, AT&T, DirecTV, or any other telecom or cable company." },
  { icon: AlertTriangle, title: "No Plan Sales", desc: "We do not sell or sign you up for internet, cable, or streaming plans. We help you understand your options — the choice and signup are entirely yours." },
  { icon: DollarSign, title: "Separate Service Fees", desc: "Our guidance service fees are completely separate from any charges billed by your internet or cable provider." },
  { icon: Info, title: "Guidance Only", desc: "We provide information and guidance, not guaranteed technical fixes. All provider names and services mentioned are for reference purposes only." },
];

const WhatWeDoNot = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
            What We Do <span className="text-destructive">NOT</span> Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're here to guide you — not to replace your provider. Here's what falls outside our scope:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 border-destructive/20 hover:border-destructive/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">Still have questions about what we cover? Our team is happy to clarify before you call.</p>
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

export default WhatWeDoNot;
