import React, { useState } from 'react';
import './../styles/shared-sections.css';


const Projects = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: language === 'es' ? 'Automatización de Todoist' : 'Todoist Automation',
      shortDescription: process.env.PUBLIC_URL + '/images/Todoist.png', // Ruta corregida
      fullDescription: language === 'es'
        ? 'Este proyecto utiliza Python para automatizar tareas en Todoist mediante su API. Funciona con un desencadenador de temporizador de Azure y permite a los usuarios personalizar automatizaciones avanzadas para optimizar flujos de trabajo.'
        : 'This project uses Python to automate tasks in Todoist via its API. It runs on an Azure Timer Trigger and enables users to create advanced custom automations to optimize workflows.',
      link: 'https://github.com/hidiegorguez/Todoist'
    },
    {
      title: language === 'es' ? 'Clasificación de Animales' : 'Animal Classification',
      shortDescription: process.env.PUBLIC_URL + '/images/Tensorflow.png', // Ruta corregida
      fullDescription: language === 'es'
        ? 'Un sistema de aprendizaje profundo desarrollado con TensorFlow para clasificar imágenes de animales. Incluye técnicas de aprendizaje por transferencia y una aplicación Flask para cargar imágenes y obtener predicciones en tiempo real.'
        : 'A deep learning system developed with TensorFlow to classify animal images. It features transfer learning techniques and a Flask app to upload images and get real-time predictions.',
      link: 'https://github.com/hidiegorguez/Animal-Classification-App'
    },
    {
      title: language === 'es' ? 'Reportes de Inversiones' : 'Investment Reports',
      shortDescription: process.env.PUBLIC_URL + '/images/Investments.png', // Ruta corregida
      fullDescription: language === 'es'
        ? 'Herramienta para generar reportes diarios de inversiones utilizando Python. Automatiza la recopilación de datos financieros y crea gráficos para análisis detallado.'
        : 'A tool for generating daily investment reports using Python. It automates financial data collection and creates charts for detailed analysis.',
      link: 'https://github.com/hidiegorguez/Investments'
    }
  ];
  

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  return (
    <section className="projects">
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="shared-section">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`shared-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{project.title}</h3>
            <p className="organization">{project.organization}</p>
            {expandedIndex !== index && (
              <img src={project.shortDescription} alt={`${project.title} thumbnail`} />
            )}
            {expandedIndex === index && (
              <>
                <p>{project.fullDescription}</p>
                <a
                  href={project.link} 
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;