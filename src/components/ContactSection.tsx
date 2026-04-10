import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Contact</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Interested in collaborating or have a project in mind? I'd love to hear from you.
        </p>

        <a
          href="mailto:favour@cosmointentlab.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-border"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </a>

        <div className="flex justify-center gap-6 mt-12">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
