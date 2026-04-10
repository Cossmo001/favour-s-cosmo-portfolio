import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-in-up">
          CTO · Mobile Developer
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 opacity-0 animate-fade-in-up-delay">
          Olorunfemi{" "}
          <span className="text-gradient">Favour</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up-delay-2">
          Building the future of mobile experiences as CTO at Cosmo Intent Lab.
          Crafting performant, beautiful apps that users love.
        </p>
        <div className="flex gap-4 justify-center opacity-0 animate-fade-in-up-delay-2">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
