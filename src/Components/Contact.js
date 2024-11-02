import React from 'react';
import './Contact.css'; // Import the CSS file for styling

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! We will get back to you soon.');
  };

  return (
    
    <div className="contact-container">
      <br/><br/>
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-card message-card">
          <h2 className="card-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message here..." required />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-card info-card">
          <h2 className="card-title">Contact Information</h2>
          <div className="info-item"><span className="icon">📍</span> 123 Law Street, Cityville, State 12345</div>
          <div className="info-item"><span className="icon">📞</span> (123) 456-7890</div>
          <div className="info-item"><span className="icon">✉️</span> sanketzore348@gmail.com</div>
          <div className="info-item"><span className="icon">🕒</span> Mon-Fri: 9AM-5PM</div>
        </div>
      </div>
    </div>
  );
}
