import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, ArrowRight, Loader2, Info } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";

const Projects = () => {
  const { projects, isLoading, isError } = usePortfolioData();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const displayProjects = projects || [];

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex flex-col pt-32">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-muted-foreground">Failed to load projects. Please try again later.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 animate-fade-in-up">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">Portfolio</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Impactful <span className="font-serif italic text-primary">creations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Explore the projects that define my technical expertise and creative vision.
            </p>
          </div>

          <div className="space-y-32">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : (
              displayProjects.map((p, i) => (
                <div 
                  key={p.id} 
                  className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up-${(i % 3) + 1}`}
                >
                  <div className={`order-2 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{p.category}</span>
                      <button 
                        onClick={() => setSelectedProject(p)}
                        className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors border-b border-muted-foreground/30 hover:border-primary pb-1"
                      >
                        View Details
                      </button>
                    </div>
                    <h2 className="text-4xl font-bold mb-6">{p.title}</h2>
                    <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                      {p.description}
                    </p>
                    
                    {p.tags && p.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-10">
                        {p.tags.map(tag => (
                          <span key={tag} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-6">
                      {p.link && (
                        <a 
                          href={p.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                        >
                          View Live Site <ArrowRight className="w-5 h-5" />
                        </a>
                      )}
                      {p.github_link && (
                        <a 
                          href={p.github_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div 
                    className={`order-1 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"} group cursor-pointer`}
                    onClick={() => setSelectedProject(p)}
                  >
                    <div className={`aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl relative ${p.bg_color || 'bg-secondary/20'}`}>
                      {p.image_url && (
                        <img 
                          src={p.image_url} 
                          alt={p.title} 
                          className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700" 
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-background/80 px-6 py-3 rounded-full backdrop-blur-sm border border-border flex items-center gap-2">
                          <Info className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold uppercase tracking-widest">Read Story</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-primary font-medium italic">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 aspect-video rounded-2xl overflow-hidden border border-border mb-8 bg-secondary/10">
                {selectedProject.image_url && (
                  <img 
                    src={selectedProject.image_url} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-contain p-8"
                  />
                )}
              </div>

              <div className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h4 className="text-lg font-bold text-foreground">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {selectedProject.long_description || selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {selectedProject.tags?.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Visit Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {selectedProject.github_link && (
                    <a 
                      href={selectedProject.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-secondary/80 transition-colors"
                    >
                      Source Code <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;
