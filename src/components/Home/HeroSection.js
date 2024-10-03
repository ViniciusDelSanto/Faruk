import React from 'react';
import './HeroSection.css';
import HeroSectionImage from '../../assets/images/HeroSectionImage.jpg'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Bem-vindo ao Faruk</h1>
        <p>Explore o melhor da comida árabe tradicional, com um toque moderno. Sinta-se em casa enquanto descobre sabores autênticos preparados com paixão.</p>
        <button className="cta-button">Explore o Cardápio</button>
      </div>
      <div className="hero-image">
        <img src={HeroSectionImage} alt="Comida árabe deliciosa" />
      </div>
    </div>
  );
};

export default HeroSection;
