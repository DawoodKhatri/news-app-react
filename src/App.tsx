import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import NewsProvider from "./providers/newsProvider";
import StoryList from "./components/storyList";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NewsProvider>
        <main className="w-full max-w-screen-xl mx-auto p-8 space-y-8">
          <StoryList />
        </main>
      </NewsProvider>
    </BrowserRouter>
  );
};

export default App;
