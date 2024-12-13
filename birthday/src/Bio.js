import React from "react";

function Bio({ name, bio, avatar, presentationUrl }) {
  return (
    <div className="bio-container">
      <img src={avatar} alt={`${name}'s avatar`} className="bio-avatar" />
      <h2 className="bio-name">{name}</h2>
      <p className="bio-description">{bio}</p>

      <div className="presentation-container">
        <h3>Presentation</h3>
        <iframe
          src={"https://1drv.ms/p/c/a9e4518eaf9be0b2/EWkayR-47o1KquKqamuNxmwBPGhPo9n4p8ulZDUQy47NUw?e=fdoxu7"}
          title={`${name}'s Presentation`}
          width="100%"
          height="480"
          allowFullScreen
          
        ></iframe>
      </div>
    </div>
  );
}

export default Bio;
