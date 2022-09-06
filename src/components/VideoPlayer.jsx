import ReactPlayer from "react-player";

import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div
      style={{
        padding: "25px",
        witdh: "50%",
        height: "auto",
        margin: "0 auto",
      }}
    >
      <ReactPlayer url={videoUrl} controls={true} playing={true} />
    </div>
  );
};

export default VideoPlayer;
