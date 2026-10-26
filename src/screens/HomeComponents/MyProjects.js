
import React, { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
  FiX,
} from "react-icons/fi";

import "./myprojects.css";

import Background1 from "../../Media/Project7dlm.png";
import Background2 from "../../Media/appleClone.jpg";
import Background3 from "../../Media/Project3fVA.png";
import Background4 from "../../Media/Project2techCoaching.png";
import Background5 from "../../Media/tictactoeCapture.jpg";
import Background6 from "../../Media/ClockCapture09.png";
import Background7 from "../../Media/Project1B2b.png";
import Background8 from "../../Media/Project6RentCar.png";
import Background9 from "../../Media/Project5MovieWithme.png";
import Background10 from "../../Media/project11.png";
import Background11 from "../../Media/Project4Unknown.png";

const projects = [
  {
    id: 1,
    title: "Business to Business",
    image: Background7,
    link: "https://b2b-ecom.vercel.app",
    category: "E-commerce",
    description:
      "A B2B e-commerce platform focused on product discovery, business purchasing, and inventory management.",
  },
  {
    id: 2,
    title: "Tech Academy",
    image: Background4,
    link: "https://tech-coaching-frontend.vercel.app/",
    category: "Education",
    description:
      "An online learning platform concept featuring educational content, course management, and learner progress tracking.",
  },
  {
    id: 3,
    title: "FV Association",
    image: Background3,
    link: "https://farm-produce-navy.vercel.app",
    category: "Agriculture",
    description:
      "A farmers' association platform designed to support agricultural produce management and sales workflows.",
  },
  {
    id: 4,
    title: "We Won",
    image: Background11,
    link: "https://freelance-web-7hee.vercel.app",
    category: "Freelance",
    description:
      "A freelance platform concept connecting professionals and clients through a dedicated digital experience.",
  },
  {
    id: 5,
    title: "Next Anime",
    image: Background9,
    link: "https://moviewithme.vercel.app/",
    category: "Entertainment",
    description:
      "An entertainment discovery project exploring movie and anime content, recommendations, and reviews.",
  },
  {
    id: 6,
    title: "Daily Live Media",
    image: Background1,
    link: "https://dailylivemedia.netlify.app/",
    category: "Media",
    description:
      "A news and media website concept for presenting articles, updates, and editorial content.",
  },
  {
    id: 7,
    title: "Rent A Car",
    image: Background8,
    link: "https://juberkb.github.io/rentacarwithme/",
    category: "Automotive",
    description:
      "A car rental website concept showcasing vehicle listings and a user-friendly browsing experience.",
  },
  {
    id: 8,
    title: "Grass Solution",
    image: Background10,
    link: "https://grras.com/",
    category: "Education",
    description:
      "An IT training and education website presenting technology courses and learning opportunities.",
  },
  {
    id: 9,
    title: "Apple Clone",
    image: Background2,
    link: "https://juberkb.github.io/apple-clone.in/",
    category: "Technology",
    description:
      "A responsive Apple-inspired website recreation focused on visual presentation and interface layout.",
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    image: Background5,
    link: "https://juberkb.github.io/tictactoe/",
    category: "Games",
    description:
      "An interactive Tic Tac Toe game featuring a familiar game board and win-detection logic.",
  },
  {
    id: 11,
    title: "Live Clock",
    image: Background6,
    link: "https://juberkb.github.io/realtimeclock/",
    category: "Utilities",
    description:
      "A real-time clock project focused on presenting current time through a clean digital interface.",
  },
];

function MyProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  // Close the details modal with Escape and lock background scrolling.
  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="myProjects" className="projects-showcase">
      <div className="projects-container">
        {/* Editorial header */}

        <div className="projects-topline">
          <span className="projects-section-index">
            03 / SELECTED WORK
          </span>

          <span className="projects-topline-rule" />

          <span className="projects-topline-note">
            DESIGN INTO DEVELOPMENT
          </span>
        </div>

        {/* Main heading */}

        <div className="projects-heading-row">
          <div className="projects-heading-copy">
            <p className="projects-eyebrow">
              A COLLECTION OF THINGS I'VE BUILT
            </p>

            <h2 className="projects-title">
              Ideas made
              <br />
              <span>real.</span>
            </h2>

            <p className="projects-subtitle">
              Explore selected projects spanning web applications,
              e-commerce, education, and interactive experiences.
              Each project represents a different problem to solve.
            </p>
          </div>

          <div className="projects-heading-decoration">
            <FiLayers />
            <span>THOUGHTFULLY BUILT</span>
          </div>
        </div>

        {/* Filter toolbar */}

        <div className="projects-toolbar">
          <div className="projects-toolbar-label">
            <span className="projects-live-dot" />
            <span>BROWSE THE COLLECTION</span>
          </div>

          <span className="projects-count">
            <strong>
              {String(filteredProjects.length).padStart(2, "0")}
            </strong>
            <span>PROJECTS</span>
          </span>
        </div>

        <div
          className="category-filters"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              aria-pressed={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards */}

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />

                <div className="project-image-shade" />

                <span className="project-category-badge">
                  <span className="project-badge-dot" />
                  {project.category}
                </span>

                <span className="project-number">
                  {String(project.id).padStart(2, "0")}
                </span>

                <a
                  className="project-image-external"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live website`}
                >
                  <FiExternalLink />
                </a>
              </div>

              <div className="project-card-content">
                <span className="project-card-kicker">
                  PROJECT / {String(project.id).padStart(2, "0")}
                </span>

                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-card-footer">
                  <button
                    type="button"
                    className="project-details-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Explore project</span>
                    <FiArrowUpRight />
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                  >
                    Live site <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}

        <div className="projects-bottom-line">
          <span>BUILT WITH CURIOSITY. REFINED THROUGH ITERATION.</span>

          <span className="projects-bottom-accent">
            GOOD WORK STARTS WITH A GOOD IDEA.
            <FiArrowUpRight />
          </span>
        </div>
      </div>

      {/* Project details modal */}

      {selectedProject && (
        <div
          className="project-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="close-modal"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <FiX />
            </button>

            <div className="modal-image">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} project`}
              />

              <span className="modal-image-category">
                {selectedProject.category}
              </span>
            </div>

            <div className="modal-details">
              <span className="modal-eyebrow">
                PROJECT /{" "}
                {String(selectedProject.id).padStart(2, "0")}
              </span>

              <h2 id="project-modal-title">
                {selectedProject.title}
              </h2>

              <p>{selectedProject.description}</p>

              <div className="modal-actions">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-primary-button"
                >
                  Visit live website
                  <FiExternalLink />
                </a>

                <button
                  type="button"
                  className="modal-secondary-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Back to projects
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyProjects;
