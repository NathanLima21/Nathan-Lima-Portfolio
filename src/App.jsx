import React from 'react';
import './App.css';


import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';


import SocialLinks from '../components/SocialLinks/Social';

function App() {
  return (
    <div className="App">
      <SocialLinks />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;