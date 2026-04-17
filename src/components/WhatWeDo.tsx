import { motion } from "framer-motion";
import { BookOpen, Wifi, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const services = [
  {
    icon: BookOpen,
    title: "Provider Navigation",
    description: "Not sure which plan or provider fits your needs? We help you compare Xfinity, Spectrum, AT&T, HughesNet, and DirecTV offerings so you can make a confident, informed decision for your home or business.",
  },
  {
    icon: Wifi,
    title: "Connectivity Troubleshooting",
    description: "Dealing with slow speeds, outages, or equipment confusion? Our team walks you through troubleshooting steps and service processes across all major internet and cable providers — clearly and efficiently.",
  },
  {
    icon: Users,
    title: "Plan & Billing Clarity",
    description: "Confused by service fees, contract terms, or upgrade options? We decode your provider's plans — whether it's Xfinity, Spectrum, DirecTV, or HughesNet — and help you understand exactly what you're paying for.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-display mb-4">
            How We <span className="gradient-text">Help</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From Xfinity and Spectrum to HughesNet, AT&T, and DirecTV — we provide reliable, independent guidance for homes and businesses across all major providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 hover:glow-border transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
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

export default WhatWeDo;
