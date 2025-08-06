import React from 'react';
import './Contact.css';

function Contact() {
  const phoneNumber = '69992104719';
  const whatsappLink = `https://wa.me/55${phoneNumber}`;
  const instagramLink = 'https://www.instagram.com/dra.micheline.menezes/';

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <div className="contact-info">
          <h2>Pronto para Começar a Transformação?</h2>
          <p>
            Entre em contato para agendar sua consulta. Estamos localizados no coração de Jaru e prontos para recebê-lo.
          </p>
          <div className="contact-details">
            <p>
              <strong>Endereço:</strong><br />
              Avenida Padre Adolfo Rohl, 2251<br />
              Setor 1, Jaru - RO, 76890-000
            </p>
            <p>
              <strong>WhatsApp:</strong><br />
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">(69) 99210-4719</a>
            </p>
            <p>
              <strong>Instagram:</strong><br />
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">@dra.micheline.menezes</a>
            </p>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Localização da Clínica"
            src="http://googleusercontent.com/maps.google.com/3"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;