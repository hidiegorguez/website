import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';

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
      default:
        return <Experience language={language} />;
    }
  };

  return (
    <div className="App">
      <Header toggleLanguage={toggleLanguage} language={language} />
      <div className="layout">
        <div className="left-column">
          <Home language={language} />
        </div>
        <div className="right-column">
          <div className="section-selector-container">
            <div className="section-selector">
              <button
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => setActiveSection('experience')}
              >
                {language === 'en' ? 'Experience' : 'Experiencia'}
              </button>
              <button
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => setActiveSection('projects')}
              >
                {language === 'en' ? 'Projects' : 'Proyectos'}
              </button>
              <button
                className={activeSection === 'education' ? 'active' : ''}
                onClick={() => setActiveSection('education')}
              >
                {language === 'en' ? 'Education' : 'Educación'}
              </button>
            </div>
          </div>
          {renderSection()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
