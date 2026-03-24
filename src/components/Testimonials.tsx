import { motion } from "framer-motion";
import { Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const reviews = [
  { name: "Sarah M.", text: "NetGuidePro helped me understand my connectivity options when I was confused about different service types. Their independent guidance was clear and straightforward.", rating: 5 },
  { name: "David R.", text: "I appreciated that they were upfront about being a third-party service. The guidance I received about my Wi-Fi setup was practical and easy to follow.", rating: 5 },
  { name: "Jennifer L.", text: "Great experience with their support team. They walked me through understanding my cable service options without any pushy sales tactics.", rating: 5 },
  { name: "Michael T.", text: "The team was transparent about their role as an independent assistance provider. They helped me understand troubleshooting steps I hadn't considered before.", rating: 5 },
  { name: "Amanda K.", text: "Quick response time and very knowledgeable about general internet connectivity topics. It was refreshing to speak with someone not tied to a specific provider.", rating: 5 },
];

const Testimonials = () => {
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
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from users who have received independent guidance from our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-display font-semibold text-sm">{review.name}</p>
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

export default Testimonials;
