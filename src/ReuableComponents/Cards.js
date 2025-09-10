// FlippingCard.js
import React, { useState } from 'react';
import './card.css'// Create this CSS file for styling

import Zoom from 'react-reveal/Zoom';

const Card = ({ imageSrc, title, content,position, reviewA }) => {
  const [isFlipped, setIsFlipped] = useState(false);

const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
      <Zoom>
   <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
 
      <div className="card-inner">
        <div className="card-front">
          <img src={imageSrc} alt="Card" className="imgCard" />
          <h2 className='cardsTitle'>{title}</h2>
          <p className='testisPositions'>{position}</p>
        </div>
        <div className="card-back">
          <p className='BackContent'>{content}</p>
          
           <ul className='BackContentList'>
           <li>{reviewA}</li>
           
           </ul>
        </div>
       
      </div>
     
    </div>
     </Zoom>
  );
};


export default Card;
