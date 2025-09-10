import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import "./GotoTop.css";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    // Show button after 150vh (150% of viewport height)
    const heightToShow = window.innerHeight * 1.5;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className='wrapper'>
      {isVisible && (
        <div className='gotobtn' onClick={gotobtn}>
          <FaArrowUp className='top-btn-icon' />
        </div>
      )}
    </div>
  );
};

export default GoTop;