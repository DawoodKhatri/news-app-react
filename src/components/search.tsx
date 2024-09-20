import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleSearch = () => {
    if (!query.trim()) return;

    setSearchParams({ search: query });
  };
  const handleClear = () => {
    setQuery("");
    setSearchParams({});
  };

  return (
    <div className="ml-auto md:max-w-md flex gap-4 items-center">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search stories..."
          className="w-full min-w-0 border border-gray-400 rounded-md px-4 pr-8 h-10 outline-primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <div className="h-full absolute top-0 right-0 flex items-center">
            <button
              onClick={handleClear}
              className="text-red-500 font-semibold text-lg px-3"
            >
              <FontAwesomeIcon icon={faX} size="sm" />
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="bg-primary text-white rounded-md h-10 px-4 text-lg hover:bg-opacity-75 transition-all ease-in-out duration-150"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
