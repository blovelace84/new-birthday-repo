import React from 'react';
import './Bio.css';

const Bio = ({ name, imageUrl, alt }) => {
  return (
    <div className="bio-container">
      <h1>{name}</h1>
      <img src={imageUrl} alt={alt} className="bio-image" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        suscipit, nunc id consectetur consectetur, elit elit consectetur
        consectetur, elit elit elit. Nullam suscipit, nunc id consectetur
        consectetur, elit elit consectetur consectetur, elit elit elit.</p>
      <div className="bio-button-container">
        <button className="bio-button">Click Me</button>
      </div>
    </div>
  );
};

export default Bio;