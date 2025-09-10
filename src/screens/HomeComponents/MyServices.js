import './myservices.css'
import HireMeServicePage from './HireMeServicePage';

import serviceIMG1 from "../../Media/FrontEnd.jpg"
import serviceIMG2 from "../../Media/MERN.webp"
import serviceIMG3 from "../../Media/ReactNative.png"

// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';


function MyServices() {
   
     return ( 

 <div className="myServices"> 
 <div className="serviceHeader">
<h2 className="mainHeader">My <span>Services</span></h2>
<h6 className="mainText"> Tech Scriber's is a group of web/app developers,<br/> designers, testers and digital Markting</h6>
</div>
<div className="myServiceContainer">

<div className="col1">
<h2 className='FED'>FrontEnd Development</h2>

<img  className="imgDEV" src={serviceIMG1} alt="FrontEnd"/>

<div className="textContainer">
<ul>
<li>Transformed design concepts into interactive web pages using HTML, CSS, JavaScript, and ReactJS.</li>
<li>Ensured cross-browser compatibility and adherence to web
standards for consistent functionality across different
platforms.</li>
<li>Implemented RESTful APIs and integrated with external
APIs for data retrieval and manipulation.</li>
<li>Conducted thorough testing and debugging to identify and
resolve front end-related issues, ensuring a bug-free and
smooth user experience</li>
</ul>
</div>

</div>

<div className="col2">
<h2 className='MSD'>Mern Stack Development</h2>

<img  className="imgDEV" src={serviceIMG2} alt="mern"/>

<div className="textContainer">
<ul>
<li> Strong expertise in building full-stack web applications using MongoDB, Express.js, React, and Node.js.</li>
<li>Ensured cross-browser compatibility and adherence to web
standards for consistent functionality across different
platforms.</li>
<li>Proficient in managing application state using Redux, Context API, or similar state management solutions</li>
</ul>
</div>

</div>

<div className="col3">
<h2 className='RND'>React Native Development</h2>

<img  className="imgDEV" src={serviceIMG3} alt="reactnative"/>

<div className="textContainer">
<ul>
<li> Collaborated closely with clients to understand their business objectives and translate them into technical requirements.</li>
<li>Developed and maintained mobile applications for iOS and Android platforms using React Native, resulting in highly responsive and cross-platform-compatible apps.</li>
<li>Skillfully integrate RESTful APIs to access external data sources, enabling real-time information retrieval and app functionality expansion.</li>
<li> Craft visually stunning and user-friendly interfaces, focusing on intuitive design principles and responsive layouts.</li>

</ul>
</div>

</div>
</div>

<HireMeServicePage/>

</div>

     );
    
}

export default MyServices;