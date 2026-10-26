
import React from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiGithub,
  FiLayers,
  FiLinkedin,
} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import Kbjuber from "../../Media/apFounderkb.png";
import "./about.css";

const facts = [
  {
    icon: FaGraduationCap,
    title: "Computer Science",
    description: "B.Tech graduate",
  },
  {
    icon: FiCode,
    title: "Frontend Development",
    description: "React.js & modern JavaScript",
  },
  {
    icon: FiLayers,
    title: "Full Stack Skills",
    description: "Frontend and backend",
  },
  {
    icon: FaRocket,
    title: "Product Mindset",
    description: "Usability meets functionality",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Chakra UI",
];

function About() {
  return (
    <section id="aboutMe" className="about-section">
      <div className="about-container">
        {/* Section eyebrow */}

        <div className="about-topline">
          <span className="about-index">01 / ABOUT ME</span>
          <span className="about-topline-rule" />
          <span className="about-topline-note">
            THE PERSON BEHIND THE CODE
          </span>
        </div>

        {/* Main content */}

        <div className="about-layout">
          {/* Portrait column */}

          <div className="about-visual">
            <div className="about-photo-frame">
              <div className="about-photo-glow" />

              <img
                src={Kbjuber}
                alt="Juber Khan, software developer"
                className="about-photo"
                loading="lazy"
              />

              <div className="about-photo-shade" />

              <div className="about-photo-caption">
                <span className="about-caption-label">
                  DEVELOPER · CREATOR
                </span>
                <h3>Juber Khan</h3>
                <p>Turning ideas into digital experiences.</p>
              </div>

              <div className="about-photo-mark" aria-hidden="true">
                <FiCode />
              </div>
            </div>

            <div className="about-visual-note">
              <span className="about-note-dot" />
              <span>Curious mind. Continuous growth.</span>
            </div>
          </div>

          {/* Text column */}

          <div className="about-copy">
            <p className="about-kicker">
              DEVELOPER & CREATIVE PROBLEM SOLVER
            </p>

            <h2 className="about-title">
              Building ideas
              <br />
              into <span>digital reality.</span>
            </h2>

            <p className="about-lead">
              I'm a developer who enjoys creating modern web
              experiences that look refined, feel intuitive, and
              solve real problems.
            </p>

            <p className="about-description">
              I work with technologies like React.js, JavaScript,
              and Node.js to build responsive interfaces and
              practical web applications. I care about clean
              component architecture, thoughtful user experiences,
              and the details that make a product feel complete.
            </p>

            <p className="about-description">
              Beyond writing code, I enjoy learning new tools,
              exploring ideas, and continuously improving how I
              design and build software. My goal is to bring
              together reliable engineering and thoughtful design
              in every project I work on.
            </p>

            {/* Technology tags */}

            <div className="about-tech-block">
              <span className="about-mini-label">
                TOOLS I WORK WITH
              </span>

              <div className="about-tech-list">
                {technologies.map((technology) => (
                  <span
                    className="about-tech-tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Social links */}

            <div className="about-socials">
              <a
                href="https://www.linkedin.com/in/juber-khan-27a8751b8"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="Visit Juber Khan on LinkedIn"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
                <FiArrowUpRight className="about-social-arrow" />
              </a>

              <a
                href="https://github.com/juberkb"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-link"
                aria-label="Visit Juber Khan on GitHub"
              >
                <FiGithub />
                <span>GitHub</span>
                <FiArrowUpRight className="about-social-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick facts */}

        <div className="about-facts-section">
          <div className="about-facts-heading">
            <div>
              <span className="about-mini-label">
                A QUICK INTRODUCTION
              </span>
              <h3>A few things about me.</h3>
            </div>

            <span className="about-facts-index">
              01 — 04
            </span>
          </div>

          <div className="about-facts-grid">
            {facts.map((fact, index) => {
              const FactIcon = fact.icon;

              return (
                <article
                  className="about-fact-card"
                  key={fact.title}
                >
                  <div className="about-fact-top">
                    <span className="about-fact-icon">
                      <FactIcon />
                    </span>

                    <span className="about-fact-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4>{fact.title}</h4>
                  <p>{fact.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}

        <div className="about-bottom-line">
          <span>GOOD IDEAS DESERVE GREAT EXECUTION.</span>
          <span className="about-bottom-accent">
            LET'S BUILD SOMETHING MEANINGFUL.
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
