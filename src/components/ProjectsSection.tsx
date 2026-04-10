import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project One",
    category: "Mobile App",
    desc: "A brief description of this project and what it achieves.",
    image: null,
  },
  {
    title: "Project Two",
    category: "Branding",
    desc: "A brief description of this project and what it achieves.",
    image: null,
  },
  {
    title: "Project Three",
    category: "Mobile App",
    desc: "A brief description of this project and what it achieves.",
    image: null,
  },
  {
    title: "Project Four",
    category: "Digital Strategy",
    desc: "A brief description of this project and what it achieves.",
    image: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto lg:px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Selected <span className="font-serif italic text-primary">projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground/40 text-sm">Project Image</span>
              </div>
              <div className="p-8">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {p.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  View Project <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
