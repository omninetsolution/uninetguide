import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemScenarios from "@/components/ProblemScenarios";
import WhatWeDo from "@/components/WhatWeDo";
import WhatWeDoNot from "@/components/WhatWeDoNot";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemScenarios />
      <WhatWeDo />
      <WhatWeDoNot />
      <TrustSection />
      <FAQSection />
      <Footer />
      <StickyCallButton />
    </div>
  );
};

export default Index;
