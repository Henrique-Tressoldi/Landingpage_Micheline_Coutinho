import React from 'react';
import './Services.css';

function Services() {
  const servicesList = [
    { title: "Odontologia Clínica Geral", description: "O cuidado diário para a sua saúde bucal, de limpezas a pequenos procedimentos." },
    { title: "Restaurações Estéticas", description: "Devolvemos a beleza e a função de dentes danificados com materiais de alta qualidade." },
    { title: "Facetas em Resina Composta", description: "Transforme o formato e a cor dos seus dentes de forma rápida e segura." },
    { title: "Tratamento de Canal (Endodontia)", description: "Solução especializada para a dor e infecções, salvando seu dente natural." },
    { title: "Próteses em Geral e Protocolo", description: "Restaure a função e a estética do seu sorriso com próteses personalizadas." },
    { title: "Implantes Dentários", description: "A solução mais moderna para substituir dentes perdidos, garantindo estabilidade e naturalidade." },
    { title: "Ortodontia", description: "Alinhamos seu sorriso para uma mordida perfeita e uma estética harmoniosa." },
    { title: "Harmonização Facial", description: "Procedimentos estéticos para realçar a beleza e a simetria do seu rosto." },
    { title: "Lasers", description: "Tecnologia avançada para tratamentos mais precisos, rápidos e confortáveis." },
    { title: "Clareamento Dental", description: "Deixe seu sorriso mais branco e radiante com tratamentos seguros e eficazes." },
    { title: "Cirurgias Simples e de Siso", description: "Procedimentos cirúrgicos realizados com segurança e o máximo de conforto." }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Nossos Procedimentos</h2>
        <p className="section-subtitle">
          Oferecemos uma gama completa de serviços odontológicos, com foco na sua saúde e bem-estar.
        </p>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="notice-text">
          <p>
            **Aviso:** Cursos de aperfeiçoamento nas áreas de dentística restauradora, cirurgia oral menor e endodontia. Não são especialidades.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;