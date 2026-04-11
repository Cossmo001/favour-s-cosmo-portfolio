import { ExternalLink, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Psychology of a Minimalist Motion",
    excerpt: "Understanding the balance between simplicity and motion to create ethereal digital experiences.",
    author: "Favour Olorunfemi",
    date: "April 11, 2026",
    link: "https://www.cosmoint24.com.ng/blog/psychology-minimalist-motion",
  },
  {
    title: "The Golden Ratio in Digital Layouts",
    excerpt: "Exploring the mathematical perfection behind balanced and visually pleasing digital architectures.",
    author: "Favour Olorunfemi",
    date: "April 11, 2026",
    link: "https://www.cosmoint24.com.ng/blog/golden-ratio-digital-layouts",
  },
  {
    title: "Strategic Growth: Beyond Just Development",
    excerpt: "How to combine technical expertise with marketing insights to drive sustainable business success.",
    author: "Favour Olorunfemi",
    date: "March 12, 2026",
    link: "https://www.cosmoint24.com.ng/blog/strategic-growth",
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
              className="group flex flex-col p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow line-clamp-3 text-sm">
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
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://www.cosmoint24.com.ng/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Visit Cosmo Intents Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
