import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoryDetail from "./components/StoryDetail";
import LatestStories from "./components/LatestStories";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the home page */}
        <Route path="/latest-stories" element={<LatestStories />} /> {/* Route for the latest stories page */}
        <Route path="/story/:storyId" element={<StoryDetail />} /> {/* Route for the story detail page */}
      </Routes>
    </Router>
  );
};

export default App;
