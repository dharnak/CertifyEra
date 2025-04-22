import React from 'react';
import './Hero.css';
import myImage from '../assets/images/edu1.jpg'; // Ensure the image path is correct

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Unlock Your Project Management Potential with PMP®</h1>
        <p>
          Join CertifyEra Consulting Services’ PMP® Certification Training Course — a comprehensive, interactive, and industry-focused program designed to help you become a certified Project Management Professional (PMP®) and lead projects with confidence and excellence.
        </p>
        <button>Register Now</button>
      </div>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${myImage})` }}
      ></div>
    </section>
  );
};

export default Hero;
