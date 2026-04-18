import { ExternalLink, Calendar, User, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { format } from "date-fns";

const BlogSection = () => {
  const { blogPosts, isLoading } = usePortfolioData();
  
  const displayPosts = blogPosts?.slice(0, 3) || [];

  return (
    <section id="blog" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto lg:px-6">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Insights</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-16">
          Latest from my <span className="font-serif italic text-primary">blog</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {isLoading ? (
            <div className="col-span-full flex items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : displayPosts.length === 0 ? (
            <div className="col-span-full p-12 text-center rounded-3xl border border-dashed border-border bg-background">
              <p className="text-muted-foreground">Stay tuned! Insightful content is on its way.</p>
            </div>
          ) : (
            displayPosts.map((post, i) => (
              <div
                key={post.id}
                className="group flex flex-col p-8 rounded-2xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.published_at ? format(new Date(post.published_at), 'MMM dd, yyyy') : 'Recently'}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {post.author || 'Favour Olorunfemi'}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                <a
                  href={post.external_link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read Full Story <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View All Posts
          </Link>
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
