import React from 'react';
import { Link } from 'react-router-dom';
import './myblogs.css';
import blog1Img from "../../Media/reacCode.jpg";
import blog2Img from "../../Media/anpr.webp";

const blogPosts = [
  {
    id: 1,
    title: "Complete React Development Guide: From Setup to Advanced Concepts",
    excerpt: `This guide takes you through React development step by step, starting from project setup and installation. It covers working with Chakra UI v2, React Slick for carousels, and React Icons for UI enhancements. You'll also learn about dynamic URLs, virtualization, the Virtual DOM, and best practices for components, utils, and memoization. Finally, it explains handling APIs (GET, POST, PUT, DELETE), props, caching, and session storage to build efficient and scalable React applications.`,
    date: "Nov 2, 2024",
    image: blog1Img,
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Documentation in Detail for ANPR Software Development",
    excerpt: "Building an Automatic Number Plate Recognition (ANPR) software is a highly practical project that combines computer vision, machine learning, backend business logic, frontend dashboards, and database management. In this blog, I'll walk through how to architect and implement such a system using Node.js, Express, React.js, MSSQL, and optionally Python (OpenCV + YOLO + OCR) for plate recognition.",
    date: "Sep 9, 2025",
    image: blog2Img,
    readTime: "12 min read"
  }
];

function MyBlogs() {
  return (
    <section className="my-blogs">
      <div className="blogs-container">
        <div className="section-header">
          <h2 className="section-title">My Blogs</h2>
          <p className="section-subtitle">Insights and tutorials on modern development</p>
        </div>
        
        <div className="blogs-grid">
          {blogPosts.map(blog => (
            <article key={blog.id} className="blog-card">
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-overlay"></div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <Link to={`/myblogs/${blog.id}`} className="blog-read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyBlogs;