import React from "react";

const Bio = ({name, bio, avatar}) => {
    return(
        <div className="bio-container">
            <img src={avatar} alt={`${name}'s avatar`} className="bio-avatar"></img>
            <h2 className="bio-name">{name}</h2>
            <p className="bio-descriptions">{bio}</p>
        </div>
    );
}

export default Bio;