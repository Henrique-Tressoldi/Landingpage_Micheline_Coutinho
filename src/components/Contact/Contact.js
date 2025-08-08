// Este código usa classes do Tailwind CSS para estilização e layout,
// eliminando a necessidade do arquivo Contact.css.
// Os ícones do Font Awesome foram substituídos por SVGs inline para evitar erros de dependência.

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-8 rounded-lg shadow-xl max-w-7xl mx-auto my-12 font-sans">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Entre em Contato</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Seção de informações de contato, alinhada à esquerda em telas grandes */}
          <div className="contact-info w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">
              Estamos prontos para cuidar do seu sorriso. Agende sua consulta
              hoje mesmo!
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-700">
                {/* Ícone de localização em SVG inline com tamanho corrigido */}
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-3 mt-1 flex-shrink-0" style={{ width: '20px', height: '20px' }} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <a
                  href="https://www.google.com/maps/place/Av.+Padre+Adolfo+Rohl,+2251+-+St.+1,+Jaru+-+RO,+76890-000,+Brazil/data=!4m2!3m1!1s0x933081e649e75129:0x854a8616183495d0?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Av. Padre Adolfo Rohl, 2251, Setor 1, Jaru - RO
                </a>
              </li>
              <li className="flex items-center text-gray-700">
                {/* Ícone de telefone em SVG inline com tamanho corrigido */}
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-3 flex-shrink-0" style={{ width: '20px', height: '20px' }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.373 18 2 12.627 2 6V3z" />
                </svg>
                <span>(69) 99210-4719</span>
              </li>
              <li className="flex items-center text-gray-700">
                {/* Ícone de e-mail em SVG inline com tamanho corrigido */}
                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 mr-3 flex-shrink-0" style={{ width: '20px', height: '20px' }} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>michelinecoutinho@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Seção do mapa, agora com tamanho fixo e alinhado à direita */}
          <div className="contact-map w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg flex justify-center lg:justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28602.95372612347!2d-62.47494970696537!3d-10.431766591140931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93cbeabfde6b22b1%3A0x26a9734013537023!2sAv.%20Padre%20Adolpho%20Rohl%2C%202251%20-%20St.%201%2C%20Jaru%20-%20RO%2C%2076890-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1754513802359!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Micheline Coutinho"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
