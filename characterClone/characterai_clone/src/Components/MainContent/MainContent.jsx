import React from 'react';
import Hero from '../Hero/Hero';
import CardSection from '../CardSection/CardSection';
import './MainContent.css';

function MainContent() {
  const forYouCards = [
    { title: 'Card Title 1', description: 'Description here' },
    { title: 'Card Title 2', description: 'Description here' },
    // Add more cards...
  ];

  return (
    <main className="main-content">
      <Hero />
      <CardSection title="For you" cards={forYouCards} />
      {/* Add other sections as needed */}
    </main>
  );
}

export default MainContent;
