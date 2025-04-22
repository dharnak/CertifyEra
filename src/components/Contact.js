// components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      console.log('Form Submitted:', { name, email, message });
      setFormSubmitted(true); // Mark form as submitted
      setMessage(''); // Clear the message after submission
      setName(''); // Clear the name
      setEmail(''); // Clear the email
    } else {
      alert('Please fill out all fields!');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      {formSubmitted && <p>Thank you for your message! We will get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
