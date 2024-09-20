import { useContext } from "react";
import { NewsContext } from "../providers/newsProvider";
import StoryCard from "./storyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search";
import Pagination from "./pagination";

const StoryList = () => {
  const { isLoading, stories } = useContext(NewsContext) as any;

  if (isLoading)
    return (
      <div className="w-full aspect-video flex justify-center items-center">
        <div className="size-8 animate-spin">
          <FontAwesomeIcon icon={faSpinner} size="2xl" />
        </div>
      </div>
    );

  return (
    <>
      <SearchBar />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {stories.map((story: any, index: number) => (
          <StoryCard key={index} {...story} />
        ))}
      </ul>

      {stories.length === 0 && (
        <div>
          <p className="text-xl text-center text-gray-400">No Stories Found</p>
        </div>
      )}

      <Pagination />
    </>
  );
};

export default StoryList;
