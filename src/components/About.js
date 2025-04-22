// components/About.js
import React from 'react';
import './About.css';
import teamMember1 from '../assets/images/Anita.png';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <p>
        The PMP® (Project Management Professional) certification, offered by PMI, is a globally recognized credential that validates expertise in project management.
        CertifyEra Consulting Services, a Premier Authorized Training Partner (ATP) of PMI, delivers high-quality training using interactive methodologies, real-world case studies, and hands-on learning to help professionals develop skills and apply best practices effectively in their projects, ensuring career and organizational success.
      </p>
      <div className="team">
        <div className="team-member">
          <img src={teamMember1} alt="Anita" />
          <h3>Anita</h3>
          <p>Lead Instructor</p>
        </div>
      </div>
    </section>
  );
};

export default About;
