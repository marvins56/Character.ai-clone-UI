import React from 'react';
import Slider from 'react-slick';
import Card from '../Card/Card'; // Adjust the import path as necessary
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sliders.css'; // Make sure you have this for additional styling if needed

function Sliders ({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // Responsive breakpoints can be added here
  };

  return (
    <div className="for-you-slider">
      <Sliders {...settings}>
        {slides.map(slide => (
          <Card key={slide.id} image={slide.image} title={slide.title} description={slide.description} />
        ))}
      </Sliders>
    </div>
  );
}

export default Sliders;
