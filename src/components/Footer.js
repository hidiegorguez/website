import React from 'react';
import './../styles/Footer.css';

const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <p>
        {language === 'es' ? 'Hecho por Diego Rodríguez' : 'Made by Diego Rodríguez'}
      </p>
    </footer>
  );
};

export default Footer;
