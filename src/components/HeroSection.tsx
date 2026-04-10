const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-in-up">
              Hello, I am
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in-up-1">
              Olorunfemi{" "}
              <span className="font-serif italic text-primary">Favour</span>
            </h1>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-lg mb-8 opacity-0 animate-fade-in-up-2">
              A Nigerian <strong className="text-foreground">Mobile Developer</strong> and{" "}
              <strong className="text-foreground">CTO at Cosmo Intent Lab</strong>, a branding company
              dedicated to driving digital growth and crafting ethereal solutions. I build
              performant mobile applications and lead teams that create compelling digital experiences.
            </p>
            <div className="flex gap-4 opacity-0 animate-fade-in-up-3">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-[400px] h-[480px] bg-primary rounded-[2rem] overflow-hidden" />
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl px-6 py-4 shadow-lg">
                <p className="text-sm text-muted-foreground">Current Role</p>
                <p className="font-semibold text-foreground">CTO at Cosmo Intent Lab</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-lg">
                <p className="text-sm font-mono">&lt;/&gt;</p>
                <p className="text-sm font-semibold">Mobile Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
