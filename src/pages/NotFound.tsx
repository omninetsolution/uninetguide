import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { TFN_LINK, TFN_DISPLAY } from "@/lib/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center space-y-4">
        <h1 className="mb-2 text-6xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">Oops! Page not found</p>
        <p className="text-muted-foreground text-sm">Need help? Our independent team is just a call away.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link to="/" className="inline-flex items-center justify-center rounded-full border border-primary px-6 h-11 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
            Return to Home
          </Link>
          <a
            href={TFN_LINK}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 h-11 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-bold">{TFN_DISPLAY}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
