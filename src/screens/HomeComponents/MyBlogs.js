
import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import "./myblogs.css";
import blog1Img from "../../Media/reacCode.jpg";
import blog2Img from "../../Media/anpr.webp";

const blogPosts = [
  {
    id: 1,
    category: "REACT & FRONTEND",
    title:
      "Complete React Development Guide: From Setup to Advanced Concepts",
    excerpt:
      "This guide takes you through React development step by step, starting from project setup and installation. It covers working with Chakra UI v2, React Slick for carousels, and React Icons for UI enhancements. You'll also learn about dynamic URLs, virtualization, the Virtual DOM, and best practices for components, utils, and memoization. Finally, it explains handling APIs (GET, POST, PUT, DELETE), props, caching, and session storage to build efficient and scalable React applications.",
    date: "Nov 2, 2024",
    image: blog1Img,
    readTime: "8 min read",
  },
  {
    id: 2,
    category: "COMPUTER VISION",
    title: "Documentation in Detail for ANPR Software Development",
    excerpt:
      "Building an Automatic Number Plate Recognition (ANPR) software is a highly practical project that combines computer vision, machine learning, backend business logic, frontend dashboards, and database management. In this blog, I'll walk through how to architect and implement such a system using Node.js, Express, React.js, MSSQL, and optionally Python (OpenCV + YOLO + OCR) for plate recognition.",
    date: "Sep 9, 2025",
    image: blog2Img,
    readTime: "12 min read",
  },
];

function MyBlogs() {
  return (
    <section id="myblogs" className="my-blogs">
      <div className="blogs-container">
        {/* Section heading */}

        <div className="blogs-topline">
          <span className="blogs-section-index">
            05 / THE KNOWLEDGE SPACE
          </span>

          <span className="blogs-topline-rule" />

          <span className="blogs-topline-note">
            IDEAS INTO INSIGHTS
          </span>
        </div>

        <div className="blogs-heading-row">
          <div className="blogs-heading-copy">
            <p className="blogs-eyebrow">
              NOTES FROM MY DEVELOPMENT JOURNEY
            </p>

            <h2 className="blogs-title">
              Ideas worth
              <br />
              <span>sharing.</span>
            </h2>

            <p className="blogs-subtitle">
              Technical deep dives, practical guides, and lessons
              learned while building digital products.
            </p>
          </div>

          <div className="blogs-heading-decoration" aria-hidden="true">
            <FiBookOpen />
            <span>LEARN. BUILD. SHARE.</span>
          </div>
        </div>

        {/* Blog cards */}

        <div className="blogs-grid">
          {blogPosts.map((blog, index) => (
            <article className="blog-card" key={blog.id}>
              <Link
                to={`/myblogs/${blog.id}`}
                className="blog-image-link"
                aria-label={`Read ${blog.title}`}
                tabIndex={-1}
              >
                <div className="blog-image-container">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                    loading="lazy"
                  />

                  <div className="blog-image-overlay" />

                  <span className="blog-category">
                    <span className="blog-category-dot" />
                    {blog.category}
                  </span>

                  <span className="blog-image-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="blog-image-action">
                    <FiArrowUpRight />
                  </span>
                </div>
              </Link>

              <div className="blog-content">
                {/* Metadata */}

                <div className="blog-meta">
                  <span className="blog-date">
                    <FiCalendar />
                    {blog.date}
                  </span>

                  <span className="blog-read-time">
                    <FiClock />
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}

                <h3 className="blog-title">
                  <Link to={`/myblogs/${blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>

                {/* Excerpt */}

                <p className="blog-excerpt">{blog.excerpt}</p>

                {/* Footer */}

                <div className="blog-card-footer">
                  <span className="blog-footer-label">
                    ARTICLE / {String(blog.id).padStart(2, "0")}
                  </span>

                  <Link
                    to={`/myblogs/${blog.id}`}
                    className="blog-read-more"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    <span>Read article</span>

                    <span className="blog-read-arrow">
                      <FiArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing strip */}

        <div className="blogs-bottom-line">
          <span>CURIOUS BY NATURE. DEVELOPER BY CHOICE.</span>

          <span className="blogs-bottom-accent">
            MORE KNOWLEDGE. BETTER PRODUCTS.
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </section>
  );
}

export default MyBlogs;
