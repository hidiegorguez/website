import React, { useState } from 'react';
import './../styles/shared-sections.css';

const Education = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const education = [
    {
      title: language === 'es' ? 'Máster en Data Science' : "Master's in Data Science",
      institution: 'Nuclio Digital School',
      date: 'Sep 2022 - Jun 2023',
      shortDescription: process.env.PUBLIC_URL + '/images/nuclio.png',
      fullDescription: language === 'es'
        ? 'Desarrollo de modelos de Machine Learning aplicado al mundo real con Python, análisis de datos y MLOps.'
        : 'Development of real-world Machine Learning models using Python, data analysis, and MLOps.',
      link: 'https://www.nuclio.school/',
    },
    {
      title: language === 'es' ? 'Grado en Matemáticas' : 'Mathematics Degree',
      institution: 'Universidad Complutense de Madrid',
      date: 'Sep 2018 - Jun 2022',
      shortDescription: process.env.PUBLIC_URL + '/images/UCM.png',
      fullDescription: language === 'es'
        ? 'TFG: Teoremas clásicos sobre la geometría de curvas planas. Lenguajes aprendidos: Python, MATLAB, Haskell, Prolog.'
        : 'Bachelor\'s Thesis: Classical theorems on the geometry of planar curves. Programming languages learned: Python, MATLAB, Haskell, Prolog.',
      link: 'https://www.ucm.es/',
    },
    {
      title: language === 'es' ? 'Bachillerato' : 'High School Diploma',
      institution: 'IES Gregorio Peces - Barba',
      date: 'Sep 2016 - Jun 2018',
      shortDescription: process.env.PUBLIC_URL + '/images/IESGPB.png',
      fullDescription: language === 'es'
        ? 'Ciencias y Tecnología.'
        : 'Science and Technology.',
      link: 'https://www.educa2.madrid.org/web/ies.gpb',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="education">
      <h2>{language === 'es' ? 'Educación' : 'Education'}</h2>
      <div className="shared-section">
        {education.map((edu, index) => (
          <div
            key={index}
            className={`shared-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <p className="shared-item-title">{edu.title}</p>
            <p className="shared-item-subtitle">{edu.institution}</p>
            {expandedIndex !== index && (
              <img src={edu.shortDescription} alt={`${edu.title} thumbnail`} />
            )}
            <p className="date">{edu.date}</p>
            {expandedIndex === index && (
              <>
                <p>{edu.fullDescription}</p>
                <a
                  href={edu.link}
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'es' ? 'Ver más' : 'View More'}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
