import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 animate-fade-in-up">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">Connect</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Let's build <span className="font-serif italic text-primary">something</span> great
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and digital visions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12 animate-fade-in-up-1">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl border border-border bg-secondary/20 space-y-4">
                  <div className="p-3 rounded-xl bg-background w-fit">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Email Me</h3>
                  <a href="mailto:python.s2005@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block break-all">
                    python.s2005@gmail.com
                  </a>
                </div>
                <div className="p-8 rounded-3xl border border-border bg-secondary/20 space-y-4">
                  <div className="p-3 rounded-xl bg-background w-fit">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/olorunfemi-favour-49582a288/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block break-all">
                    olorunfemi-favour
                  </a>
                </div>
                <div className="p-8 rounded-3xl border border-border bg-secondary/20 space-y-4">
                  <div className="p-3 rounded-xl bg-background w-fit">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">GitHub</h3>
                  <a href="https://github.com/cosmo-0910" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    cosmo-0910
                  </a>
                </div>
                <div className="p-8 rounded-3xl border border-border bg-secondary/20 space-y-4">
                  <div className="p-3 rounded-xl bg-background w-fit">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold">Agency</h3>
                  <a href="https://www.cosmoint24.com.ng" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    Cosmo Intents Lab
                  </a>
                </div>
              </div>

              <div className="p-10 rounded-[2.5rem] bg-foreground text-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                   <Send className="w-24 h-24" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-serif italic">Quick Reply</h3>
                <p className="text-background/70 text-sm leading-relaxed max-w-xs">
                  I typically respond within 24 hours to all professional inquiries.
                </p>
              </div>
            </div>

            <div className="p-10 md:p-12 rounded-[2.5rem] border border-border bg-background shadow-2xl animate-fade-in-up-2">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest px-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-secondary/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest px-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-secondary/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest px-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Message Subject" 
                    className="w-full bg-secondary/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="How can I help you?" 
                    className="w-full bg-secondary/50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
                <Button className="w-full py-7 rounded-2xl text-lg font-bold group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
