const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Passionate about creating{" "}
              <span className="font-serif italic text-primary">meaningful</span> digital experiences
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As the CTO of{" "}
              <a 
                href="https://cosmoint24.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                Cosmo Intent Lab
              </a>
              , I lead the technical vision behind a branding company
              that helps businesses build their digital identity. My expertise spans mobile development,
              digital strategy, and team leadership.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I combine strategic marketing insights with technical prowess to deliver impactful
              results and foster sustainable digital success for individuals and organisations.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Done" },
                { value: "15+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-border">
              <img 
                src="/olorunfemi favour.jpg" 
                alt="Olorunfemi Favour" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
