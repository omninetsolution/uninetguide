import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";
import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  checkRateLimit,
  rateLimitMinutesLeft,
  isHoneypotTriggered,
} from "@/lib/security";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  /** Honeypot — must stay empty. Hidden from real users. */
  website: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = { name: "", email: "", phone: "", message: "", website: "" };

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    const name = sanitizeInput(form.name, 100);
    const message = sanitizeInput(form.message, 2000);

    if (!name || name.length < 2) errs.name = "Please enter your full name.";
    const emailResult = validateEmail(form.email.trim());
    if (!emailResult.valid) errs.email = emailResult.error;
    const phoneResult = validatePhone(form.phone.trim());
    if (!phoneResult.valid) errs.phone = phoneResult.error;
    if (!message || message.length < 10) errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check (bot detection)
    if (isHoneypotTriggered(form.website)) {
      // Silently discard — don't alert the bot
      setForm(INITIAL_FORM);
      return;
    }

    // 2. Client-side validation
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // 3. Rate limit check (max 5 submissions per hour)
    if (!checkRateLimit(5, 60 * 60 * 1000)) {
      const mins = rateLimitMinutesLeft(60 * 60 * 1000);
      toast({
        title: "Too Many Requests",
        description: `Please wait ${mins} minute(s) before submitting again.`,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    // Sanitize before any processing / sending
    const _safePayload = {
      name: sanitizeInput(form.name, 100),
      email: form.email.trim().toLowerCase().slice(0, 254),
      phone: form.phone.replace(/[^\d\s+()-]/g, "").slice(0, 20),
      message: sanitizeInput(form.message, 2000),
    };

    // TODO: send _safePayload to a secure backend endpoint via HTTPS

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. Our team will respond shortly.",
    });
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitting(false);
  };

  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> Uninetguide is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-display mb-4">Contact <span className="gradient-text">Us</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have questions about our independent assistance services? Reach out to us using the information below or fill out the contact form.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 glass-card p-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href={TFN_LINK} className="font-bold text-primary hover:text-primary/80 transition-colors text-lg">{TFN_DISPLAY}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 glass-card p-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold hover:text-primary transition-colors">{SUPPORT_EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 glass-card p-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business</p>
                      <p className="font-semibold">Uninetguide LLC, United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> Uninetguide is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6" noValidate>
              {/* Honeypot field — hidden from real users, traps bots */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }} tabIndex={-1}>
                <label htmlFor="website">Leave this blank</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={form.website}
                  onChange={handleChange("website")}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block" htmlFor="contact-name">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange("name")}
                  maxLength={100}
                  required
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p id="name-error" className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block" htmlFor="contact-email">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  maxLength={254}
                  required
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p id="email-error" className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block" htmlFor="contact-phone">
                  Phone Number
                </label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  maxLength={20}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p id="phone-error" className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block" htmlFor="contact-message">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we assist you?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  maxLength={2000}
                  required
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={errors.message ? "border-destructive" : ""}
                />
                <div className="flex justify-between mt-1">
                  {errors.message
                    ? <p id="message-error" className="text-destructive text-xs">{errors.message}</p>
                    : <span />}
                  <span className="text-xs text-muted-foreground">{form.message.length}/2000</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Request Assistance"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our <a href="/terms" className="text-primary hover:underline">Terms &amp; Conditions</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
