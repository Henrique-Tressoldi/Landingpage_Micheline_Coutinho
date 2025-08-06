import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="about-image">
          <img src="/assets/micheline.jpg" alt="Dra. Michelline Menezes, Odontologia Especializada" />
        </div>
        <div className="about-text">
          <h2>Sobre a Dra. Michelline Menezes</h2>
          <p>
            Com anos de experiência e uma busca incessante por excelência, a Dra. Michelline Menezes oferece um atendimento humanizado e focado em resultados. Acreditamos que a odontologia é a arte de transformar vidas, devolvendo a confiança e a alegria de sorrir.
          </p>
          <p>
            Nossa clínica é um ambiente de acolhimento e tecnologia de ponta, onde cada tratamento é planejado de forma personalizada para atender às suas necessidades únicas. De restaurações a procedimentos estéticos, nosso compromisso é com a sua satisfação e bem-estar.
          </p>
          <p className="cro-info">
            **CRO-RO 04011**
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;