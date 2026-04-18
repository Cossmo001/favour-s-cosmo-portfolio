import { ExternalLink, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const ProjectsSection = () => {
  const { projects, isLoading } = usePortfolioData();
  
  // Show first 4 projects on home page
  const displayProjects = projects?.slice(0, 4) || [];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto lg:px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Selected <span className="font-serif italic text-primary">projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : displayProjects.length === 0 ? (
            <div className="col-span-full p-12 text-center rounded-3xl border border-dashed border-border bg-background">
              <p className="text-muted-foreground">No projects listed yet. Content coming soon.</p>
            </div>
          ) : (
            displayProjects.map((p, i) => (
              <div
                key={p.id}
                className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className={`aspect-video relative overflow-hidden flex items-center justify-center p-12 ${p.bg_color || "bg-muted"}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {p.image_url && (
                    <img 
                      src={p.image_url} 
                      alt={`${p.title} - Project by Olorunfemi Favour`} 
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center p-6 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs border border-primary/50 px-4 py-2 rounded-full bg-background/80 shadow-sm">View Details</span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{p.description}</p>
                  <a
                    href={p.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all group"
          >
            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
