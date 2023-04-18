import React from "react";

const StoryDetail = ({ story }) => {
  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <li>
      <a href={story.url} target="_blank" rel="noopener noreferrer">
        {story.title}
      </a>
    </li>
  );
};

export default StoryDetail;


