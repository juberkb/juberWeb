import React from 'react';
import './about.css';
import Kbjuber from '../../Media/aboutImageKB.jpg';

function About() {
    return ( 
        <div className="about-wrapper">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-heading">About Me</h2>
                    <p className="about-subheading">Developer & Creative Problem Solver</p>
                </div>
                
                <div className="about-content">
                    <div className="about-image-container">
                        <div className="image-wrapper">
                            <img src={Kbjuber} alt='Khan Juber' className='about-img'/>
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                    
                    <div className='about-content-text'>
                        <p className="intro-text">I'm a passionate full-stack developer specializing in modern web technologies with a keen eye for design and user experience.</p>
                        <p>I began my journey as a web developer in 2023, and since then I've been building cutting-edge web applications using technologies like React.js, Node.js, JavaScript, and CSS. I'm dedicated to creating digital products that combine technical excellence with visual appeal.</p>
                        <p>When I'm not in developer mode, you can find me exploring the startup ecosystem on LinkedIn or sharing insights on Instagram. I believe in continuous learning and pushing the boundaries of what's possible with code.</p>
                        
                        <div className="social-links">
                            <p>Connect with me: </p>
                               <div className="social-links-icons">
                            <a href='https://www.linkedin.com/in/juber-khan-27a8751b8' target="_blank" rel="noreferrer" className='social-link'>
                                <span className="link-icon">👔</span> LinkedIn
                            </a>
                            <a href='https://github.com/juberkb' target="_blank" rel="noreferrer" className='social-link'>
                                <span className="link-icon">💻</span> GitHub
                            </a>
                            </div>
                        </div>
                        
                        <div className="quick-facts">
                            <h3>Quick Facts:</h3>
                            <div className="facts-grid">
                                <div className="fact-item">
                                    <div className="fact-icon">🎓</div>
                                    <div className="fact-text">B.Tech in Computer Science</div>
                                </div>
                                <div className="fact-item">
                                    <div className="fact-icon">⚛️</div>
                                    <div className="fact-text">React.js Specialist</div>
                                </div>
                                <div className="fact-item">
                                    <div className="fact-icon">🔧</div>
                                    <div className="fact-text">Full Stack Developer</div>
                                </div>
                                <div className="fact-item">
                                    <div className="fact-icon">🚀</div>
                                    <div className="fact-text">Freelance Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;