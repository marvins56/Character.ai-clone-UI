import React from 'react';
import { FaComment } from 'react-icons/fa'; // Importing Font Awesome Comment icon

import './Card.css';


const Card = ({ imageUrl, title, author, description, numberOfComments }) => {
  return (
    <div className="card">
        <img src={imageUrl} className="card-image" alt={title} />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-author">By {author}</p>
            <p className="card-description">{description}</p>
            <div className="card-comments" onClick={() => alert('Navigate to comments or show modal')}>
                <FaComment /> <span>{numberOfComments}</span>
            </div>
        </div>
    </div>
  );
};

export default Card;
