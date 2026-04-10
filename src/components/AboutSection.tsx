import { Code2, Smartphone, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Specializing in cross-platform mobile development with React Native and Flutter.",
  },
  {
    icon: Code2,
    title: "Technical Leadership",
    desc: "Leading engineering teams, defining architecture, and driving technical strategy.",
  },
  {
    icon: Rocket,
    title: "Product Vision",
    desc: "Transforming ideas into scalable products that solve real-world problems.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">About</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Passionate about building <span className="text-gradient">great software</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-16">
          As the CTO of Cosmo Intent Lab, I lead the technical vision and engineering efforts
          to create innovative mobile applications. With a deep passion for clean code and
          exceptional user experiences, I bridge the gap between technology and business goals.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:glow-border transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
