import { ExternalLink, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Psychology of a Minimalist Motion",
    excerpt: "Understanding the balance between simplicity and motion to create ethereal digital experiences.",
    author: "Favour Olorunfemi",
    date: "April 11, 2026",
    link: "https://cosmoint24.com.ng/blog/the-psychology-of-a-minimalist-motion",
  },
  {
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "A deep dive into the architecture and best practices for creating performant cross-platform applications.",
    author: "Favour Olorunfemi",
    date: "March 25, 2026",
    link: "https://cosmoint24.com.ng/blog/building-scalable-mobile-apps-with-react-native",
  },
  {
    title: "Strategic Growth: Beyond Just Development",
    excerpt: "How to combine technical expertise with marketing insights to drive sustainable business success.",
    author: "Favour Olorunfemi",
    date: "March 12, 2026",
    link: "https://cosmoint24.com.ng/blog/strategic-growth",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto lg:px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Insights</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Latest from my <span className="font-serif italic text-primary">blog</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                <img 
                  src="/placeholder.svg" 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-8 pt-0 -mt-8 relative z-10">
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm w-fit px-3 py-1 rounded-full border border-border">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read Full Story <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://cosmoint24.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Visit Cosmo Intent Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
