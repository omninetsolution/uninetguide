import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm font-display">U</span>
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                Uni<span className="text-primary">net</span>guide
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Uninetguide is an independent third-party service assistance startup, launched in 2026. We provide general guidance related to internet, broadband, Wi-Fi, and cable TV services.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={TFN_LINK} className="font-bold text-primary hover:text-primary/80 transition-colors">{TFN_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-primary transition-colors">{SUPPORT_EMAIL}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Uninetguide LLC, United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8">
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              <strong>Disclaimer:</strong> Uninetguide is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, authorized by, or sponsored by any cable, internet, or streaming service provider. All trademarks, service marks, and brand names referenced on this website belong to their respective owners and are used strictly for informational purposes only. Our service fees are separate from any provider charges.
            </p>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Uninetguide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
