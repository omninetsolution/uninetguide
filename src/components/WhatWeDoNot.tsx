import { motion } from "framer-motion";
import { XCircle, ShieldX, Ban, AlertTriangle, DollarSign, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const items = [
  { icon: XCircle, title: "Not an ISP", desc: "We are not an Internet Service Provider and do not deliver internet or cable service." },
  { icon: ShieldX, title: "Not Official Support", desc: "We do not provide official customer support for any brand, provider, or telecom company." },
  { icon: Ban, title: "No Affiliation", desc: "We are not affiliated, authorized, or endorsed by any telecom, cable, or internet company." },
  { icon: AlertTriangle, title: "No Selling Plans", desc: "We do not sell internet, cable, or streaming subscriptions or plans of any kind." },
  { icon: DollarSign, title: "Separate Service Fees", desc: "Our service fees are independent and separate from any charges by your service provider." },
  { icon: Info, title: "Informational Only", desc: "We do not provide guaranteed technical fixes. All mentions of providers are strictly informational." },
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
            To avoid confusion, please note the following about our services:
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
          <p className="text-muted-foreground mb-6">Have questions? Our independent team is happy to clarify.</p>
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
