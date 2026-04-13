import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "TranshubCars",
    category: "Mobile & Web App",
    desc: "A comprehensive platform for car inspections, sales, and management, featuring robust visitor tracking and email automation.",
    longDesc: "TranshubCars is a flagship project designed to revolutionize the car sales industry in Nigeria. It includes a mobile app for inspectors and a web platform for buyers and administrators. The system features real-time notifications, automated invoicing, and a custom analytics dashboard.",
    link: "https://transhub.cars",
    image: "/brands/Transhub Global Resouces.png",
    tags: ["React Native", "Next.js", "Supabase", "Resend API"],
    bgColor: "bg-blue-500/5",
  },
  {
    title: "AI Innovation Hub",
    category: "Digital Platform",
    desc: "A modern platform for AI exploration, featuring live chat integration and personalized user experiences.",
    longDesc: "This platform serves as a hub for exploring the latest AI technologies. It integrates with Tawk.to for live support and uses various AI models to provide users with a personalized exploration experience. The UI is designed for maximum engagement and minimalist aesthetics.",
    link: "https://aihub.cosmointentlab.com",
    image: "/brands/fedatify.png",
    tags: ["React", "Vite", "Tailwind CSS", "Tawk.to"],
    bgColor: "bg-teal-500/5",
  },
  {
    title: "Cosmo Intents Lab Branding",
    category: "Branding & Strategy",
    desc: "Crafting ethereal digital experiences and cohesive brand identities for modern businesses.",
    longDesc: "As CTO of Cosmo Intents Lab, I oversee the technical execution of our branding projects. This involves creating pixel-perfect websites, digital architecture that scales, and brand strategies that resonate with a global audience.",
    link: "https://www.cosmoint24.com.ng",
    image: "/brands/cosmointlogotype2.png",
    tags: ["Digital Branding", "Web Architecture", "UI/UX Design"],
    bgColor: "bg-primary/5",
  },
  {
    title: "Professional Invoice System",
    category: "FinTech",
    desc: "Branded invoicing and financial management system designed for professional service providers.",
    longDesc: "A custom-built invoicing system that allows professionals to generate, send, and track branded invoices. It includes VAT calculations, tax management, and client record keeping, all with a premium, professional aesthetic.",
    link: "#",
    image: "/brands/sp systems and net solutions.png",
    tags: ["React", "Zod", "PDF Generation", "Cloud Storage"],
    bgColor: "bg-slate-500/5",
  },
];

const Projects = () => {
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
            {projects.map((p, i) => (
              <div 
                key={i} 
                className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up-${(i % 3) + 1}`}
              >
                <div className={`order-2 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{p.category}</span>
                  <h2 className="text-4xl font-bold mt-4 mb-6">{p.title}</h2>
                  <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                    {p.longDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a 
                      href={p.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                    >
                      View Live Site <ArrowRight className="w-5 h-5" />
                    </a>
                    {p.title !== "Cosmo Intents Lab Branding" && (
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className={`order-1 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"} group`}>
                  <div className={`aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl relative ${p.bgColor}`}>
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
