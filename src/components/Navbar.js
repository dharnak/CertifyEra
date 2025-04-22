import React from 'react';
import './Navbar.css';
import logo from '../assets/images/CertifyEra.png'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CertifyEra Logo" className="logo" />
        <h1 className="company-name">CertifyEra</h1>
      </div>
      <div className="navbar-right">
        <div className="sale-pop">🔥 Recent Sale: PMP® Course Enrolled!</div>
      </div>
    </nav>
  );
};

export default Navbar;

