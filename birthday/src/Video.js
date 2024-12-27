import React from "react";
import { useNavigate } from 'react-router-dom';

const VideoPlayer = ({src, controls = true, autoplay = false, muted= false}) => {
  const navigate = useNavigate();
  return (
    <video src={src} controls={controls} autoplay={autoplay}></video>,
    <div className="vid-button-container">
        <button className='vid-button' onClick={() => navigate('/')}>Return to Homepage</button>
      </div>
  );
};

export default VideoPlayer;