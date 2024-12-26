import React from "react";

const VideoPlayer = ({src, controls = true, autoplay = false, muted= false}) => {
  return (
    <video src={src} controls={controls} autoplay={autoplay}></video>
  );
};

export default VideoPlayer;