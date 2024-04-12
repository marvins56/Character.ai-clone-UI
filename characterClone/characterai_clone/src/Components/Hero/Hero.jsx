import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="welcome-column">
        <h2>Welcome back,</h2>
      </div>
      <div className="search-column">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for Characters"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
