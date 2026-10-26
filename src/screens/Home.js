
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";

import MyWorkExp from "./HomeComponents/MyWorkExp";
import MySkills from "./HomeComponents/MySkills";
import MyProjects from "./HomeComponents/MyProjects";
import About from "./HomeComponents/About";
import ContactInfo from "./HomeComponents/ContactInfo";
import HireMeServicePage from "./HomeComponents/HireMeServicePage";
import MyBlogs from "./HomeComponents/MyBlogs";

import portfolioTopImage from "../Media/Juberkhan.webp";

const EXPERIENCE_START_DATE = new Date(2024, 9, 2);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juber-khan-27a8751b8",
    className: "primary-btn",
  },
  {
    label: "GitHub",
    href: "https://github.com/juberkb",
    className: "primary-btn",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/khan.juber_kb",
    className: "secondary-btn",
  },
];

function calculateExperience() {
  const today = new Date();
  let months =
    (today.getFullYear() - EXPERIENCE_START_DATE.getFullYear()) * 12 +
    today.getMonth() -
    EXPERIENCE_START_DATE.getMonth();

  if (today.getDate() < EXPERIENCE_START_DATE.getDate()) {
    months -= 1;
  }

  return Math.max(0, months / 12);
}

function Home() {
  const [experience, setExperience] = useState(calculateExperience);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateExperience = () => {
      setExperience(calculateExperience());
    };

    const timer = window.setInterval(
      updateExperience,
      24 * 60 * 60 * 1000
    );

    document.addEventListener("visibilitychange", updateExperience);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", updateExperience);
    };
  }, []);

  const scrollToContent = useCallback(() => {
    contentRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, []);

  return (
    <main className="home" id="top">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-container">
          <div className="hero-content">
            {/* Intro */}
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-line" />
                <span className="hero-greeting">Hello, I'm</span>
              </div>

              <h1 className="hero-name" id="hero-title">
                Juber <span>Khan.</span>
              </h1>

              <div className="hero-tagline">
                <span className="tagline-text">React.js Developer</span>
                <span className="tagline-dot" aria-hidden="true" />
                <span className="tagline-text">Full Stack Engineer</span>
              </div>

              <p className="hero-description">
                I build modern, responsive web applications with a focus on
                clean code, thoughtful UI, and exceptional user experiences.
                I enjoy turning ideas into reliable digital products using
                modern frontend technologies and scalable development practices.
              </p>

              {/* Location and availability */}
              <div className="hero-details">
                <div className="detail-item">
                  <span className="detail-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <span className="detail-text">Jaipur, Rajasthan, India</span>
                </div>

                <div className="detail-item">
                  <span
                    className="availability-dot"
                    aria-hidden="true"
                  />
                  <span className="detail-text">
                    Available for new opportunities
                  </span>
                </div>
              </div>

              {/* Experience */}
              <div className="experience-rating">
                <div className="experience-badge">
                  <span className="experience-badge-number">
                    {experience.toFixed(1)}+
                  </span>
                  <span className="experience-badge-copy">
                    Years of experience
                  </span>
                </div>

                <div className="experience-divider" />

                <p className="experience-text">
                  Building thoughtful digital
                  <br className="experience-line-break" />
                  experiences with modern technology.
                </p>
              </div>

              {/* Social and project actions */}
              <div className="hero-buttons">
                <div className="button-row">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hero-btn ${social.className}`}
                    >
                      <span>{social.label}</span>
                      <span className="hero-btn-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>

                <button
                  type="button"
                  className="hero-btn accent-btn"
                  onClick={scrollToContent}
                >
                  <span>Explore My Work</span>
                  <span className="hero-btn-arrow" aria-hidden="true">
                    ↓
                  </span>
                </button>
              </div>
            </div>

            {/* Profile image */}
            <div className="hero-image">
              <div className="image-container">
                <div className="image-glow" aria-hidden="true" />

                <div className="image-frame">
                  <img
                    src={portfolioTopImage}
                    alt="Juber Khan, web developer"
                    className="profile-image"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <div className="image-overlay" aria-hidden="true" />

                <div className="image-corner image-corner-top" />
                <div className="image-corner image-corner-bottom" />

                <div className="floating-elements" aria-hidden="true">
                  <div className="floating-element element-1">
                    <span className="floating-element-dot" />
                    React.js
                  </div>

                  <div className="floating-element element-2">
                    Node.js
                  </div>

                  <div className="floating-element element-3">
                    JavaScript
                  </div>
                </div>

                <div className="hero-image-caption">
                  <span className="hero-image-caption-dot" />
                  <span>Design. Develop. Deliver.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            type="button"
            className="scroll-indicator"
            onClick={scrollToContent}
            aria-label="Scroll down to explore my projects"
          >
            <span className="scroll-line" aria-hidden="true" />
            <span className="scroll-text">Scroll to explore</span>
          </button>
        </div>
      </section>

      <section id="aboutMe" aria-label="About me">
        <About />
      </section>

      <section id="myblogs" aria-label="Blog articles">
        <MyBlogs />
      </section>

      <section id="myskills" aria-label="Technical skills">
        <MySkills />
      </section>

      <section
        id="myProjects"
        ref={contentRef}
        className="home-projects-section"
        aria-label="My projects"
      >
        <MyProjects />
      </section>

      <section id="myservice" aria-label="Services">
        <HireMeServicePage />
      </section>

      <section id="myExperience" aria-label="Work experience">
        <MyWorkExp />
      </section>

      <section id="contactme" aria-label="Contact me">
        <ContactInfo />
      </section>
    </main>
  );
}

export default Home;
