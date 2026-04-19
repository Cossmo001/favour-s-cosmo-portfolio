import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Award, Rocket, Code2, Globe, Cpu, Loader2, Briefcase } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

const iconMap: Record<string, any> = {
  globe: Globe,
  code: Code2,
  rocket: Rocket,
  cpu: Cpu,
};

const experience = [
  {
    company: "Cosmo Intents Lab (Cosmoint)",
    role: "CTO & Founder",
    period: "Present",
    description: "Leading technical vision and strategy for digital brand experiences."
  },
  {
    company: "Fetadify",
    role: "Senior Developer",
    period: "2024 - Present",
    description: "Contributing to GIS-based software solutions as a senior technical lead."
  },
  {
    company: "Marolan Group",
    role: "Lead Marketer & Brand Manager",
    period: "2024 - Present",
    description: "Spearheading marketing initiatives and brand consistency across diverse channels."
  },
  {
    company: "Transhub Global Resources",
    role: "Sales & Importation Lead",
    period: "2024 - Present",
    description: "Managing automotive sales, spare parts, and importation workflows."
  },
  {
    company: "AFS Foundation",
    role: "Marketing Assistant",
    period: "2024 - Present",
    description: "Supporting community empowerment and aid initiatives across Nigeria."
  },
  {
    company: "Serene",
    role: "Brand Creator",
    period: "2024 - Present",
    description: "Crafting unique brand identities and visual strategies."
  },
  {
    company: "SP Systems and Net Solutions",
    role: "Digital Marketing Instructor",
    period: "2023 - Early 2024",
    description: "Mentoring students in digital marketing strategies and tools."
  },
  {
    company: "SP Systems and Net Solutions",
    role: "Intern",
    period: "2022 - 2023",
    description: "Gaining hands-on experience in software development and networking."
  },
  {
    company: "SP Systems and Net Solutions",
    role: "Trainee",
    period: "2021 - 2022",
    description: "Initial technical training and skill acquisition."
  }
];

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

              {/* Experience Section */}
              <div className="mb-32 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-16 text-center">Professional Experience</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {experience.map((exp: any, i: number) => (
                    <div 
                      key={i} 
                      className="p-8 rounded-2xl border border-border bg-secondary/10 hover:bg-secondary/30 transition-all group backdrop-blur-sm"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-xl bg-background border border-border group-hover:border-primary/50 transition-colors">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary text-sm font-medium mb-4 italic">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
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
