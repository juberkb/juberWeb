import React from 'react';
import { Link } from "react-router-dom"
import './contactinfo.css'

import Button from "../../ReuableComponents/Buttons";
import LogoLinkDin from "../../Media/Logolinkdin.png"
import LogoGithub from "../../Media/Logogithub.png"
import LogoInsta from "../../Media/Logoinsta.png"
import FormInfo from '../../components/FormInfo';

function ContactInfo() {
  const openEmail = () => {
    window.location.href = "mailto: juberkhan.jkc@gmail.com";
  };

  return ( 
    <div className='contactInfoContainer'>
      <div className="contact-info-wrapper">
        <h2 className='contactInfoHeading'>Get In Touch</h2>
        <p className='contactInfoSubheading'>Let's discuss how I can help bring your ideas to life</p>
        
        <div className='contactInfoText'>
          <p>What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        </div>
        
        <div className='contactInfoContent'>
          <div className='contactInfoContactVia'>
            <div className='contact-method' onClick={openEmail}>
              <div className="contact-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email Me</h3>
                <p>juberkhan.jkc@gmail.com</p>
              </div>
            </div>
            
            <div className='contact-method'>
              <a href="tel:+918003138760" className="contact-link">
                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="contact-details">
                  <h3>Call Me</h3>
                  <p>+91-8003139760</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className='contactInfoSocialMedia'>
            <p className="social-media-title">Follow me on</p>
            <div className="social-media-icons">
              <Link to="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="social-icon-link">
                <div className="social-icon-wrapper">
                  <img src={LogoLinkDin} alt="LinkedIn" className='contactInfoSocialMediaLogos'/>
                  <span>LinkedIn</span>
                </div>
              </Link>
              <Link to="https://github.com/juberkb" target="_blank" className="social-icon-link">
                <div className="social-icon-wrapper">
                  <img src={LogoGithub} alt="GitHub" className='contactInfoSocialMediaLogos'/>
                  <span>GitHub</span>
                </div>
              </Link>
              <Link to="https://www.instagram.com/khan.juber_kb?igsh=MXNoYmV5bmw2Mzg4YQ==" target="_blank" className="social-icon-link">
                <div className="social-icon-wrapper">
                  <img src={LogoInsta} alt="Instagram" className='contactInfoSocialMediaLogos' />
                  <span>Instagram</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
 <div className="contact-form-wrapper">
<FormInfo/>
</div>
    </div>
  );
}

export default ContactInfo;