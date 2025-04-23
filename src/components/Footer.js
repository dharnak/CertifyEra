// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <p>&copy; 2025 CourseHub | All rights reserved</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <p className='name'>Developed By Dharneesh Thangavel @ezhumingroup</p>
      </div>
    </footer>
  );
};

export default Footer;
