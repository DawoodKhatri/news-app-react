import { render } from "@testing-library/react";
import Navbar from "../components/navbar";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Navbar Component", () => {
  it("renders the navbar with the correct text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByText("NEWS")).toBeInTheDocument();
  });
});
