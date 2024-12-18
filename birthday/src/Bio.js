import React, { useState } from "react";
import './Bio.css';

const Bio = ({name, description, imageUrl}) => {

  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => {
    setShowMore(!showMore);
  }
  return (
    <div className="bio-container">
      {imageUrl && <img src={imageUrl} alt={`${name}'s profile`} className="bio-image"></img>}
      <h2 className="bio-name">{name}</h2>
      <p className="bio-description">{description}</p>

      <button className="bio-button" onClick={handleToggle}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {showMore && (
        <p className="bio-extra">January 1, 1945 at 12:20 am in the basement of Dunn Hospital on Ellis Avenue, Naomi Delores Spece arrived in this world.  The daughter of the late Luther Franklin Spence and Katie Naomi Freeman Spence, “Teenie Bow” was most likely the first child born in the new year.  But, it was 1945 and Jim Crow ruled the South.  Born into segregation, she would come of age during the height of the Civil Rights Movement in the 1960s.</p>
      )}
    </div>
  );
};

export default Bio;