import { Phone, Wifi, Gauge, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const featureCards = [
  { icon: Wifi, label: "Wi-Fi Issues", desc: "Connectivity guidance" },
  { icon: Gauge, label: "Speed Support", desc: "Performance help" },
  { icon: Headphones, label: "24/7 Assistance", desc: "Always available" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Smart home connectivity setup" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-0">
        {/* Two-column layout on lg+ */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Left — main hero content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary">Independent Third-Party Service Assistance</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Independent Internet & Cable{" "}
              <span className="gradient-text">Service Assistance</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
            </motion.p>

            <motion.p
              className="text-xs text-muted-foreground/70 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Not an ISP • No brand affiliation • Separate service fees apply
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6 sm:px-8 text-sm sm:text-base h-12 sm:h-14">
                <a href={TFN_LINK}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-bold">{TFN_DISPLAY}</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-4 max-w-sm sm:max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "10K+", label: "Users Assisted" },
                { value: "~5min", label: "Avg. Response" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold font-display text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — feature cards (visible on all breakpoints) */}
          <motion.div
            className="flex flex-row lg:flex-col gap-3 mt-10 lg:mt-0 lg:w-64 xl:w-72 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {featureCards.map((card) => (
              <div
                key={card.label}
                className="glass-card p-4 glow-border flex-shrink-0 w-44 sm:w-52 lg:w-full"
              >
                <card.icon className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-sm font-display">{card.label}</h3>
                <p className="text-xs text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
