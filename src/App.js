import React, { useState } from 'react';
import './App.css'; // Estilo básico
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <div className="App">
      <Header toggleLanguage={toggleLanguage} language={language} />
      <main>
        <Home language={language} />
        <About language={language} />
        <Projects language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;