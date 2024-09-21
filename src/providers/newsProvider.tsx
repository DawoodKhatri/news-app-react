import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const NewsContext = createContext({});

const NewsProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ currentPage, totalPages }, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [stories, setStories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const { page, search } = Object.fromEntries(searchParams.entries());

    if (!page) {
      setSearchParams((params) => {
        params.set("page", "1");
        return params;
      });
      return;
    }

    if (search) {
      fetchSearchedStories(search, +page);
    } else {
      fetchNewestStories(+page);
    }
  }, [searchParams]);

  const fetchNewestStories = async (page: number = 1) => {
    try {
      setIsLoading(true);

      const response = await (
        await fetch(
          `${
            import.meta.env.VITE_API_URL || "http://localhost:5000"
          }/newest-stories?page=${page}`
        )
      ).json();

      const { meta, data } = response;

      setPagination({
        currentPage: meta.page,
        totalPages: meta.totalPages,
      });
      setStories(data.stories);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSearchedStories = async (query: string, page: number = 1) => {
    try {
      setIsLoading(true);

      const response = await (
        await fetch(
          `${
            import.meta.env.VITE_API_URL || "http://localhost:5000"
          }/search?query=${query}&page=${page}`
        )
      ).json();

      const { meta, data } = response;

      setPagination({
        currentPage: meta.page,
        totalPages: meta.totalPages,
      });
      setStories(data.stories);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NewsContext.Provider
      value={{ isLoading, currentPage, totalPages, stories }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
