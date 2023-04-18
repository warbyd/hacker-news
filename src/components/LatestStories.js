import React, { useState, useEffect } from "react";
import StoryDetail from "./StoryDetail";

const LatestStories = () => {
  const [latestStories, setLatestStories] = useState([]);

  useEffect(() => {
    const fetchLatestStories = async () => {
      try {
        const timestamp = new Date().getTime(); // Get current timestamp
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/topstories.json?_=${timestamp}` // Append timestamp as query parameter
        );
        const data = await response.json();

        // Fetch all story details using Promise.all()
        const storyPromises = data.map(async (storyId) => {
          const storyResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?_=${timestamp}` // Append timestamp as query parameter
          );
          const storyData = await storyResponse.json();
          return storyData;
        });

        const storyDetails = await Promise.all(storyPromises);

        setLatestStories(storyDetails);
      } catch (error) {
        console.error("Error fetching latest stories:", error);
      }
    };
    fetchLatestStories();
  }, []);

  if (latestStories.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Latest Stories</h1>
      <ul>
        {latestStories.map((story) => (
          <StoryDetail key={story.id} story={story} />
        ))}
      </ul>
    </div>
  );
};

export default LatestStories;
