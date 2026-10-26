
import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import "./myskills.css";

import skillsImg1 from "../../Media/Html.png";
import skillsImg2 from "../../Media/CSS.png";
import skillsImg3 from "../../Media/chakraUi.png";
import skillsImg4 from "../../Media/JavaScript.png";
import skillsImg5 from "../../Media/reactjsLogo.png";
import skillsImg6 from "../../Media/Exp.png";
import skillsImg7 from "../../Media/ReactNativeLogo.png";
import skillsImg8 from "../../Media/NodeJSLogo.png";
import skillsImg9 from "../../Media/Mongo.png";
import skillsImg10 from "../../Media/mssql.png";
import skillsImg11 from "../../Media/GitLens.png";
import skillsImg12 from "../../Media/GitIcon.png";
import skillsImg13 from "../../Media/pythone.webp";
import skillsImg14 from "../../Media/tailwind.png";
import skillsImg15 from "../../Media/mui.png";
import skillsImg16 from "../../Media/excel.png";

const skills = [
  {
    img: skillsImg1,
    name: "HTML",
    category: "FRONTEND",
    color: "#f4570f",
  },
  {
    img: skillsImg2,
    name: "CSS",
    category: "FRONTEND",
    color: "#0facef",
  },
  {
    img: skillsImg3,
    name: "Chakra UI",
    category: "UI & DESIGN",
    color: "#63e6e2",
  },
  {
    img: skillsImg4,
    name: "JavaScript",
    category: "LANGUAGE",
    color: "#ffe600",
  },
  {
    img: skillsImg5,
    name: "React.js",
    category: "FRONTEND",
    color: "#61dafb",
  },
  {
    img: skillsImg8,
    name: "Node.js",
    category: "BACKEND",
    color: "#68a063",
  },
  {
    img: skillsImg6,
    name: "Express.js",
    category: "BACKEND",
    color: "#b4b4c0",
  },
  {
    img: skillsImg9,
    name: "MongoDB",
    category: "DATABASE",
    color: "#47a248",
  },
  {
    img: skillsImg7,
    name: "React Native",
    category: "MOBILE",
    color: "#61dafb",
  },
  {
    img: skillsImg10,
    name: "MS SQL",
    category: "DATABASE",
    color: "#cc2927",
  },
  {
    img: skillsImg13,
    name: "Python",
    category: "LANGUAGE",
    color: "#ffd43b",
  },
  {
    img: skillsImg12,
    name: "GitHub",
    category: "TOOLS",
    color: "#ffffff",
  },
  {
    img: skillsImg11,
    name: "GitLens",
    category: "TOOLS",
    color: "#e86b42",
  },
  {
    img: skillsImg14,
    name: "Tailwind CSS",
    category: "UI & DESIGN",
    color: "#38bdf8",
  },
  {
    img: skillsImg15,
    name: "Material UI",
    category: "UI & DESIGN",
    color: "#2196f3",
  },
  {
    img: skillsImg16,
    name: "Excel",
    category: "TOOLS",
    color: "#21a366",
  },
];

function MySkills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="skills" id="myskills">
      <div className="skills-container">
        {/* Editorial section header */}

        <div className="skills-topline">
          <span className="skills-index">
            02 / MY EXPERTISE
          </span>

          <span className="skills-topline-rule" />

          <span className="skills-topline-note">
            TECHNOLOGY & TOOLS
          </span>
        </div>

        {/* Main heading */}

        <div className="skills-heading-row">
          <div className="skills-heading-copy">
            <p className="skills-eyebrow">
              THE TECHNOLOGIES BEHIND MY WORK
            </p>

            <h2 className="skillsHeading">
              My technical
              <br />
              <span className="headingAccent">toolkit.</span>
            </h2>

            <p className="skills-subtitle">
              A practical collection of technologies I use to
              build responsive interfaces, web applications,
              and digital experiences.
            </p>
          </div>

          <div className="skills-heading-decoration">
            <div className="skills-decoration-icon">
              <FiCode />
            </div>

            <span>DESIGN. DEVELOP. DELIVER.</span>
          </div>
        </div>

        {/* Skill count and intro */}

        <div className="skills-overview">
          <div className="skills-overview-label">
            <FiLayers />
            <span>MY CURRENT TOOLKIT</span>
          </div>

          <span className="skills-count">
            <strong>{String(skills.length).padStart(2, "0")}</strong>
            <span>TECHNOLOGIES</span>
          </span>
        </div>

        {/* Skills grid */}

        <div
          className={`mySkillsContent ${
            isVisible ? "visible" : ""
          }`}
        >
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="skillCard"
              style={{ "--accent-color": skill.color }}
            >
              <div className="skill-card-top">
                <span className="skill-category">
                  {skill.category}
                </span>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="skillImgContainer">
                <div className="skill-icon-glow" />

                <img
                  src={skill.img}
                  alt={`${skill.name} logo`}
                  className="SkillImg"
                  loading="lazy"
                />
              </div>

              <div className="skill-card-bottom">
                <h3 className="skillsText">{skill.name}</h3>

                <span
                  className="skill-card-arrow"
                  aria-hidden="true"
                >
                  <FiArrowUpRight />
                </span>
              </div>

              <div className="skill-card-accent" />
            </article>
          ))}
        </div>

        {/* Bottom statement */}

        <div className="skills-bottom-line">
          <span>BUILT THROUGH PRACTICE AND CONTINUOUS LEARNING.</span>

          <span className="skills-bottom-accent">
            ALWAYS BUILDING. ALWAYS LEARNING.
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
