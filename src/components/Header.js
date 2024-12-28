import React from 'react';
import './Header.css';

const Header = ({ toggleLanguage, language }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Diego Rodríguez Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#home">{language === 'es' ? 'Inicio' : 'Home'}</a></li>
            <li><a href="#about">{language === 'es' ? 'Sobre mí' : 'About'}</a></li>
            <li><a href="#projects">{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
          </ul>
        </nav>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'es' ? 'EN - Switch to English' : 'ES - Cambiar a Español'}
        </button>
      </div>
    </header>
  );
};

export default Header;