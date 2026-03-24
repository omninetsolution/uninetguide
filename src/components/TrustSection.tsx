import { motion } from "framer-motion";
import { Shield, Users, RefreshCw, Clock, Award, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";
import setupImg from "@/assets/setup-guide.jpg";
import expertImg from "@/assets/expert-support.jpg";

const trustCards = [
  { icon: Lock, title: "Data Privacy First", desc: "We never request provider passwords or sensitive credentials. Your data stays secure." },
  { icon: Award, title: "Trained Professionals", desc: "Our team provides informed, independent guidance backed by industry knowledge." },
  { icon: RefreshCw, title: "7–15 Day Refund Window", desc: "Eligible refund requests can be submitted within 7 to 15 days of service purchase." },
];

const stats = [
  { value: "97%", label: "Resolution Rate", icon: Shield },
  { value: "<5 min", label: "Avg Response Time", icon: Clock },
  { value: "10,000+", label: "Happy Customers", icon: Users },
];

const TrustSection = () => {
  return (
    <>
      {/* Stats */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold font-display text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-10 h-14 text-base">
              <a href={TFN_LINK}>
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-bold">{TFN_DISPLAY}</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
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
              Transparency & <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We believe in complete honesty and transparency in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 text-center hover:glow-border transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
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

      {/* Setup & Installation Guidance */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden glow-border">
                <img src={setupImg} alt="Router and modem setup" width={1280} height={720} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold font-display">Setup & Installation <span className="gradient-text">Guidance</span></h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Setting up a new router, modem, or Wi-Fi extender can feel overwhelming. Our independent team provides step-by-step informational guidance to help you understand the setup process — without any brand affiliation or provider authorization.
              </p>
              <p className="text-xs text-muted-foreground/60">
                We do not perform installations or provide official technical support.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 h-12">
                  <a href={TFN_LINK}>
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-bold">{TFN_DISPLAY}</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden glow-border">
                <img src={expertImg} alt="Expert support representative" width={1280} height={720} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold font-display">Independent <span className="gradient-text">Expert Guidance</span></h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our trained team members are available to assist you with general questions about internet speeds, Wi-Fi optimization, cable TV setup, and streaming connectivity. All guidance is provided independently and is not affiliated with any specific provider.
              </p>
              <p className="text-xs text-muted-foreground/60">
                Our assistance is informational only. Service fees are separate from provider charges.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-8 h-12">
                  <a href={TFN_LINK}>
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-bold">{TFN_DISPLAY}</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrustSection;
