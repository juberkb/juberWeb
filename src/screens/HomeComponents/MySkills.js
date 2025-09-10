import { useState, useEffect } from 'react';
import './myskills.css';

import skillsImg1 from "../../Media/Html.png"
import skillsImg2 from "../../Media/CSS.png"
import skillsImg3 from "../../Media/chakraUi.png"
import skillsImg4 from "../../Media/JavaScript.png"
import skillsImg5 from "../../Media/reactjsLogo.png"
import skillsImg6 from "../../Media/Exp.png"
import skillsImg7 from "../../Media/ReactNativeLogo.png"
import skillsImg8 from "../../Media/NodeJSLogo.png"
import skillsImg9 from "../../Media/Mongo.png"
import skillsImg10 from "../../Media/mssql.png"
import skillsImg11 from "../../Media/GitLens.png"
import skillsImg12 from "../../Media/GitIcon.png"
import skillsImg13 from "../../Media/pythone.webp"
import skillsImg14 from "../../Media/tailwind.png"
import skillsImg15 from "../../Media/mui.png"
import skillsImg16 from "../../Media/excel.png"

function MySkills() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { img: skillsImg1, name: "HTML", color: "rgba(244, 87, 15, 0.8)" },
    { img: skillsImg2, name: "CSS", color: "rgba(15, 236, 244, 0.8)" },
    { img: skillsImg3, name: "Chakra UI", color: "rgba(60, 0, 255, 0.8)" },
    { img: skillsImg4, name: "JavaScript", color: "rgba(255, 230, 0, 0.8)" },
    { img: skillsImg5, name: "ReactJS", color: "rgba(44, 234, 252, 0.8)" },
    { img: skillsImg8, name: "NodeJS", color: "rgba(6, 252, 63, 0.8)" },
    { img: skillsImg6, name: "ExpressJS", color: "rgba(147, 147, 147, 0.8)" },
    { img: skillsImg9, name: "MongoDB", color: "rgba(222,184,135, 0.8)" },
    { img: skillsImg7, name: "React Native", color: "rgba(1, 250, 238, 0.8)" },
    { img: skillsImg10, name: "MS SQL", color: "rgba(148, 38, 244, 0.8)" },
    { img: skillsImg13, name: "Python", color: "rgba(236, 202, 9, 0.8)" },
        { img: skillsImg12, name: "GitHub", color: "rgba(255, 255, 255, 0.8)" },
        { img: skillsImg11, name: "Git Lens", color: "rgba(247, 71, 7, 0.8)" },
    { img: skillsImg14, name: "Tailwind CSS", color: "rgba(38, 244, 217, 0.8)" },
    { img: skillsImg15, name: "Material UI", color: "rgba(7, 159, 247, 0.8)" },
    { img: skillsImg16, name: "Excel", color: "rgba(62, 230, 11, 0.8)" }
  ];

  return ( 
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="skillsHeading">
          <span className="headingAccent">My</span> Skills
          <div className="headingUnderline"></div>
        </h2>

        <div className={`mySkillsContent ${isVisible ? 'visible' : ''}`}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skillCard"
              style={{ '--accent-color': skill.color }}
            >
              <div className="skillImgContainer">
                <img src={skill.img} alt={`${skill.name} skill`} className="SkillImg" />
                <div className="skillOverlay"></div>
              </div>
              <p className="skillsText">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;