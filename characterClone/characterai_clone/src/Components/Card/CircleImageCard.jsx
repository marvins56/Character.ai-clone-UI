import React from 'react';
import './Card.css'; // Import the CSS for styling

const CircleImageCard = ({ imageUrl, title, author }) => {
  return (
    <div className="circle-card">
      <img src={imageUrl} alt={title} className="circle-image"/>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
};

export default CircleImageCard;
