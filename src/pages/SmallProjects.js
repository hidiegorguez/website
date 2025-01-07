import React, { useState } from 'react';
import './../styles/shared-sections.css';

const SmallProjects = ({ language }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const SmallProjects = [
    {
      title: language === 'es' ? 'CIFAR-10' : 'CIFAR-10',
      fullDescription: language === 'es'
        ? 'Un enfoque de aprendizaje automático para la clasificación de imágenes utilizando el conjunto de datos CIFAR-10, que incluye imágenes en color de 32x32 píxeles en 10 categorías de objetos distintas.'
        : 'A machine learning approach to image classification using the CIFAR-10 dataset, which includes 32x32 pixel color images across 10 distinct object categories.',
        link: 'https://github.com/hidiegorguez/CIFAR-10',
    },
    {
      title: language === 'es' ? 'Análisis educativo' : 'Educational analysis',
      fullDescription: language === 'es'
        ? 'Análisis educativo basado en las puntuaciones PISA'
        : 'Educational analysis with Machine Learning based on PISA scores',
      link: 'https://github.com/hidiegorguez/Educational-Analysis-PISA',
    },
    {
      title: language === 'es' ? 'Todolist' : 'Todolist',
      fullDescription: language === 'es'
        ? 'Una aplicación tan simple como moderna de tareas con React, Vite, y Express.'
        : 'A modern and simple To-do list application built with React, Vite, and Express.',
        link: 'https://github.com/hidiegorguez/Todolist',
    },
    {
      title: language === 'es' ? 'Detección de Malware en Microsoft' : 'Microsoft Malware Detection',
      fullDescription: language === 'es'
        ? 'Desarrollo de un modelo supervisado para predecir la probabilidad de obtención de virus en ordenadores de Windows'
        : 'Development of a supervised modeling project to predict the probability of infection of a Windows computer.',
        link: 'https://github.com/hidiegorguez/Microsoft-Malware-Detection',
      },
    {
      title: language === 'es' ? 'Juego de carretera' : 'Road Game',
      fullDescription: language === 'es'
      ? 'Juego multijugador desarrollado con programación paralela y la librería pygame.'
      : 'Parallel programming 3 player game with pygame library.',
      link: 'https://www.udemy.com/certificate/UC-dc30f2e9-22b5-4c16-9fe8-6cfc872553e5/',
    },
    {
      title: language === 'es' ? 'Predicción de retrasos aéreos' : 'Air delays forecast',
      fullDescription: language === 'es'
      ? 'Un cuaderno que pretende aprovechar el aprendizaje automático para predecir los retrasos de los vuelos en el aeropuerto JFK'
      : 'Notebook that aims to leverage machine learning to predict flight delays at JFK airport',
      link: 'https://www.udemy.com/certificate/UC-dc30f2e9-22b5-4c16-9fe8-6cfc872553e5/',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="smallprojects">
      <h2>{language === 'es' ? 'Proyectos secundarios' : 'Secondary Projects'}</h2>
      <div className="shared-section-short">
        {SmallProjects.map((edu, index) => (
          <div
            key={index}
            className={`shared-item-short ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <h4 className='smallproject'>{edu.title}</h4>
            {expandedIndex === index && (
              <>
                <p className='share-description-short'>{edu.fullDescription}</p>
                <a
                  href={edu.link}
                  className="website-link-short"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'es' ? 'Ver en Github' : 'View on Github'}
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SmallProjects;
