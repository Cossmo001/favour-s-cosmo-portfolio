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
                href="https://www.cosmoint24.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-primary transition-colors"
              >
                Cosmo Intents Lab
              </a>
              , I, <span className="font-semibold text-foreground">Olorunfemi Favour</span>, lead the technical vision behind a branding company
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

          <div className="hidden lg:flex items-center justify-center relative">
            <div className="w-full aspect-square max-w-md mx-auto relative group">
              {/* Animated Geometric Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-48 h-48 border-2 border-primary/40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_7s_linear_infinite_reverse] group-hover:animate-[spin_3s_linear_infinite_reverse] transition-all duration-700" />
                <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="z-10 text-primary font-mono text-xl font-bold tracking-[0.2em] group-hover:scale-110 transition-transform duration-500">
                  COSMO
                </div>
              </div>
              
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
