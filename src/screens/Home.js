import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import MyWorkExp from "./HomeComponents/MyWorkExp";
import MySkills from "./HomeComponents/MySkills";
import MyProjects from "./HomeComponents/MyProjects";
import About from "./HomeComponents/About";

import portfolioTopImage from "../Media/Juberkhan.webp";
import ContactInfo from "./HomeComponents/ContactInfo";
import HireMeServicePage from "./HomeComponents/HireMeServicePage";
import MyBlogs from "./HomeComponents/MyBlogs";

function Home() {
  const [rating, setRating] = useState(4.5);
  const [experience, setExperience] = useState(0);
const startDate = new Date(2024, 9, 2); 

  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Content reference is null.");
    }
  };

useEffect(() => {
  const startDate = new Date(2024, 9, 2); // October 2, 2024

  const calculateExperience = () => {
    const today = new Date();

    const yearDiff = today.getFullYear() - startDate.getFullYear();
    const monthDiff = today.getMonth() - startDate.getMonth();
    let totalMonths = yearDiff * 12 + monthDiff;

    if (today.getDate() < startDate.getDate()) {
      totalMonths -= 1;
    }

    const expInYears = (totalMonths / 12).toFixed(1);
    setExperience(expInYears);
  };

  calculateExperience();

  const timer = setInterval(calculateExperience, 1000 * 60 * 60 * 24);
  return () => clearInterval(timer);
}, []);
  const Button = ({ label, className, link, onClick }) => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      );
    }

    return (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    );
  };

  return (
    <div>
      <div className="home">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text">
                <h6 className="hero-greeting">Hello, I'm</h6>
                <h1 className="hero-name">Juber Khan</h1>
                <div className="hero-tagline">
                  <span className="tagline-text">React.js Developer</span>
                  <span className="tagline-dot"></span>
                  <span className="tagline-text">Full Stack Engineer</span>
                </div>

                <p className="hero-description">
                  Experienced React.js Developer specializing in innovative web
                  application development. Committed to writing high-quality
                  code and delivering exceptional user experiences through
                  collaborative teamwork.
                </p>

                <div className="hero-details">
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div className="detail-text">Jaipur, Rajasthan (India)</div>
                  </div>

                  <div className="detail-item">
                    <div className="availability-dot"></div>
                    <div className="detail-text">
                      Available for new projects
                    </div>
                  </div>
                </div>

                <div className="experience-rating">
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((index) => {
                      // Calculate how much of each star should be filled
                      let fillPercentage = 0;
                      if (index <= Math.floor(rating)) {
                        fillPercentage = 100; // Fully filled star
                      } else if (
                        index === Math.ceil(rating) &&
                        rating % 1 !== 0
                      ) {
                        fillPercentage = (rating % 1) * 100; // Partially filled star
                      }

                      return (
                        <div key={index} className="star-container">
                          <span className="star-empty">&#9733;</span>
                          <span
                            className="star-filled"
                            style={{ width: `${fillPercentage}%` }}
                          >
                            &#9733;
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="experience-text">
                    {experience}+ Years of Experience in Mern Stack
                  </p>
                </div>

                <div className="hero-buttons">
                  <div className="button-row">
                    <Button
                      label="LinkedIn"
                      className="hero-btn primary-btn"
                      link="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    />
                    <Button
                      label="GitHub"
                      className="hero-btn primary-btn"
                      link="https://github.com/juberkb"
                    />
                  </div>

                  <div className="button-row">
                    <Button
                      label="Instagram"
                      className="hero-btn secondary-btn"
                      link="https://www.instagram.com/khan.juber_kb"
                    />

                    <Button
                      label="My Work"
                      className="hero-btn accent-btn"
                      onClick={scrollToContent}
                    />
                  </div>
                </div>
              </div>

              <div className="hero-image">
                <div className="image-container">
                  <img
                    src={portfolioTopImage}
                    alt="Juber Khan"
                    className="profile-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="floating-elements">
                    <div className="floating-element element-1">React</div>
                    <div className="floating-element element-2">Node.js</div>
                    <div className="floating-element element-3">JavaScript</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-indicator">
              <div className="scroll-line"></div>
              <div className="scroll-text">Scroll to explore</div>
            </div>
          </div>
        </section>

        <section id="aboutMe">
          <About />
        </section>
        <section id="myblogs">
          <MyBlogs />
        </section>
        <section id="myskills">
          <MySkills />
        </section>

        <section id="myProjects" ref={contentRef}>
          <MyProjects />
        </section>
        <section id="myservice">
          <HireMeServicePage />
        </section>

        <MyWorkExp />

        <section id="contactme">
          <ContactInfo />
        </section>
      </div>
    </div>
  );
}

export default Home;
