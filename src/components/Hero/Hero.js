// src/components/Hero/Hero.js

import React from 'react';
import './Hero.css';

function Hero() {
  const phoneNumber = '69992104719';
  const whatsappLink = `https://wa.me/55${phoneNumber}`;

  return (
    <section 
      id="hero" 
      className="hero-section"
      // Caminho corrigido para a pasta public
      style={{ backgroundImage: `url('/assets/micheline.jpg')` }}
    >
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Seu Sorriso É a Nossa Prioridade</h1>
          <p>
            Odontologia Especializada com a experiência e cuidado que você merece. Transformamos sorrisos e elevamos a sua autoestima.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
            Agende Sua Avaliação via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;