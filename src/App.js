import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import SmallProjects from './pages/SmallProjects';

function App() {
  const [activeSection, setActiveSection] = useState('experience');
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'experience':
        return <Experience language={language} />;
      case 'projects':
        return <Projects language={language} />;
      case 'education':
        return <Education language={language} />;
      case 'certifications':
        return <Certifications language={language} />;
        case 'smallprojects':
          return <SmallProjects language={language} />;
      default:
        return <Experience language={language} />;
    }
  };

  return (
    <div className="App">
      <div className="layout">
        <div className="left-column">
          <Home language={language} />
        </div>
        <div className="right-column">
        <Header toggleLanguage={toggleLanguage} language={language} />
          <div className="section-selector-container">
            <div className="section-selector">
              <button
                className={activeSection === 'experience' ? 'active' : 'unactive'}
                onClick={() => setActiveSection('experience')}
              >
                {language === 'en' ? 'Experience' : 'Experiencia'}
              </button>
              <button
                className={activeSection === 'projects' ? 'active' : 'unactive'}
                onClick={() => setActiveSection('projects')}
              >
                {language === 'en' ? 'Projects' : 'Proyectos'}
              </button>
              <button
                className={activeSection === 'education' ? 'active' : 'unactive'}
                onClick={() => setActiveSection('education')}
              >
                {language === 'en' ? 'Education' : 'Educación'}
              </button>
              <button
                className={activeSection === 'certifications' ? 'active' : 'unactive'}
                onClick={() => setActiveSection('certifications')}
              >
                {language === 'en' ? 'Certifications' : 'Certificaciones'}
              </button>
              <button
                className={activeSection === 'smallprojects' ? 'active' : 'unactive'}
                onClick={() => setActiveSection('smallprojects')}
              >
                {language === 'en' ? 'Secondary projects' : 'Proyectos secundarios'}
              </button>
            </div>
          </div>
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;
