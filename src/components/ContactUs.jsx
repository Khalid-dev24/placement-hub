import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'your_service_id',       // Replace with your EmailJS service ID
      'your_template_id',      // Replace with your EmailJS template ID
      form.current,
      'your_public_key'        // Replace with your EmailJS public key
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setLoading(false);
      alert('Something went wrong. Try again.');
    });
  };

  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h2>Contact Us for Application</h2>
      {submitted ? (
        <p className="success-message">Thanks for reaching out! We’ll get back to you soon.</p>
      ) : (
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label>
            Name:
            <input type="text" name="user_name" required />
          </label>

          <label>
            Email:
            <input type="email" name="user_email" required />
          </label>

          <label>
            Subject:
            <input type="text" name="subject" />
          </label>

          <label>
            Message:
            <textarea name="message" required />
          </label>

          <button className= "contact-btn" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
