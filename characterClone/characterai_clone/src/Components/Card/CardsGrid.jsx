 //   { id: 4, imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 4', author: 'Author 4' }
 import React from 'react';
 import Slider from 'react-slick';
 import CircleImageCard from './CircleImageCard';
 import './Card.css'; // Import the CSS for styling import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 
 const CardsGrid = () => {
   // Slider settings
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 8, // Shows 8 columns at once
     slidesToScroll: 8, // Scrolls 8 columns at a time
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 4
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       }
     ]
   };
 
   // Example data for 16 cards (8 columns of 2 cards each)
   const cardsData = [
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 1', author: 'Author 1' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 2', author: 'Author 2' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600',title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 10', author: 'Author 10' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 11', author: 'Author 11' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 12', author: 'Author 12' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 13', author: 'Author 13' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 14', author: 'Author 14' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 15', author: 'Author 15' },
     { imageUrl: 'https://images.pexels.com/photos/18063294/pexels-photo-18063294.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Card Title 16', author: 'Author 16' },
   ];
 
   return (
     <Slider {...settings}>
       {Array.from({ length: Math.ceil(cardsData.length / 2) }, (_, i) => (
         <div className="slide-column" key={i}>
           <CircleImageCard {...cardsData[i * 2]} />
           {cardsData[i * 2 + 1] ? <CircleImageCard {...cardsData[i * 2 + 1]} /> : null}
         </div>
       ))}
     </Slider>
   );
 };
 
 export default CardsGrid;
 