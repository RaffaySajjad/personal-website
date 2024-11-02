import { useQuery } from "@tanstack/react-query";
import { Blog } from "../types/Blog";
import { WordpressClient } from "../utils/WordpressClient";

export const useBlogs = () => {
  const getBlogs = () =>
    WordpressClient.get("posts")
      .then((res) => res.data)
      .then((data) => data.posts)
      .catch((err) => {
        console.error(err);
        return [];
      });

  const query = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    // Stale time is 1 hour
    staleTime: 1000 * 60 * 60,
  });

  const blogs: Blog[] = query.data;

  return {
    blogs,
    isLoading: query.isLoading,
  };
};
