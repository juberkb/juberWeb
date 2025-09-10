import './myworkexp.css'
import WebVixaLogo from "../../Media/webvixa-logo.png"
import magicEdtechLogo from "../../Media/magicEdtech.png"
import grassSolutionLogo from "../../Media/grassSolutions.png"
import lineStyleFirstImage from "../../Media/p5.png"

function MyWorkExp() {
    return ( 
     <div className='myWorkExpContent'>
       <div className="container">
         <h2 className='myWorkExpHeading'>Work Experience</h2>
         
         <div className="timeline">
           <div className="timeline-line"></div>
           
           <div className="experience-card">
             <div className="card-header">
               <div className="company-info">
                 <img src={WebVixaLogo} alt='WebVixa' className='company-logo'/>
                 <div className="company-details">
                   <h2>Webvixa Software Private Ltd.</h2>
                   <h3>Full Stack Developer</h3>
                   <span className='tenure'>Oct 2024 - Present</span>
                 </div>
               </div>
               <div className="timeline-marker"></div>
             </div>
             
             <div className="card-content">
               <div className="project-experience">
                 <h4>Full-Stack Web Migration Project (MSSQL + Google Cloud Storage)</h4>
                 <ul>
                   <li>Redesigned and migrated a legacy desktop application into a scalable, full-featured web platform using <b>ReactJS</b> (frontend) and <b>Node.js</b> (backend).</li>
                   <li>Implemented multi-admin user management with secure authentication flows (register, login, forgot password, edit profile, password update).</li>
                   <li>Integrated <b>MSSQL</b> for robust data handling and <b>Google Cloud Storage</b> for asset management (images, PDFs), with folder-wise data access based on user credentials.</li>
                   <li>Built a hybrid data-fetching system to support both cloud and legacy content, ensuring smooth transition and backward compatibility.</li>
                   <li>Developed an intelligent image processing module that splits large images, creates album-style layouts, and displays media securely with password-protected views.</li>
                   <li>Created a <b>React Native</b> app (Android + iOS) for viewing albums in online and offline modes.</li>
                 </ul>

                 <h4>Wedding Services Platform (Frontend Only)</h4>
                 <ul>
                   <li>Led frontend development of a multi-form wedding services platform using <b>ReactJS</b> with responsive and reusable UI components.</li>
                   <li>Implemented <b>Zustand</b> for efficient global state management to handle complex, multi-step forms.</li>
                   <li>Designed URL-based dynamic routing to serve customized forms for different user types (bride/groom, photographer, planner).</li>
                   <li>Built smart entry detection and IP-based geolocation for auto country code setting and location-specific content delivery.</li>
                 </ul>

                 <h4>Tech-Hub MERN Stack Coaching Platform (with MSSQL)</h4>
                 <ul>
                   <li>Developed a full-stack web application for a tech coaching institute using the <b>MERN stack</b> with <b>MSSQL</b>.</li>
                   <li>Created secure admin and student panels with login, session tracking, and data filtering.</li>
                   <li>Developed dynamic pages for course listings, schedules, and user management.</li>
                   <li>Streamlined operations and enhanced overall user experience with scalable design.</li>
                 </ul>
               </div>
             </div>
           </div>
           
           <div className="experience-card">
             <div className="card-header">
               <div className="company-info">
                 <img src={grassSolutionLogo} alt='Grass Software Solution' className='company-logo'/>
                 <div className="company-details">
                   <h2>Grass Software Solution</h2>
                   <h3>Frontend Reactjs Developer</h3>
                   <span className='tenure'>Dec 2023 - Sept 2024</span>
                 </div>
               </div>
               <div className="timeline-marker"></div>
             </div>
             
             <div className="card-content">
               <ul>
                 <li>Revamped the company's product website using React.js, enhancing overall performance and user experience.</li>
                 <li>Translated design mockups into responsive, cross-browser compatible user interfaces.</li>
                 <li>Optimized UX and reduced bundle size through efficient coding practices and streamlined API design.</li>
               </ul>
             </div>
           </div>
           
           <div className="experience-card">
             <div className="card-header">
               <div className="company-info">
                 <img src={magicEdtechLogo} alt='Magic Edtech' className='company-logo'/>
                 <div className="company-details">
                   <h2>Magic Edtech</h2>
                   <h3>Accessibility & Manual Web Testing Engineer</h3>
                   <span className='tenure'>Dec 2021 - Aug 2023</span>
                 </div>
               </div>
               <div className="timeline-marker"></div>
             </div>
             
             <div className="card-content">
               <p>Experienced in ADA, Section 508, and WCAG 2.0/2.1 compliance testing. Proficient in creating accessibility test scenarios, using screen readers (JAWS, NVDA, VoiceOver), identifying issues, recommending fixes, and preparing VPAT and compliance reports. Skilled in manual web testing, including UI/UX validation, cross-browser testing, responsive design checks, functional testing, and bug reporting using tools like Jira.</p>
             </div>
           </div>
         </div>
       </div>
     </div>
    );
}

export default MyWorkExp;