import React, { useState, useEffect } from 'react';
import Hero from '../Hero/Hero';
import Sliders from '../Slider/Sliders';
import './MainContent.css';

function MainContent() {
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    fetch('../data/slides.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data);
        setSlidesData(data);
      })
      .catch(error => console.error('Error fetching slides data:', error));
  }, []);
  
  return (
    <div className="main-content">
      <Hero />
      {slidesData.length > 0 && <Sliders slides={slidesData} />}
      {/* Other components can be added here */}
    </div>
  );
}

export default MainContent;