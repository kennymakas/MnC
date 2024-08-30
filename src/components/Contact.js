import React, { useState, useEffect } from 'react';
import contactImage from '../assets/contact-us.jpg';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const savedForm = JSON.parse(localStorage.getItem('contactForm')) || { name: '', email: '', message: '' };
    setForm(savedForm);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactForm', JSON.stringify(form));
    sessionStorage.setItem('contactFormSession', JSON.stringify(form));
    alert('Form submitted!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <img src={contactImage} alt="Contact Us" className="contact-image" />
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
