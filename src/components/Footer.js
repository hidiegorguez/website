// Footer Component
// Ruta: src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <p>
        {language === 'es' ? 'Hecho por Diego Rodríguez' : 'Made by Diego Rodríguez'}
      </p>
      <ul>
        <li><a href="https://www.linkedin.com/in/diegorodr%C3%ADguezgarc%C3%ADa" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/hidiegorguez" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </footer>
  );
};

export default Footer;