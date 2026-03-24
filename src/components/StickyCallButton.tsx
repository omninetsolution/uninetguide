import { Phone } from "lucide-react";
import { TFN_DISPLAY, TFN_LINK } from "@/lib/constants";

const StickyCallButton = () => {
  return (
    <a
      href={TFN_LINK}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 px-4 py-3 font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 border border-primary/40 group"
      aria-label={`Call us at ${TFN_DISPLAY}`}
    >
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary-foreground/20 group-hover:animate-pulse">
        <Phone className="w-4 h-4 text-primary-foreground" />
      </span>
      <span className="hidden sm:inline">{TFN_DISPLAY}</span>
    </a>
  );
};

export default StickyCallButton;
