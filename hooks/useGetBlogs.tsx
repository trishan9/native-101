import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const useGetBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBlogsMutation = useMutation({
    mutationFn: async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://apigenerator.dronahq.com/api/j9pJMuQx/data"
        );
        const result = await response.json();
        setBlogs(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const getBlogs = () => {
    getBlogsMutation.mutate();
  };

  return {
    getBlogs,
    blogs,
    isLoading,
  };
};

export default useGetBlogs;
