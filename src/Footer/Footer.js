import React from 'react';
import footerLogo from "../Media/jkb-png.png";
import lineStyleSecondImage from "../Media/p7.png";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
 
    

      <div className="container">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <img className="footer-logo" src={footerLogo} alt="Juber Khan Portfolio Logo" />
              <p className="footer-tagline">Crafting Digital Excellence</p>
            </div>
            
            <p className="footer-text">
              👋 Hi there! I'm a passionate developer dedicated to creating remarkable digital 
              experiences. Let's collaborate to take your business to the next level with 
              innovative solutions and cutting-edge technology.
            </p>
            
            <div className="social-media-icons">
              <a href="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/juberkb" aria-label="GitHub" className="social-icon">
                <i className="bi bi-github"></i>
              </a>
           
              <a href="https://www.instagram.com/khan.juber_kb" aria-label="Instagram" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              
            </div>
          </div>

          <div className="footer-contact-section">
            <div className="footer-contact-info">
              <h3 className='footer-heading-text'>Contact Info</h3>
              <div className="contact-item">
                <i className="bi bi-telephone"></i>
                <p>+91-8003138660</p>
              </div>
              <div className="contact-item">
                <i className="bi bi-envelope-at"></i>
                <p>juberkhan.jkc@gmail.com</p>
              </div>
            </div>
            
            <div className="footer-contact-address">
              <h3 className='footer-heading-text'>Find Me At</h3>
              <div className="address-item">
                <i className="bi bi-geo-alt"></i>
                <p>K34, House in Board,<br />Shastri Nagar, Jaipur,<br />Raj. India - 302016</p>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3 className='footer-heading-text'>Stay Updated</h3>
            <p>Subscribe to my newsletter for updates</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="copyright-content">
            <p>Copyright © {currentYear} <span className="brand-highlight">@juberKB</span>. All Rights Reserved.</p>
          </div>
         
        </div>
      </div>

    </footer>
  );
};

export default Footer;