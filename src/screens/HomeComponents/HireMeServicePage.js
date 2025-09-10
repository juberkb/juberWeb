import React, { useRef, useEffect } from 'react';
import './HireMeServicePage.css';
import HireMe from '../../ReuableComponents/HireMe';
import ResumeDownloadButton from '../../ReuableComponents/ResumeDownloadButton';

import image1 from '../../Media/frontEndDeveloper.png';
import image2 from '../../Media/ReactNativeDev.png';
import image3 from '../../Media/MERNSTACK.png';
import image5 from '../../Media/QA.png';

function HireMeServicePage() {
  const cards = [
    {
      image: image1,
      title: 'Front-End Development',
      content: 'What I Offer:',
      reviewJ: 'User Interface (UI) Design',
      reviewU: 'Responsive Design',
      reviewB: 'Interactive Elements',
      reviewE: 'Cross-Browser Compatibility',
      reviewR: 'Accessibility',
    },
    {
      image: image2,
      title: 'ReactNative Development',
      content: 'What I Offer:',
      reviewJ: 'Cross-Platform Mobile App Development',
      reviewU: 'UI/UX Design',
      reviewB: 'Custom App Development',
      reviewE: 'Integration with Backend Services',
      reviewR: 'App Store Deployment',
    },
    {
      image: image3,
      title: 'MERN-STACK Development',
      content: 'What I Offer:',
      reviewJ: 'Full-Stack Web Development',
      reviewU: 'Database Design and Implementation',
      reviewB: 'RESTful API Development',
      reviewE: 'User Authentication and Authorization',
      reviewR: 'Real-Time Functionality',
    },
    {
      image: image5,
      title: 'Quality Analysis',
      content: 'What I Offer:',
      reviewJ: 'Test Case Design',
      reviewU: 'Test Automation',
      reviewB: 'Manual Testing',
      reviewE: 'Regression Testing',
      reviewR: 'Accessibility Testing',
    },
  ];

  const cardsRowRef = useRef(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!cardsRowRef.current) return;
      
      const scrollAmount = 300;
      
      if (e.key === 'ArrowLeft') {
        cardsRowRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        cardsRowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="hireMeServicePage">
      <div className="container">
        <h2 className="hireMeHeading">Hire Me For</h2>
        
        <div className="hireMeContainer">
          <div className="hireMeSubContainer1">
            <div className="hireMeTextContainer">
              <h3 className="gradient-text">Your company, my exceptional expertise.</h3>
              <h6 className="gradient-text2">
                If you are looking for an indivisual to help you create a remarkable presence online, 
                you've come to the right place. I can help you take your business to the next level.
              </h6>
              <div className="resume-button-container">
                <ResumeDownloadButton />
              </div>
            </div>
          </div>

          <div className="hireMeSubContainer2">
            <div className="cards-section">
              <div className="textColumn">
                <h2 className="text-column1">What I'm offering...</h2>
                <span className="text-column2">Contact Me For services shown below</span>
                <br />
                <span className="text-column2">Scroll to explore</span>
                <div className="navigation-hints">
                  <span className="nav-hint">← → Arrow keys</span>
                  <span className="nav-hint">Click & Drag</span>
                </div>
              </div>
              
              <div className="cards-scroll-container" ref={cardsRowRef}>
                <div className="cards-row">
                  {cards.map((card, index) => (
                    <HireMe
                      key={index}
                      imageSrc={card.image}
                      title={card.title}
                      content={card.content}
                      reviewJ={card.reviewJ}
                      reviewU={card.reviewU}
                      reviewB={card.reviewB}
                      reviewE={card.reviewE}
                      reviewR={card.reviewR}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMeServicePage;