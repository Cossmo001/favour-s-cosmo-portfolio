import { Building2 } from "lucide-react";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "Cosmo Intent Lab",
    period: "2023 – Present",
    desc: "Leading the entire engineering team, defining the technical roadmap, and architecting scalable mobile solutions for a growing user base.",
  },
  {
    role: "Senior Mobile Developer",
    company: "Cosmo Intent Lab",
    period: "2021 – 2023",
    desc: "Spearheaded mobile development initiatives, built cross-platform applications, and mentored junior developers.",
  },
  {
    role: "Mobile Developer",
    company: "Freelance",
    period: "2019 – 2021",
    desc: "Delivered high-quality mobile apps for various clients, specializing in React Native and native iOS/Android development.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Experience</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-16">
          Career <span className="text-gradient">journey</span>
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-[9px]" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-2 text-primary text-sm font-mono mb-1">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
