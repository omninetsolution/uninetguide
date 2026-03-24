import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { TFN_DISPLAY, TFN_LINK, SUPPORT_EMAIL } from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you for reaching out. Our team will respond shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-secondary/50 rounded-lg p-4 mb-12">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Disclosure:</strong> NetGuidePro is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
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
                      <p className="font-semibold">NetGuidePro LLC, United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> NetGuidePro is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="How can we assist you?" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 font-semibold">
                Request Assistance
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
