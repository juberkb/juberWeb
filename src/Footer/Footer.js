
import React from "react";
import footerLogo from "../Media/jkb-png.png";
import "./footer.css";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/juber-khan-27a8751b8",
    icon: "bi-linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/juberkb",
    icon: "bi-github",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/khan.juber_kb",
    icon: "bi-instagram",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
     

      <div className="footer-inner">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand-column">
            <a
              href="/"
              className="footer-brand-link"
              aria-label="Juber Khan home"
            >
              <img
                src={footerLogo}
                className="footer-logo"
                alt="Juber Khan"
                loading="lazy"
              />
            </a>

            <p className="footer-tagline">
              Crafting digital experiences
              <span> that make a difference.</span>
            </p>

            <p className="footer-description">
              I'm Juber Khan, a developer passionate about building modern,
              accessible, and user-focused web applications. Let's turn your
              next idea into something meaningful.
            </p>

            <div className="footer-socials" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div className="footer-details-column">
            <h2 className="footer-section-title">Get in touch</h2>
            <p className="footer-column-description">
              Have a project in mind? Let's talk.
            </p>

            <a
              className="footer-contact-link"
              href="mailto:juberkhan.jkc@gmail.com"
            >
              <span className="footer-contact-icon">
                <i className="bi bi-envelope" aria-hidden="true" />
              </span>
              <span className="footer-contact-copy">
                <span className="footer-contact-label">Email me</span>
                <span className="footer-contact-value">
                  juberkhan.jkc@gmail.com
                </span>
              </span>
              <i
                className="bi bi-arrow-up-right footer-contact-arrow"
                aria-hidden="true"
              />
            </a>

            <a
              className="footer-contact-link"
              href="tel:+918003138760"
            >
              <span className="footer-contact-icon">
                <i className="bi bi-telephone" aria-hidden="true" />
              </span>
              <span className="footer-contact-copy">
                <span className="footer-contact-label">Call me</span>
                <span className="footer-contact-value">
                  +91 80031 38760
                </span>
              </span>
              <i
                className="bi bi-arrow-up-right footer-contact-arrow"
                aria-hidden="true"
              />
            </a>

            <div className="footer-location">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Call to action */}
          <div className="footer-cta-column">
            <span className="footer-availability">
              <span className="footer-availability-dot" />
              Open to opportunities
            </span>

            <h2 className="footer-cta-title">
              Have an idea?
              <span> Let's build it.</span>
            </h2>

            <p className="footer-cta-description">
              Looking for a frontend developer or a collaborator for your
              next project? I'd love to hear from you.
            </p>

            <a
              href="mailto:juberkhan.jkc@gmail.com?subject=Project%20Inquiry"
              className="footer-cta-button"
            >
              Let's work together
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span>@juberKB</span>. All rights reserved.
          </p>

          <a className="footer-back-to-top" href="#top">
            Back to top
            <span className="footer-back-to-top-icon">
              <i className="bi bi-arrow-up" aria-hidden="true" />
            </span>
          </a>

          <p className="footer-made-with">
            Designed & built with <span aria-label="love">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
