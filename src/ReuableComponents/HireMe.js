import React from 'react';
import './hireme.css';

function HireMe({ imageSrc, title, content, reviewJ, reviewU, reviewB, reviewE, reviewR }) {
  return (
    <div className="cards">
      <div className="cards-inner">
        <div className="cards-front">
          <div className="image-container">
            <img src={imageSrc} alt={title} className='imgHireMe' />
          </div>
          <h2 className='titleCards'>{title}</h2>
          <div className="flip-hint">Hover or tap to flip</div>
        </div>
        <div className="cards-back">
          <h3 className='CardContent'>{content}</h3>
          <ul>
            <li>{reviewJ}</li>
            <li>{reviewU}</li>
            <li>{reviewB}</li>
            <li>{reviewE}</li>
            <li>{reviewR}</li>
          </ul>
          <div className="contact-prompt">Contact me to discuss</div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;