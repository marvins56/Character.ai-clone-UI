import React from 'react';
import Slider from 'react-slick';
import './ContentSlider.css';
import Card from '../Card/Card'; // Make sure you have a Card component or adjust accordingly

function ContentSlider() {
  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Replace with the actual content for your slider cards
  const slides = [
    {
      id: 1,
      title: 'Trip Planner',
      content: 'Ready to orchestrate your dream journey.'
    },
    {
      id: 2,
      title: 'Language Liaison',
      content: 'Here to help you bridge language gaps and connect cultures...'
    },
    // ...other slides
  ];

  return (
    <div className="content-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <Card title={slide.title} description={slide.content} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ContentSlider;
