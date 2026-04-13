import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, Search } from "lucide-react";

const blogPosts = [
  {
    title: "Psychology of a Minimalist Motion",
    excerpt: "Understanding the balance between simplicity and motion to create ethereal digital experiences.",
    author: "Favour Olorunfemi",
    date: "April 11, 2026",
    category: "Design",
    link: "https://www.cosmoint24.com.ng/blog/psychology-minimalist-motion",
  },
  {
    title: "The Golden Ratio in Digital Layouts",
    excerpt: "Exploring the mathematical perfection behind balanced and visually pleasing digital architectures.",
    author: "Favour Olorunfemi",
    date: "April 11, 2026",
    category: "Architecture",
    link: "https://www.cosmoint24.com.ng/blog/golden-ratio-digital-layouts",
  },
  {
    title: "Strategic Growth: Beyond Just Development",
    excerpt: "How to combine technical expertise with marketing insights to drive sustainable business success.",
    author: "Favour Olorunfemi",
    date: "March 12, 2026",
    category: "Strategy",
    link: "https://www.cosmoint24.com.ng/blog/strategic-growth",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Link */}
          <div className="flex justify-end mb-12">
            <a 
              href="https://www.cosmoint24.com.ng/blog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors border border-primary/20 hover:border-foreground/20 px-4 py-2 rounded-full"
            >
              Check more blogs from Favour Femi <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mb-20 animate-fade-in-up">
            <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-4">Insights</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Technical <span className="font-serif italic text-primary">thoughts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Diving deep into code, design, and digital strategy.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-32">
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, i) => (
                <article 
                  key={i} 
                  className={`group p-8 rounded-3xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-all animate-fade-in-up-${(i % 3) + 1}`}
                >
                  <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground font-medium uppercase tracking-widest">
                    <span className="text-primary">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    Read Full Article <ExternalLink className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>

            <aside className="space-y-12 h-fit lg:sticky lg:top-32">
              <div className="p-8 rounded-3xl border border-border bg-background">
                <h3 className="text-xl font-bold mb-6">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search posts..." 
                    className="w-full bg-secondary/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary transition-all"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div className="p-8 rounded-3xl border border-border bg-primary text-primary-foreground">
                <h3 className="text-xl font-bold mb-4 italic font-serif">Cosmo Intents Lab Blog</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-8">
                  Check out our agency blog for more insights on branding, digital products, and industry trends.
                </p>
                <a 
                  href="https://www.cosmoint24.com.ng/blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-background text-primary rounded-xl font-bold hover:scale-[1.02] transition-transform"
                >
                  Visit Agency Blog
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
