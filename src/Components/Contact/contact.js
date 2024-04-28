import React from 'react';
import './contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import FootageImg from '../Contact/Contact Page Image.png'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Get in Touch With Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              <button type="submit">Send a Message</button>
            </form>
          </div>
          <img src={FootageImg} alt="Image" className="contact-image" />
        </div>
      </div>
      <Footer />
    </>
  ); 
}

export default Contact;
