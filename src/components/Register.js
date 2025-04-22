import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    course: 'pmp-certification', // Default to PMP Certification
    paymentMethod: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <section id="register" className="register">
      <h2>Register for PMP® Certification Training</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>Contact No:</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />
        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          required
        >
          <option value="pmp-certification">PMP® Certification</option>
        </select>
       
        <button type="submit">Register Now</button>
      </form>
    </section>
  );
};

export default Register;
