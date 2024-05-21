import React, { useState } from 'react';
import './contact.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactImg from './Contact Page Image.png';
import { useForm } from '@formspree/react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const [state, handleSubmit] = useForm("xyyrojwb");
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const contactInfo = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    try {
       const response = await fetch('https://insignify-backend.onrender.com/contactUs', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(contactInfo),
       });

       if (response.ok){
        alert("Message sent");
        console.log("message sent", response);
       }else{
        alert("Error sending message");
        console.log("Internal error");
       }

      }
      // // Set submission status to true
      // setIsSubmitted(true);
    catch(error) {
      console.error(error);
    }

     // Clear form fields after successful submission
     setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
  });

}

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-image">
          <img src={ContactImg} alt="Contact Us" />
        </div>
        <div className="contact-info">
          <h4>Get in Touch with us</h4>
          {/* {isSubmitted ? (
            <p className='message'>Your message was sent successfully. We will respond to you shortly.</p>
          ) : ( */}
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" onClick={handleFormSubmit}>SEND A MESSAGE</button>
            </form>
          {/* )} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
