import React from 'react';

import Card from "../../ReuableComponents/Cards"
import './testimonials.css'
// import Button from "../../ReuableComponents/Buttons";

import image1 from '../../Media/AAkashAgrwal.png';
import image2 from '../../Media/shoyabkhan.png';
import image3 from '../../Media/AnmolST.png';



function Testimonials() {
  //  const handleButtonClick = () => {
  //   alert('Drop a mail kbaj289@gmail.com');
  // };

const cardData = [
    {
      image: image1,
      title: 'Mr. Aakash Agr',
      position:' "SDE1 Amazone" ',
          content: 'Review For ReactNative Project',
            reviewA: 'Your React Native development work has resulted in an outstanding mobile app. It`s both visually appealing and incredibly functional. We`re thrilled with the results.' ,
              
    },
    {
      image: image2,
      title: 'Mr. Shoyab Khan',
         position:'"Founder of DLM" ',
              content: 'Review For Front-End Project', 
              reviewA: 'Your front-end development work exceeded our expectations. The design is visually stunning, and the user interface is incredibly intuitive. Great job' ,
               
    },
    {
      image: image3,
      title: 'Mr. Anmol  Tanwar',
        position:' "Sr. Full-Stack Dev" ',
              content: 'Review For Mern-Stack Project', 
              reviewA: 'We couldn`t be happier with the final product, and we wouldn`t hesitate to recommend your MERN stack development services to others. You`ve proven to be a reliable and valuable partner.' ,
              
    }
  ];

 
    return ( 
     
      <div className="container">

      <div className="testiContainer">
      <div className="testiMainHeading">
    <h2 className="testiHeading">Testinomials</h2></div>
     <p className="testiSubHeading">What My Clients Say  "About Me" </p>
          
<div className="subContainer7">


       <div className="card-container">
     
               {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.image}
            title={card.title}   
             position={card.position}
             content={card.content}
             reviewA={card.reviewA}
             reviewN={card.reviewN}
             reviewM={card.reviewM}
             reviewO={card.reviewO}
             reviewL={card.reviewL}
               
          />
        ))}
     
     

    </div>
    
</div>

<div className="testiContact">
<div className="testiContactText">
<p>If you have any questions, please feel free to contact me at any time. For assistance, please reach out to me via email at the following address:</p>
<p></p>
<p>juberkhan.jkc@gmail.com</p>
</div>




</div>
</div>


</div>

     );
}

export default Testimonials;