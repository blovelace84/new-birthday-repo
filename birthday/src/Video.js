import React from "react";
import "./Video.css";


const Video = ({videoUrl}) => {
  const handleNavigate = () => {
    window.location.href = "/";
  };
  return (
    <div className="video-container">
      <video className="video" controls>
        <source src={videoUrl} type="video/mp4"></source>
      </video>
      <button className="navigate-button" onClick={handleNavigate}>
        Go to Homepage
      </button>
    </div>
  );
}

export default Video;