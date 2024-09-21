import { render, fireEvent } from "@testing-library/react";
import Pagination from "../components/pagination";
import { NewsContext } from "../providers/newsProvider";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Pagination Component", () => {
  const contextValue = {
    isLoading: false,
    currentPage: 2,
    totalPages: 5,
  };

  it("renders pagination buttons correctly", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NewsContext.Provider value={contextValue}>
          <Pagination />
        </NewsContext.Provider>
      </BrowserRouter>
    );

    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
    expect(getByText("2")).toHaveClass("bg-primary");
  });

  it("calls the correct function on next click", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NewsContext.Provider value={contextValue}>
          <Pagination />
        </NewsContext.Provider>
      </BrowserRouter>
    );

    fireEvent.click(getByText("Next"));
  });
});
