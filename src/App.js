import React, { useState, useEffect } from 'react';
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
import Loading from './components/Loading';

import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <CountdownPage />
          <Courses />
          <Register />
          <WhyCertifyEra />
          <Benefits />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
