import React, { useState } from 'react';
import './../styles/shared-sections.css';

const Experience = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const experiences = [
    {
      title: language === 'es' ? 'Científico de Datos' : 'Data Scientist',
      organization: 'Publicis Groupe',
      date: 'Oct 2023 - Present',
      shortDescription: process.env.PUBLIC_URL + '/images/PublicisGroupe.png',
      fullDescription: language === 'es'
        ? 'Optimización de campañas publicitarias en Google Ads y distintas plataformas programáticas utilizando tecnologías de Microsoft (Visual Studio, SSMS, Azure, Databricks, Azure DevOps), con variedad de lenguajes de programación (C#, Python, JavaScript), abarcando prácticas de integración y entrega continua (CI/CD), inteligencia artificial, desarrollo web, minería y análisis de datos.'
        : 'Optimization of advertising campaigns on Google Ads and various programmatic platforms using Microsoft technologies (Visual Studio, SSMS, Azure, Databricks, Azure DevOps), with a variety of programming languages (C#, Python, JavaScript), encompassing continuos integration and delivery (CI/CD) practices, artificial intelligence, web development, data mining and data analysis.',
        link: 'https://www.publicisgroupe.com/fr/splash',
    },
    {
      title: language === 'es' ? 'Analista de Datos' : 'Data Analyst',
      organization: 'Arentia Seguros',
      date: 'Jan 2023 - Apr 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/arentia.png',
      fullDescription: language === 'es'
        ? 'Obtención y análisis de operaciones de clientes para crear informes de carteras utilizando Excel y Power BI.'
        : 'Acquisition and analysis of client transactions to create portfolio reports using Excel and Power BI.',
      link: 'https://www.arentia.com/nuestros-negocios/arentia-seguros/',
    },
    {
      title: language === 'es' ? 'Becario en Transformación Digital' : 'Trainee in Digital Transformation',
      organization: 'EUIPO',
      date: 'Sep 2022 - Dec 2022',
      shortDescription: process.env.PUBLIC_URL + '/images/euipo.png',
      fullDescription: language === 'es'
        ? 'Colaboración en proyectos de implementación de Blockchain y Deep Learning, enfocados en clasificación de imágenes y procesamiento de lenguaje natural.'
        : 'Collaboration in Blockchain and Deep Learning implementation projects focused on image classification and natural language processing.',
      link: 'https://www.euipo.europa.eu/en',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience">
      <h2>{language === 'es' ? 'Experiencia' : 'Experience'}</h2>
      <div className="shared-section">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`shared-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <p className="shared-item-title">{exp.title}</p>
            <p className="shared-item-subtitle">{exp.organization}</p>
            {expandedIndex !== index && (
              <img src={exp.shortDescription} alt={`${exp.title} thumbnail`} />
            )}
            {expandedIndex === index && (
              <>
                <p>{exp.fullDescription}</p>
                <a
                  href={exp.link}
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'es' ? 'Ver más' : 'View More'}
                </a>
              </>
            )}
            <p className="date">{exp.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
