import Hero from '../Hero/Hero';
import './MainContent.css';
import CardSlider from '../Card/CardSlider';
import CardsGrid from '../Card/CardsGrid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainContent() {

  return (
    <div className="main-content">
      <Hero />
    <CardSlider />
    <CardsGrid />


    </div>
  );
}

export default MainContent;