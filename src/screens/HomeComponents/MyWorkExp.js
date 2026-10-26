
import React from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiCode,
} from "react-icons/fi";

import "./myworkexp.css";

import WebVixaLogo from "../../Media/webvixa-logo.png";
import magicEdtechLogo from "../../Media/magicEdtech.png";
import grassSolutionLogo from "../../Media/grassSolutions.png";

const experiences = [
  {
    id: "01",
    company: "WebVixa Software Private Ltd.",
    role: "Full Stack Developer",
    tenure: "Oct 2024 - Present",
    logo: WebVixaLogo,
    projects: [
      {
        title:
          "Full-Stack Web Migration Project (MSSQL + Google Cloud Storage)",
        points: [
          <>
            Redesigned and migrated a legacy desktop application into a
            scalable web platform using <strong>React.js</strong> and{" "}
            <strong>Node.js</strong>.
          </>,
          <>
            Implemented multi-admin user management with secure
            registration, login, forgot-password, profile-editing, and
            password-update flows.
          </>,
          <>
            Integrated <strong>MSSQL</strong> for data management and{" "}
            <strong>Google Cloud Storage</strong> for images and PDFs, with
            folder-level access based on user credentials.
          </>,
          <>
            Built a hybrid data-fetching system to support cloud and legacy
            content while maintaining backward compatibility.
          </>,
          <>
            Developed image processing functionality to split large images,
            create album-style layouts, and provide password-protected media
            views.
          </>,
          <>
            Created a <strong>React Native</strong> application for Android
            and iOS with online and offline album viewing.
          </>,
        ],
      },
      {
        title: "Wedding Services Platform — Frontend",
        points: [
          <>
            Led frontend development of a multi-form wedding services
            platform using <strong>React.js</strong> and reusable,
            responsive UI components.
          </>,
          <>
            Implemented <strong>Zustand</strong> for global state management
            across complex, multi-step forms.
          </>,
          <>
            Built URL-based dynamic routing for bride/groom, photographer,
            and planner form experiences.
          </>,
          <>
            Implemented entry detection and IP-based geolocation to support
            automatic country-code selection and location-specific content.
          </>,
        ],
      },
      {
        title: "Tech-Hub MERN Stack Coaching Platform",
        points: [
          <>
            Developed a coaching platform using the <strong>MERN stack</strong>
            alongside <strong>MSSQL</strong>.
          </>,
          <>
            Created secure admin and student panels with authentication,
            session tracking, and data filtering.
          </>,
          <>
            Built dynamic course listings, schedules, and user-management
            pages.
          </>,
          <>
            Improved workflows and user experience through reusable
            application components.
          </>,
        ],
      },
    ],
  },
  {
    id: "02",
    company: "Grass Software Solution",
    role: "Frontend React.js Developer",
    tenure: "Dec 2023 - Sept 2024",
    logo: grassSolutionLogo,
    highlights: [
      <>
        Revamped the company's product website using <strong>React.js</strong>,
        enhancing its overall performance and user experience.
      </>,
      <>
        Translated design mockups into responsive, cross-browser-compatible
        user interfaces.
      </>,
      <>
        Optimized user experience and reduced bundle size through efficient
        coding practices and streamlined API design.
      </>,
    ],
  },
  {
    id: "03",
    company: "Magic Edtech",
    role: "Accessibility & Manual Web Testing Engineer",
    tenure: "Dec 2021 - Aug 2023",
    logo: magicEdtechLogo,
    summary: (
      <>
        Experienced in ADA, Section 508, and WCAG 2.0/2.1 compliance testing.
        Proficient in creating accessibility test scenarios, using screen
        readers such as JAWS, NVDA, and VoiceOver, identifying issues,
        recommending fixes, and preparing VPAT and compliance reports.
        Skilled in manual web testing, including UI/UX validation,
        cross-browser testing, responsive design checks, functional testing,
        and bug reporting using tools like Jira.
      </>
    ),
  },
];

function MyWorkExp() {
  return (
    <section className="myWorkExpContent" id="work-experience">
      <div className="workexp-container">
        {/* Editorial header */}

        <div className="workexp-topline">
          <span className="workexp-index">CAREER / EXPERIENCE</span>

          <span className="workexp-topline-rule" />

          <span className="workexp-topline-note">
            THE JOURNEY SO FAR
          </span>
        </div>

        {/* Section introduction */}

        <div className="workexp-heading-row">
          <div>
            <p className="workexp-eyebrow">
              EXPERIENCE THAT SHAPES MY WORK
            </p>

            <h2 className="myWorkExpHeading">
              My professional
              <br />
              <span>journey.</span>
            </h2>

            <p className="workexp-subtitle">
              A look at the teams, products, and technical challenges
              that have shaped my experience across web development,
              mobile applications, and accessibility testing.
            </p>
          </div>

          <div className="workexp-heading-decoration">
            <FiBriefcase />
            <span>LEARN · BUILD · GROW</span>
          </div>
        </div>

        {/* Experience timeline */}

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />

          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.id}
            >
              <span
                className="timeline-marker"
                aria-hidden="true"
              />

              {/* Company header */}

              <div className="experience-card-header">
                <div className="company-info">
                  <div className="company-logo-wrap">
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="company-logo"
                      loading="lazy"
                    />
                  </div>

                  <div className="company-details">
                    <span className="company-label">
                      EMPLOYMENT / {experience.id}
                    </span>

                    <h3>{experience.company}</h3>

                    <p className="company-role">
                      {experience.role}
                    </p>
                  </div>
                </div>

                <div className="tenure">
                  <FiCalendar />
                  <span>{experience.tenure}</span>
                </div>
              </div>

              {/* Experience details */}

              <div className="card-content">
                {experience.projects &&
                  experience.projects.map((project) => (
                    <section
                      className="project-experience"
                      key={project.title}
                    >
                      <h4>
                        <FiCode />
                        <span>{project.title}</span>
                      </h4>

                      <ul>
                        {project.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}

                {experience.highlights && (
                  <div className="experience-highlights">
                    <h4 className="experience-overview-title">
                      Key contributions
                    </h4>

                    <ul>
                      {experience.highlights.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {experience.summary && (
                  <div className="experience-highlights">
                    <h4 className="experience-overview-title">
                      Responsibilities & expertise
                    </h4>

                    <p className="experience-summary">
                      {experience.summary}
                    </p>
                  </div>
                )}
              </div>

              {/* Card footer */}

              <div className="experience-card-footer">
                <span>PROFESSIONAL EXPERIENCE</span>
                <FiArrowUpRight />
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}

        <div className="workexp-bottom-line">
          <span>EVERY EXPERIENCE IS AN OPPORTUNITY TO GROW.</span>

          <span className="workexp-bottom-accent">
            BUILT ON CURIOSITY AND CONTINUOUS LEARNING.
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyWorkExp;
