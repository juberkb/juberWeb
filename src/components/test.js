import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import './forminfo.css';



function FormInfo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pd07ug2",   
      "template_4oitiq7",  
      form.current,
      "PmRloiqqJxSEQG5Rm"   
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("✅ Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("❌ Failed to send message, please try again.");
      }
    );
  };



  return (
    <div className='contactInfoContainer'>
      <div className="contact-info-wrapper">
         {/* 🔹 Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="username" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="contact" placeholder="Your Contact No" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default FormInfo;
