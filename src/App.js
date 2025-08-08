import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import BeforeAfter from './components/BeforeAfter/BeforeAfter';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;