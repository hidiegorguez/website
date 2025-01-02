import React from 'react';
import './../styles/Home.css';

const Home = ({ language }) => {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <img src={process.env.PUBLIC_URL + '/images/home-welcome.png'} alt="Diego" className="home-photo" />
        <div className="home-text">
          <h2>{language === 'es' ? 'Diego Rodríguez García' : 'Diego Rodríguez García'}</h2>
          <h3>{language === 'es' ? 'Matemático / Científico de Datos / Desarrollador Python' : 'Mathematician / Data Scientist / Python Developer'}</h3>
          <p>
            {language === 'es'
              ? 'Apasionado por el mundo de los datos y la informática, comprometido con el aprendizaje continuo y el desarrollo profesional. Agradecido de dedicarme al "mundo del mañana".'
              : 'Passionate about the world of data and computing, committed to continuous learning and development, and fortunate to dedicate myself to the "world of tomorrow".'}
          </p>
          <p>
            {language === 'es'
              ? 'Graduado en Ciencias Matemáticas, con formación adicional en Ciencia de Datos y Machine Learning. Actualmente trabajo como Científico / Ingeniero de Datos en Publicis Groupe.'
              : 'Graduated in Mathematical Sciences, with additional training in Data Science and Machine Learning. Currently working as a Data Scientist / Engineer at Publicis Groupe.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;