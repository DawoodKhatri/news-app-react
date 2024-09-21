import { render } from '@testing-library/react';
import { NewsContext } from '../providers/newsProvider';
import StoryList from '../components/storyList';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from "vitest";

describe('StoryList Component', () => {
  const mockStories = [
    {
      title: 'Story 1',
      time: 1632938400,
      url: 'https://example.com/story1',
      icon: 'https://example.com/icon1.png',
    },
    {
      title: 'Story 2',
      time: 1632942000,
      url: 'https://example.com/story2',
      icon: 'https://example.com/icon2.png',
    },
  ];

  const mockContextValue = {
    isLoading: false,
    stories: mockStories,
  };

  it('renders loading spinner when loading', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <NewsContext.Provider value={{ isLoading: true, stories: [] }}>
          <StoryList />
        </NewsContext.Provider>
      </BrowserRouter>
    );

    // Check if the spinner is displayed
    expect(getByRole('img', { hidden: true })).toHaveClass('fa-spinner');
  });

  it('renders the list of stories when loaded', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NewsContext.Provider value={mockContextValue}>
          <StoryList />
        </NewsContext.Provider>
      </BrowserRouter>
    );

    // Check if the story titles are displayed
    expect(getByText('Story 1')).toBeInTheDocument();
    expect(getByText('Story 2')).toBeInTheDocument();
  });

  it('displays "No Stories Found" when there are no stories', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NewsContext.Provider value={{ isLoading: false, stories: [] }}>
          <StoryList />
        </NewsContext.Provider>
      </BrowserRouter>
    );

    // Check if the "No Stories Found" message is displayed
    expect(getByText('No Stories Found')).toBeInTheDocument();
  });
});
