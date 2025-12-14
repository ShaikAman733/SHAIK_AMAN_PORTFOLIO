import { useState } from 'react'

import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './Aboutme/Aboutme'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Certifications from './Certification/Certification'
import Contact from './Connect/Connect'
import Footer from './Footer/Footer'
import LandingPage from './Landingpage/Landingpage'


function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleEnter = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="App">
      {showPortfolio ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
          <Footer />
        </>
      ) : (
        <LandingPage onEnter={handleEnter} />
      )}
    </div>
  );
}

export default App;
