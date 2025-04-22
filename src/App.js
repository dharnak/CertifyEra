import React from 'react';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Register from './components/Register';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CountdownPage from './components/CountdownPage';
import Benefits from './components/Benefits';
import WhyCertifyEra from './components/WhyCertifyEra';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CountdownPage />
      <Courses />
      <Register />
      <WhyCertifyEra/>
      <Benefits/>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
