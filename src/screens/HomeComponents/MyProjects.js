// MyProjects.js (Enhanced Version)
import React, { useState, useEffect, useRef } from 'react';
import './myprojects.css';
import Button from '../../ReuableComponents/Buttons';

// Import project images
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

// Import icons if needed
import { FaExternalLinkAlt,} from 'react-icons/fa';

// Project data structure for better organization
const projects = [
  {
    id: 1,
    title: "Bussiness 2 Bussiness",
    image: Background7,
    link: "https://b2b-ecom.vercel.app",
    category: "E-commerce",
    description: "A full-featured B2B e-commerce platform with inventory management"
  },
  {
    id: 2,
    title: "Tech Academy",
    image: Background4,
    link: "https://tech-coaching-frontend.vercel.app/",
    category: "Education",
    description: "Online learning platform with course management and progress tracking"
  },
  {
    id: 3,
    title: "FV Association",
    image: Background3,
    link: "https://farm-produce-navy.vercel.app",
    category: "Agriculture",
    description: "Farmers' association platform for produce management and sales"
  },
  {
    id: 4,
    title: "We Won",
    image: Background11,
    link: "https://freelance-web-7hee.vercel.app",
    category: "Freelance",
    description: "Freelance platform connecting professionals with clients"
  },
  {
    id: 5,
    title: "Next Anime",
    image: Background9,
    link: "https://moviewithme.vercel.app/",
    category: "Entertainment",
    description: "Anime discovery platform with recommendations and reviews"
  },
  {
    id: 6,
    title: "Daily Live Media",
    image: Background1,
    link: "https://dailylivemedia.netlify.app/",
    category: "Media",
    description: "News and media content platform with real-time updates"
  },
  {
    id: 7,
    title: "Rent A Car",
    image: Background8,
    link: "https://juberkb.github.io/rentacarwithme/",
    category: "Automotive",
    description: "Car rental service with booking and payment system"
  },
  {
    id: 8,
    title: "Grass Solution",
    image: Background10,
    link: "https://grras.com/",
    category: "Education",
    description: "IT training institute website with course offerings"
  },
  {
    id: 9,
    title: "Apple Clone",
    image: Background2,
    link: "https://juberkb.github.io/apple-clone.in/",
    category: "Tech",
    description: "Apple website clone with responsive design"
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    image: Background5,
    link: "https://juberkb.github.io/tictactoe/",
    category: "Game",
    description: "Interactive tic-tac-toe game with win detection"
  },
  {
    id: 11,
    title: "Live Clock",
    image: Background6,
    link: "https://juberkb.github.io/realtimeclock/",
    category: "Utility",
    description: "Real-time clock with multiple timezone support"
  }
];

function MyProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on category
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  // Handle project selection for modal view
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };
  


  return (
    <div className='projects-showcase'>
      <div className="container">
        <h2 className='section-title'>My <span className="accent">Projects</span></h2>
        
        <p className='section-subtitle'>
          Explore my work across different domains. Click on any project to view details or visit the live site.
        </p>
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => handleProjectSelect(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <div className="project-actions">
                    <Button 
                      label="View Project" 
                      className="view-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, '_blank');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
    
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-details">
                <h2>{selectedProject.title}</h2>
                <span className="project-category">{selectedProject.category}</span>
                <p>{selectedProject.description}</p>
                
                <div className="modal-actions">
                  <Button 
                    label="Visit Live Site" 
                    className="primary-btn"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                    icon={<FaExternalLinkAlt />}
                  />
                  <Button 
                    label="View Details" 
                    className="secondary-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProjects;