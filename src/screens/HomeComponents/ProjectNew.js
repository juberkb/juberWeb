import React, { useState, useEffect } from 'react';
import './projectnew.css';
// Importing images
import project1 from "../../Media/Project1B2b.png";
import project2 from "../../Media/Project2techCoaching.png";
import project3 from "../../Media/project3.png";
import project4 from "../../Media/project4.png";
import project5 from "../../Media/project5.png";
import project6 from "../../Media/project6.png";
import project7 from "../../Media/Project5MovieWithme.png";
import project8 from "../../Media/Project4Unknown.png";
import project9 from "../../Media/project9.png";
import project10 from "../../Media/Project3fVA.png";


const images = [
  { id: 1, src: project1, title: 'B2B Ecom', link: 'https://b2b-ecom.vercel.app/' },
  { id: 2, src: project2, title: 'Tech Academy', link: 'https://tech-coaching-frontend.vercel.app/' },
  
    // updated
         { id: 3, src: project10, title: 'FV Association', link: 'https://farm-produce-navy.vercel.app/' },
  { id: 4, src: project8, title: 'We Won', link: 'https://freelance-web-7hee.vercel.app' },
     { id: 5, src: project9, title: 'Rent a Car', link: 'https://juberkb.github.io/rentacarwithme/' },

    { id: 6, src: project7, title: 'Next Anime', link: 'https://moviewithme.vercel.app/' },
      { id: 7, src: project3, title: 'Daily Live Media', link: 'https://dailylivemedia.netlify.app/' },

    { id: 8, src: project5, title: 'Tic Tac Toe Game', link: 'https://juberkb.github.io/tictactoe/'},
  { id: 9, src: project6, title: 'Live Clock', link: 'https://juberkb.github.io/realtimeclock/' },
    { id: 10, src: project4, title: 'Apple Web Clone', link: 'https://juberkb.github.io/apple-clone.in/' },


];

function ProjectNew() {
  const [selectedImage, setSelectedImage] = useState(images[0]); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage(prevSelectedImage => {
        // Find the index of the current selected image
        const currentIndex = images.findIndex(img => img === prevSelectedImage);
        // Update to the next image, or go back to the first image if at the end
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5 * 60 * 1000); // Change image every 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={selectedImage.src} alt={selectedImage.title} className="main-image" />
          <div className='projectbtn'> 
           <a href={selectedImage.link} target="_blank" rel="noopener noreferrer" >{selectedImage.title}</a>
          </div>
        </div>
        <div className="thumbnail-container">
          {images.map(image => (
            <img
              key={image.id}
              src={image.src}
              alt={image.title}
              className="thumbnail"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectNew;
