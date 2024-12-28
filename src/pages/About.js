import React from 'react';
import './About.css';

const About = ({ language }) => {
  return (
    <section id="about" className="about">
      <h2>{language === 'es' ? 'Sobre mí' : 'About Me'}</h2>
      <p>
        {language === 'es'
          ? 'Soy un ingeniero de datos con experiencia en machine learning, automatización y análisis de datos.'
          : 'I am a data engineer with experience in machine learning, automation, and data analysis.'}
      </p>
    </section>
  );
};

export default About;