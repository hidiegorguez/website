import React, { useState } from 'react';
import './Projects.css';


const Projects = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      title: language === 'es' ? 'Automatización de Todoist' : 'Todoist Automation',
      shortDescription: process.env.PUBLIC_URL + '/images/todoist.png', // Ruta corregida
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
      shortDescription: process.env.PUBLIC_URL + '/images/investments.png', // Ruta corregida
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
    <section id="projects" className="projects">
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
            style={{ cursor: 'pointer' }}
          >
            <h3>{project.title}</h3>
            {expandedIndex === index ? (
              <>
                <p>{project.fullDescription}</p>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
                </a>
              </>
            ) : (
              <img src={project.shortDescription} alt={`${project.title} thumbnail`} style={{ width: '100%', borderRadius: '10px' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;