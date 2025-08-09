import React, { useState, useRef } from 'react';
import './BeforeAfter.css';

function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const updateSlider = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) updateSlider(e.clientX);
  };

  const handleTouchMove = (e) => {
    updateSlider(e.touches[0].clientX);
  };

  return (
    <section id="before-after" className="before-after-section">
      <div className="container">
        <h2 className="section-title">Resultados que Transformam Vidas</h2>
        <p className="section-subtitle">
          A verdadeira mudança vai além do sorriso, ela acontece na sua autoestima e na forma como você interage com o mundo.
        </p>

        <div
          ref={containerRef}
          className="before-after-slider"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Imagem depois */}
          <img
            src="/assets/depois1.jpg"
            alt="Depois"
            className="after-img"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          />

          {/* Imagem antes */}
          <img
            src="/assets/antes1.jpg"
            alt="Antes"
            className="before-img"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          />

          {/* Linha divisória */}
          <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
            <div className="slider-button"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;
