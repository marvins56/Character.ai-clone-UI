import React from 'react';
import Slider from 'react-slick';
import Card from './Card'; // Adjust the path as needed to your Card component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css'; // Assuming you store your CSS in this file

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      />
    );
  }

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    
  return (
    <Slider {...settings}>
      {[...Array(10)].map((_, index) => (
        <Card
          key={index}
          imageUrl={`https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600`}
          title={`Card Title ${index}`}
          author={`Author ${index}`}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          numberOfComments={42 + index}
        />
      ))}
    </Slider>
  );
};

export default CardSlider;
