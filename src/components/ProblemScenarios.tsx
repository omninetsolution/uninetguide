import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";
import connectivityImg from "@/assets/connectivity-issue.jpg";
import workImg from "@/assets/work-connection.jpg";
import entertainmentImg from "@/assets/entertainment.jpg";

const scenarios = [
  {
    title: "Experiencing Connectivity Disruptions?",
    description: "Internet outages and Wi-Fi inconsistencies can disrupt your daily routine. Our independent assistance team helps guide you through common troubleshooting steps and provides informational support to help you understand your connectivity concerns.",
    image: connectivityImg,
    alt: "Person experiencing connectivity issues at home",
  },
  {
    title: "Your Work Depends on a Stable Connection?",
    description: "Remote work, video conferences, and cloud-based tasks require a reliable internet connection. We offer independent guidance to help you understand service options and navigate connectivity-related concerns without any brand affiliation.",
    image: workImg,
    alt: "Professional working from home with multiple monitors",
    reverse: true,
  },
  {
    title: "Seamless Entertainment Starts with Understanding",
    description: "Streaming, gaming, and smart home connectivity all depend on your internet service. We provide general informational support and independent guidance to help you navigate cable TV and streaming-related questions.",
    image: entertainmentImg,
    alt: "Family enjoying entertainment on smart TV",
  },
];

const ProblemScenarios = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${scenario.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden glow-border">
                  <img
                    src={scenario.image}
                    alt={scenario.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold font-display">{scenario.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{scenario.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemScenarios;
