// Header Component
// Ruta: src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ toggleLanguage, language }) => {
  return (
    <header className="header">
      <h1>Portfolio de Diego Rodríguez</h1>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#about">Sobre mí</a></li>
        </ul>
      </nav>
      <button onClick={toggleLanguage}>
        {language === 'es' ? 'EN' : 'ES'}
      </button>
    </header>
  );
};

export default Header;
