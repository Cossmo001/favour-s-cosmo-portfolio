import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// This is the dedicated ID for the Personal Portfolio project in the Cosmo Intents Admin
const PORTFOLIO_ORDER_ID = "f7a2b9c0-e1d2-4f3a-8b4c-9d0e1f2a3b4c";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading("Connecting to Cosmo Intents Lab...");
    
    try {
      const { error } = await supabase
        .from("project_messages")
        .insert([{
          order_id: PORTFOLIO_ORDER_ID,
          sender_type: 'client',
          message: `[From: ${formData.name}] - ${formData.subject}\n\n${formData.message}`,
          is_read: false
        }]);

      if (error) throw error;

      toast.dismiss(loadingToast);
      toast.success("Message delivered! It's now visible in my admin dashboard.", {
        description: "I'll respond as soon as I see it.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.dismiss(loadingToast);
      toast.error("Handshake failed. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's work{" "}
              <span className="font-serif italic text-primary">together</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Have a project in mind or want to collaborate? Feel free to reach out — I'd love to
              hear from you.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "olorunfemifavour@cosmoint24.com.ng" },
                { icon: Phone, label: "Phone", value: "+234 9057 120419" },
                { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
              />
              <textarea
                rows={5}
                required
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
