import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePortfolioData = () => {
  const projectsQuery = useQuery({
    queryKey: ["portfolio_projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio_projects")
        .select("*")
        .order("priority", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const blogPostsQuery = useQuery({
    queryKey: ["portfolio_blog_posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio_blog_posts")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const siteSettingsQuery = useQuery({
    queryKey: ["portfolio_settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("portfolio_settings")
        .select("*");
      if (error) throw error;
      
      // Transform array to a convenient object
      return data.reduce((acc: any, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
    },
  });

  return {
    projects: projectsQuery.data,
    blogPosts: blogPostsQuery.data,
    settings: siteSettingsQuery.data,
    isLoading: projectsQuery.isLoading || blogPostsQuery.isLoading || siteSettingsQuery.isLoading,
    isError: projectsQuery.isError || blogPostsQuery.isError || siteSettingsQuery.isError,
    refetch: () => {
      projectsQuery.refetch();
      blogPostsQuery.refetch();
      siteSettingsQuery.refetch();
    }
  };
};
