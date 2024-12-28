// Projects Component
// Ruta: src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = ({ language }) => {
  return (
    <section id="projects" className="projects">
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="project-list">
        <div className="project">
          <h3>Automatización de Todoist</h3>
          <p>
            {language === 'es'
              ? 'Automatización personalizada usando la API de Todoist, ejecutada diariamente en Azure Functions.'
              : 'Custom automation using Todoist API, executed daily on Azure Functions.'}
          </p>
        </div>
        <div className="project">
          <h3>Reportes automatizados de inversiones</h3>
          <p>
            {language === 'es'
              ? 'Generación diaria de reportes con gráficos y datos de Azure Blob Storage.'
              : 'Daily reports with charts and data from Azure Blob Storage.'}
          </p>
        </div>
        <div className="project">
          <h3>Clasificación de imágenes</h3>
          <p>
            {language === 'es'
              ? 'Modelo de clasificación con frontend interactivo para cargar imágenes.'
              : 'Classification model with an interactive frontend to upload images.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;