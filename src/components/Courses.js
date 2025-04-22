import React from 'react';
import './Courses.css';
import pmpImage from '../assets/images/pmp-course.jpg'; // Ensure the image path is correct

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>
      <div className="course-cards">
        <div className="course-card">
          <img src={pmpImage} alt="PMP® Certification" />
          <h3>PMP® Certification Training</h3>
          <p>
            Join CertifyEra Consulting Services’ PMP® Certification Training Course — a comprehensive, interactive, and industry-focused program designed to help you become a certified Project Management Professional (PMP®) and lead projects with confidence and excellence.
          </p>
          <button>Enroll Now</button>
        </div>
        {/* Add more course cards here if needed */}
      </div>
    </section>
  );
};

export default Courses;
