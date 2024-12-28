// Home Component
// Ruta: src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = ({ language }) => {
  return (
    <section id="home" className="home">
      <h2>{language === 'es' ? 'Bienvenido a mi portfolio' : 'Welcome to my portfolio'}</h2>
      <p>
        {language === 'es'
          ? 'Soy un ingeniero de datos apasionado por la productividad y el aprendizaje continuo.'
          : 'I am a data engineer passionate about productivity and continuous learning.'}
      </p>
    </section>
  );
};

export default Home;