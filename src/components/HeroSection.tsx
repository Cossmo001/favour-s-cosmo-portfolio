const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-medium mb-6 opacity-0 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <a 
                href="https://www.cosmoint24.com.ng" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                CTO at Cosmo Intents Lab
              </a>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 opacity-0 animate-fade-in-up-1">
              Olorunfemi
              <br />
              <span className="font-serif italic text-primary">Favour</span>
            </h1>
            <p className="text-foreground/60 text-lg leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-in-up-2">
              Mobile developer and tech leader building performant applications
              and driving digital growth through{" "}
              <a 
                href="https://www.cosmoint24.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground font-bold hover:text-primary transition-colors decoration-primary underline-offset-4 hover:underline"
              >
                Cosmo Intents Lab
              </a> — a branding
              company crafting ethereal digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up-3">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <div className="relative group">
              <div className="w-[420px] h-[500px] bg-primary/5 border border-border rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                {/* Minimalist Tech Pattern */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_1px,_transparent_1px)] bg-[size:32px_32px]" />
                </div>
                <div className="z-10 text-primary/40 font-mono text-9xl font-bold tracking-tighter opacity-20 group-hover:opacity-40 transition-opacity duration-700 select-none">
                  F
                </div>
              </div>
              <div className="absolute -bottom-5 -left-8 bg-background border border-border rounded-2xl px-6 py-4 shadow-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Role</p>
                <p className="font-semibold text-foreground text-sm mt-0.5">Mobile Developer & CTO</p>
              </div>
              <div className="absolute top-8 -right-6 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-lg font-mono font-bold hover:scale-110 transition-transform">&lt;/&gt;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
