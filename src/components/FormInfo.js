import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import './forminfo.css';



function FormInfo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "serverid",   
      "templateid",  
      form.current,
      "publicid"   
    )
    .then(
      (result) => {
        alert("✅ Message sent successfully!");
      },
      (error) => {
        alert("❌ Failed to send message, please try again.");
      }
    );
  };



  return (
  <div className="contactFormContainer">
      <div className="contact-info-wrapper">
        <h2 className="form-title">📩 Get In Touch</h2>
        <p className="form-subtitle">
          We'd love to hear from you! Fill out the form and we'll get back to you shortly.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="username" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="contact" placeholder="Your Contact No" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">🚀 Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default FormInfo;
