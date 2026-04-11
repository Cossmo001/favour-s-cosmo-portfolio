import { Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Building cross-platform mobile applications with React Native and Flutter that deliver seamless user experiences.",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: (
      <>
        Creating cohesive brand identities through{" "}
        <a 
          href="https://www.cosmoint24.com.ng" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors underline underline-offset-4"
        >
          Cosmo Intents Lab
        </a>{" "}
        — from strategy to visual design and digital presence.
      </>
    ),
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    desc: "Developing digital strategies that drive growth, optimise engagement, and deliver measurable results.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto lg:px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          What I <span className="font-serif italic text-primary">do</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
