import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavLogo from "../Media/jkb-png.webp"
import ResumeDownloadButton from "../ReuableComponents/ResumeDownloadButton";
import "./navbar.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="NavLogo" to="/">
          <img src={NavLogo} alt="navlogo"/>
          </Link>
           
     
        <button className={`navbar-toggler ${menuOpen ? 'open' : ''}`} type="button" onClick={toggleMenu} alt="togglerButton">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="myskills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
               Skills
              </Link>
            </li>
             <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="myProjects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
            Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="myservice"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
               Service
              </Link>
            </li>
             <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contactme"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
             <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="myblogs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
              >
        Blogs
              </Link>
            </li>
        
                <li className="nav-item">
         <ResumeDownloadButton className="navButton"/>
        </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
