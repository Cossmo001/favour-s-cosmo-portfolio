import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TranshubCars",
    category: "Mobile & Web App",
    desc: "A comprehensive platform for car inspections, sales, and management, featuring robust visitor tracking and email automation.",
    link: "https://transhub.cars",
    image: "/brands/Transhub Global Resouces.png",
  },
  {
    title: "AI Innovation Hub",
    category: "Digital Platform",
    desc: "A modern platform for AI exploration, featuring live chat integration and personalized user experiences.",
    link: "https://aihub.cosmointentlab.com",
    image: "/brands/fedatify.png",
  },
  {
    title: "Cosmo Intent Lab Branding",
    category: "Branding & Strategy",
    desc: "Crafting ethereal digital experiences and cohesive brand identities for modern businesses.",
    link: "https://cosmoint24.com.ng",
    image: "/brands/cosmointlogotype2.png",
  },
  {
    title: "Professional Invoice System",
    category: "FinTech",
    desc: "Branded invoicing and financial management system designed for professional service providers.",
    link: "#",
    image: "/brands/sp systems and net solutions.png",
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
              <div className="aspect-video relative overflow-hidden bg-muted flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-10" />
                <img 
                  src={p.image || "/placeholder.svg"} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                   <span className="text-white font-bold text-shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">View Case Study</span>
                </div>
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
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
