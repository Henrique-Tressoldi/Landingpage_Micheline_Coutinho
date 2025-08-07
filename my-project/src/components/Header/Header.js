import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <h1 className="logo">
          Dra. Michelline Menezes
        </h1>
        <nav className="nav-menu">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Procedimentos</a></li>
            <li><a href="#before-after">Resultados</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;