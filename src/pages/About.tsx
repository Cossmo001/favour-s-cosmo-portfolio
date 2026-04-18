import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Rocket, Code2, Globe, Cpu, Loader2 } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = {
  globe: Globe,
  code: Code2,
  rocket: Rocket,
  cpu: Cpu,
};

const About = () => {
  const { settings, isLoading, isError } = usePortfolioData();

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex flex-col pt-32">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-muted-foreground">Failed to load content. Please refresh the page.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const bioContent = settings?.bio || {
    journey: "As the CTO of Cosmo Intents Lab, I bridge the gap between complex technical architecture and ethereal digital brand experiences.",
    about_me: "With over 3 years of experience in the tech industry, I have dedicated my career to building software that doesn't just work, but thrives. My journey started with a passion for mobile development, which quickly evolved into a comprehensive understanding of digital strategy and technical leadership.",
    team_leadership: "At Cosmo Intents Lab, I lead a team of talented individuals to deliver branding and technological solutions that help businesses stand out in a crowded digital world. I believe in a minimalist approach to design and a maximalist approach to performance."
  };

  const services = settings?.services || [
    { title: "Mobile App Development", desc: "Crafting high-performance, cross-platform mobile applications using React Native and Flutter, focused on exceptional user experience.", icon: "globe" },
    { title: "Web Architecture", desc: "Designing and building scalable, secure web architectures that power modern digital experiences for businesses of all sizes.", icon: "code" },
    { title: "Digital Strategy", desc: "Strategic technical consulting to help brands navigate the digital landscape and achieve sustainable growth.", icon: "rocket" },
    { title: "Technical Leadership", desc: "Leading engineering teams and defining technical visions as a CTO to deliver complex digital products.", icon: "cpu" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {/* Header Section */}
              <div className="mb-20 animate-fade-in-up">
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">The Journey</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
                  Olorunfemi <span className="font-serif italic text-primary">Favour</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {bioContent.journey}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
                <div className="space-y-8 animate-fade-in-up-1">
                  <h2 className="text-3xl font-bold">About Me</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {bioContent.about_me}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {bioContent.team_leadership}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">React & Next.js</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">React Native</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">TypeScript expert</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Technical Strategy</span>
                    </div>
                  </div>
                </div>

                <div className="relative animate-fade-in-up-2">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-border shadow-2xl skew-y-1 transition-transform hover:skew-y-0 duration-500">
                    <img 
                      src="/olorunfemi%20favour.jpg" 
                      alt="Olorunfemi Favour" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
                    <Award className="w-8 h-8 mb-2" />
                    <p className="text-2xl font-bold italic font-serif leading-none">3+</p>
                    <p className="text-xs uppercase tracking-widest mt-1 opacity-80">Years Excellence</p>
                  </div>
                </div>
              </div>

              {/* Services Section */}
              <div className="mb-32">
                <h2 className="text-4xl font-bold mb-16 text-center">My Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {services.map((s: any, i: number) => {
                    const Icon = iconMap[s.icon as string] || Globe;
                    return (
                      <div 
                        key={i} 
                        className="p-8 rounded-2xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="mb-6 p-3 rounded-xl bg-background w-fit group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
