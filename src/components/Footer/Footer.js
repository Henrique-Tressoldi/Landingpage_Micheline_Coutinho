import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Desenvolvido com excelência. © {new Date().getFullYear()} Dra. Micheline Menezes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;