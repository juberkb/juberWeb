
import React from "react";
import "./contactinfo.css";

import LogoLinkDin from "../../Media/Logolinkdin.png";
import LogoGithub from "../../Media/Logogithub.png";
import LogoInsta from "../../Media/Logoinsta.png";
import FormInfo from "../../components/FormInfo";

import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCode,
  FiMessageCircle,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juber-khan-27a8751b8",
    image: LogoLinkDin,
  },
  {
    name: "GitHub",
    url: "https://github.com/juberkb",
    image: LogoGithub,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/khan.juber_kb/",
    image: LogoInsta,
  },
];

function ContactInfo() {
  return (
    <section className="contact-section" id="contactme">
      <div className="contact-shell">
        {/* Section heading */}
        <div className="contact-section-topline">
          <span className="contact-section-index">05 / CONTACT</span>
          <span className="contact-topline-divider" />
          <span className="contact-topline-caption">
            HAVE A PROJECT IN MIND?
          </span>
        </div>

        <div className="contact-heading">
          <div>
            <p className="contact-eyebrow">
              <span className="contact-eyebrow-dot" />
              LET'S CONNECT
            </p>

            <h2 className="contactInfoHeading">
              Let's make
              <br />
              something <span>great.</span>
            </h2>
          </div>

          <p className="contactInfoSubheading">
            Have an idea, a project, or an opportunity?
            I'd love to hear about it. Let's turn your
            next big idea into something meaningful.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="contact-layout">
          <div className="contact-info-panel">
            <div className="contact-panel-heading">
              <div className="contact-panel-icon">
                <FiMessageCircle />
              </div>

              <div>
                <span className="contact-panel-overline">
                  GET IN TOUCH
                </span>
                <h3>Let's talk business.</h3>
              </div>
            </div>

            <p className="contact-panel-description">
              I'm open to discussing frontend development,
              full-stack projects, freelance opportunities,
              and exciting collaborations.
            </p>

            <div className="contact-method-list">
              <a
                href="mailto:juberkhan.jkc@gmail.com"
                className="contact-method"
              >
                <span className="contact-icon">
                  <FiMail />
                </span>

                <span className="contact-details">
                  <span className="contact-detail-label">
                    EMAIL ADDRESS
                  </span>
                  <span className="contact-detail-value">
                    juberkhan.jkc@gmail.com
                  </span>
                </span>

                <FiArrowUpRight className="contact-method-arrow" />
              </a>

              <a
                href="tel:+918003138760"
                className="contact-method"
              >
                <span className="contact-icon">
                  <FiPhone />
                </span>

                <span className="contact-details">
                  <span className="contact-detail-label">
                    PHONE NUMBER
                  </span>
                  <span className="contact-detail-value">
                    +91 80031 38760
                  </span>
                </span>

                <FiArrowUpRight className="contact-method-arrow" />
              </a>

              <div className="contact-method contact-location">
                <span className="contact-icon">
                  <FiMapPin />
                </span>

                <span className="contact-details">
                  <span className="contact-detail-label">
                    BASED IN
                  </span>
                  <span className="contact-detail-value">
                    Jaipur, Rajasthan, India
                  </span>
                </span>
              </div>
            </div>

            <div className="contact-social-area">
              <div className="contact-social-heading">
                <span>FIND ME ONLINE</span>
                <span className="contact-social-line" />
              </div>

              <div className="contact-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    <img
                      src={social.image}
                      alt=""
                      className="contact-social-logo"
                    />

                    <span>{social.name}</span>

                    <FiArrowUpRight className="contact-social-arrow" />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-panel-footer">
              <div className="contact-footer-symbol">
                <FiCode />
              </div>

              <div>
                <span>BUILT WITH PURPOSE</span>
                <p>Good ideas deserve great execution.</p>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="contact-form-panel">
            <div className="contact-form-panel-top">
              <div>
                <span className="contact-form-overline">
                  HAVE SOMETHING IN MIND?
                </span>

                <h3>Send me a message.</h3>

                <p>
                  Tell me a little about what you're looking
                  for. I'll get back to you as soon as I can.
                </p>
              </div>

              <div className="contact-form-number">01</div>
            </div>

            <FormInfo />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="contact-bottom-line">
          <span>JAIPUR, INDIA</span>

          <span className="contact-bottom-center">
            LET'S BUILD SOMETHING MEANINGFUL.
          </span>

          <a href="mailto:juberkhan.jkc@gmail.com">
            SAY HELLO <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
