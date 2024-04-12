import React from 'react';
import Card from '../Card/Card';
import './CardSection.css';

function CardSection({ title, cards }) {
  return (
    <section className="card-section">
      <h2>{title}</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
}

export default CardSection;
