import React from 'react';
import './Header.css';

const Header = ({ toggleLanguage, language }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>Diego Rodríguez García</h1>
      <div className="icon-container">
        <a href="mailto:tu_correo@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src={`${process.env.PUBLIC_URL}/images/Mail.png`}
            alt="Gmail"
            className="header-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/diegorodríguez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            alt="LinkedIn"
            className="header-icon"
          />
        </a>
        <a
          href="https://github.com/hidiegorguez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/github.png`}
            alt="GitHub"
            className="header-icon"
          />
        </a>
      </div>
        <button className="language-button" onClick={toggleLanguage}>
          {language === 'es' ? 'ES - Cambiar a inglés' : 'EN - Switch to Spanish'}
        </button>
      </div>
    </header>
  );
};

export default Header;
