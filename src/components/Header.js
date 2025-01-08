import React, { useState } from 'react';
import './../styles/Header.css';

const Header = ({ toggleLanguage, language }) => {
  const [copied, setCopied] = useState(false);

  const toggleEmailPopup = () => {
    const popup = document.getElementById('email-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
  };

  const copyToClipboard = () => {
    const email = document.getElementById('email-address').textContent;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
        const popup = document.getElementById('email-popup');
        if (popup) popup.style.display = 'none';
      }, 0);
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="language-button" onClick={toggleLanguage}>
          {language === 'es' ? 'ES - Cambiar a inglés' : 'EN - Switch to Spanish'}
        </button>
      <div className="icon-container">
        <div class="gmail-icon-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/Mail.png`}
            alt="Gmail"
            className="header-icon"
            onClick={toggleEmailPopup}
          />
          <div id="email-popup" className="email-popup">
            <p id="email-address">diegorodgar17@gmail.com</p>
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {language === 'es' ? 'Copiar' : 'Copy'}
            </button>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/hidiegorodriguezgarcia/"
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
      </div>
    </header>
  );
};

export default Header;
