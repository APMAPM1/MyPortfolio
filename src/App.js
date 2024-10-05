import React from 'react';
import './tailwind.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Organisation from './components/Organisation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
   
    <div>
      <Navbar />
      <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="organisation">
        <Organisation />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
