import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";
import connectivityImg from "@/assets/connectivity-issue.jpg";
import workImg from "@/assets/work-connection.jpg";
import entertainmentImg from "@/assets/entertainment.jpg";

const scenarios = [
  {
    title: "Struggling with Your Xfinity or Spectrum Connection?",
    description: "Frequent outages, sluggish speeds, and equipment confusion with Xfinity, Spectrum, or another provider can be incredibly frustrating. Our team walks you through the right steps — from diagnosing the issue to understanding your service options — so you can get back online fast.",
    image: connectivityImg,
    alt: "Person experiencing connectivity issues at home",
  },
  {
    title: "Remote Work Demands a Reliable Connection",
    description: "A dropped call mid-meeting or a stalled upload at a critical moment can cost you clients and credibility. We help you understand your AT&T, Xfinity, or HughesNet service tiers, equipment requirements, and upgrade paths so your work-from-home setup runs without interruption.",
    image: workImg,
    alt: "Professional working from home with multiple monitors",
    reverse: true,
  },
  {
    title: "Get the Most Out of DirecTV, Streaming & Cable",
    description: "From DirecTV satellite setup to optimizing your Spectrum cable package and streaming service integration, we cover it all. Whether you're battling buffering issues, channel access problems, or smart home connectivity, our experts guide you to the right solution.",
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
