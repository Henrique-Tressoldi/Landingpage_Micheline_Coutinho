import React, { useState } from 'react';
import './BeforeAfter.css';

function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleSliderMove = (e) => {
    if (!isDragging) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    let x = (e.clientX || e.touches[0].clientX) - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const position = (x / rect.width) * 100;
    setSliderPosition(position);
  };

  return (
    <section id="before-after" className="before-after-section">
      <div className="container">
        <h2 className="section-title">Resultados que Transformam Vidas</h2>
        <p className="section-subtitle">
          A verdadeira mudança vai além do sorriso, ela acontece na sua autoestima e na forma como você interage com o mundo.
        </p>
        <div
          className="before-after-slider"
          onMouseMove={handleSliderMove}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchMove={(e) => handleSliderMove(e.touches[0])}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="image-container after" style={{ width: `${100 - sliderPosition}%` }}>
            <img src="/assets/depois1.jpg" alt="Depois do tratamento odontológico" />
          </div>
          <div className="image-container before" style={{ width: `${sliderPosition}%` }}>
            <img src="/assets/antes1.jpg" alt="Antes do tratamento odontológico" />
          </div>
          <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
            <div className="slider-button"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;