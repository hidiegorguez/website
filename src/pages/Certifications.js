import React, { useState } from 'react';
import './../styles/shared-sections.css';

const Certifications = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const Certifications = [
    {
      title: language === 'es' ? 'Stroytelling con Análisis de Datos' : 'Storytelling through analytics',
      date: language === 'es' ? 'May 2024 ': 'May 2024',
      shortDescription: process.env.PUBLIC_URL + '/images/Nuclio.png',
      fullDescription: language === 'es'
        ? ''
        : '',
        link: `${process.env.PUBLIC_URL}/documents/StorytellingCertificate.pdf`,
    },
    {
      title: language === 'es' ? 'Desarrollo Full Stack para no programadores' : 'Full Stack Develoment for no-coders',
      date: language === 'es' ? 'Nov 2023 ': 'Nov 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Nuclio.png',
      fullDescription: language === 'es'
        ? 'Javascript, HTML, React, Express, etc.'
        : 'Javascript, HTML, React, Express, etc.',
      link: `${process.env.PUBLIC_URL}/documents/FullStackCertificate.pdf`,
    },
    {
      title: language === 'es' ? 'Certificado de inglés Avanzado' : 'Certificate in Advanced English',
      date: language === 'es' ? 'Jul 2023 ': 'Jul 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Cambridge.png',
      fullDescription: language === 'es'
        ? 'Nivel C1.'
        : 'C1 Level.',
        link: `${process.env.PUBLIC_URL}/documents/CAECertificate.pdf`,
    },
    {
      title: language === 'es' ? 'Excel - Funciones Avanzadas' : 'Advanced Functions in Excel',
      date: language === 'es' ? 'Abr 2023 ': 'Apr 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Udemy.png',
      fullDescription: language === 'es'
        ? ''
        : '',
        link: 'https://www.udemy.com/certificate/UC-c687f2e7-cc12-4af8-af76-776c712b62b9/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email',
      },
    {
      title: language === 'es' ? 'Smart Contracts y Blockchain con Solidity' : 'Smart Contracts and Blockchain with Solidity',
      date: language === 'es' ? 'Abr 2023 ': 'Apr 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Udemy.png',
      fullDescription: language === 'es'
      ? 'Creación de Blockchains en base al lenguaje de programación Solidity.'
      : 'Creation of Blockchains based on the Solidity programming language.',
      link: 'https://www.udemy.com/certificate/UC-dc30f2e9-22b5-4c16-9fe8-6cfc872553e5/',
    },
    {
      title: language === 'es' ? 'Excel y Power BI' : "Excel & Power BI",
      date: language === 'es' ? 'Ene 2023 ': 'Jan 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Udemy.png',
      fullDescription: language === 'es'
        ? 'Visualización y análisis de datos.'
        : 'Data analysis and visualization.',
      link: 'https://www.udemy.com/certificate/UC-9efd7368-49cb-4a34-b31b-437cbefd7b8f/',
    },
    {
      title: language === 'es' ? 'MySQL de cero a experto' : 'MySQL from zero to expert',
      date: language === 'es' ? 'Ene 2023 ': 'Jan 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/Udemy.png',
      fullDescription: language === 'es'
        ? ''
        : '',
      link: 'https://www.udemy.com/certificate/UC-22cd2a07-bcff-4f30-a5f5-820120c11d9c/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email',
    },
    {
      title: language === 'es' ? 'Principios y Metodologías de Agile' : 'Agile Principles and Methodologies',
      date: language === 'es' ? 'Nov 2023 ': 'Nov 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/EUIPO.png',
      fullDescription: language === 'es'
        ? ''
        : '',
      link: '',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="certifications">
      <h2>{language === 'es' ? 'Certificaciones' : 'Certifications'}</h2>
      <div className="shared-section-short">
        {Certifications.map((edu, index) => (
          <div
            key={index}
            className={`shared-item-short ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <h4 className='certificate'>{edu.title}</h4>
            <p className="date">{edu.date}</p>
            {expandedIndex !== index && (
              <img src={edu.shortDescription} alt={`${edu.title} thumbnail`} />
            )}
            {expandedIndex === index && (
              <>
                <p className='share-description-short'>{edu.fullDescription}</p>
                <a
                  href={edu.link}
                  className="website-link-short"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'es' ? 'Certificado' : 'Certificate'}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
