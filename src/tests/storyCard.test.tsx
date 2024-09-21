import { render } from "@testing-library/react";
import StoryCard from "../components/storyCard";
import { describe, expect, it } from "vitest";

describe("StoryCard Component", () => {
  const mockStory = {
    title: "Test Story Title",
    time: 1632938400,
    url: "https://example.com/story",
    icon: "https://example.com/icon.png",
  };

  it("renders the story title, date, and icon correctly", () => {
    const { getByText, getByRole } = render(<StoryCard {...mockStory} />);

    // Check if the title is rendered
    expect(getByText("Test Story Title")).toBeInTheDocument();

    // Check if the date is rendered
    expect(
      getByText(new Date(mockStory.time * 1000).toDateString())
    ).toBeInTheDocument();

    // Check if the icon image is rendered
    const icon = getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", mockStory.icon);
  });

  it("renders the story URL in the iframe and link", () => {
    const { getByRole, getByText } = render(<StoryCard {...mockStory} />);

    // Check if the iframe has the correct src attribute
    const iframe = getByRole("iframe");
    expect(iframe).toHaveAttribute("src", mockStory.url);

    // Check if the "Read More" link is rendered correctly
    const link = getByText("Read More");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockStory.url);
  });
});
