import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'; // Import CSS file for styling
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ContactImg from './Contact Page Image.png';

const ContactUsPage = () => {
  const [state, handleSubmit] = useForm("xrgnjgjr");
  if (state.succeeded) {
    console.log("success!");
        document.getElementById("contact-form").reset();
}
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: ''
  // });

  // const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    // console.log(formData);
    // Clear form fields after submission
    // setFormData({
    //   name: '',
    //   email: '',
    //   subject: '',
    //   message: ''
    // });
    // Set submission status to true
  //   setIsSubmitted(true);
  // };

  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <div className="contact-info">
          <h4>Get in Touch with us</h4>
          {/* {isSubmitted ? ( */}
            <p>Your message was sent successfully. We will respond to you shortly.</p>
          {/* ) : ( */}
            <form 
            id="contact-form"
            onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  // value={formData.name}
                  // onChange={handleChange}
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
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                />
                 <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter your subject"
                  // value={formData.subject}
                  // onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                >
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                </textarea>
              </div>
              <button type="submit" disabled={state.submitting}>SEND A MESSAGE</button>
            </form>
          {/* )} */}
        </div>
        <div className="contact-image">
          <img src={ContactImg} alt="Contact Us" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
