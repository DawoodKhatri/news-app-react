import { useContext } from "react";
import { NewsContext } from "../providers/newsProvider";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const [_, setSearchParams] = useSearchParams();
  const { isLoading, currentPage, totalPages } = useContext(NewsContext) as any;

  const handlePrevious = () => {
    setSearchParams((params) => {
      params.set("page", (currentPage - 1).toString());
      return params;
    });
  };

  const handleNext = () => {
    setSearchParams((params) => {
      params.set("page", (currentPage + 1).toString());
      return params;
    });
  };

  const handlePageSelect = (page: number) => {
    setSearchParams((params) => {
      params.set("page", page.toString());
      return params;
    });
  };

  if (isLoading || totalPages <= 1 || currentPage > totalPages) return <></>;
  return (
    <div className="flex items-center justify-end gap-4">
      {currentPage > 1 && (
        <button
          onClick={() => handlePrevious()}
          className="bg-primary text-white h-8 px-2 rounded-md"
        >
          Previous
        </button>
      )}

      {currentPage >= 2 && (
        <button
          onClick={() => handlePageSelect(1)}
          className="size-8 rounded-full"
        >
          {1}
        </button>
      )}

      {currentPage >= 4 && <div>...</div>}

      {currentPage >= 3 && (
        <button
          onClick={() => handlePageSelect(currentPage - 1)}
          className="size-8 rounded-full"
        >
          {currentPage - 1}
        </button>
      )}

      <button
        onClick={() => handlePageSelect(currentPage)}
        className="size-8 rounded-full bg-primary text-white"
      >
        {currentPage}
      </button>

      {currentPage + 1 < totalPages && (
        <button
          onClick={() => handlePageSelect(currentPage + 1)}
          className="size-8 rounded-full"
        >
          {currentPage + 1}
        </button>
      )}

      {currentPage + 2 < totalPages && <div>...</div>}

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageSelect(totalPages)}
          className="size-8 rounded-full"
        >
          {totalPages}
        </button>
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => handleNext()}
          className="bg-primary text-white h-8 px-2 rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
