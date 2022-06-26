import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css"
import { Fade, Slide } from "react-awesome-reveal";
import ManuLogo from "../../images/ManuLogo.jpg";
import GlobalSpark from "../../images/GlobalSpark.png";
import CSClub from "../../images/csClub.jpg"
import AALogo from "../../images/AALogo.jpg"
import UWLogo from "../../images/WlooLogo.png"

const Experience = () => {
  return (
    <section id="experience" style={{marginBottom: "50px"}}> 
    <div>
        <div className="experience_highlight">
          <Slide direction="left" duration={1500}>
            <h1 style={{color: 'black', fontSize: '80px', fontFamily: 'Inter', fontWeight: 800, marginBottom: "10px", width: "600px", textAlign: "center"}}> Experience</h1>
          </Slide>
        </div>
        <div className="timeline"> 
        <VerticalTimeline animate={true} layout="1-column" lineColor={ 'black' }>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#00AC5B', color: '#fff', height: '350px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={ManuLogo} style={{ width: 100, height:100}}/>}
            >
              <h2 className="position" style={{color: "white", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> Manulife</h2>
              <h3 className="vertical-timeline-element-title">Platform Reliability Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle"> Toronto, ON </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic"}}> May 2022 - Present </h4>
              <h4 className="vertical-timeline-element-subtitle"> Tools: Python, JavaScript, Selenium, Kubernetes </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#f5d86e', color: '#fff', height: '350px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={GlobalSpark} style={{ width: 70, height:90, position: "relative", right: "-15px", top: "10px"}}/>}
            >
              <h2 className="position" style={{color: "black", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> Global Spark</h2>
              <h3 className="vertical-timeline-element-title" style={{color: "black"}}>Full Stack Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}> Toronto, ON </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic", color: "black"}}> May 2022 - Present </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{color: "black"}}> Tools: MongoDB, Express.js, React, Node.js, Heroku </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#4b88f2', color: '#fff', height: '350px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={CSClub} style={{ width: 120, height:85, position: "relative", right: "8px", top: "10px"}}/>}
            >
              <h2 className="position" style={{color: "white", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> UWaterloo Computer Science Club</h2>
              <h3 className="vertical-timeline-element-title"> Developer</h3>
              <h4 className="vertical-timeline-element-subtitle"> Waterloo, ON </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic"}}> May 2022 - Present </h4>
              <h4 className="vertical-timeline-element-subtitle"> Tools: Typescript, Docker </h4>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'black', color: '#fff', height: '350px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={UWLogo} style={{ width: 100, height:100}}/>}
            >
              <h2 className="position" style={{color: "#FFD54F", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> University of Waterloo</h2>
              <h3 className="vertical-timeline-element-title">Bachelors of Computer Science</h3>
              <h4 className="vertical-timeline-element-subtitle"> Waterloo, ON </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic"}}> Sep 2021 - Present </h4>
              <h4 className="vertical-timeline-element-subtitle"> GPA: 3.9 </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: '#46db66', color: '#fff', height: '350px', borderRadius: '20px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={AALogo} style={{ width: 100, height:100}}/>}
            >
              <h2 className="position" style={{color: "white", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> Android Authority</h2>
              <h3 className="vertical-timeline-element-title"> Technology/Analytics Intern</h3>
              <h4 className="vertical-timeline-element-subtitle"> Vancouver, BC </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic"}}> June 2021 - Dec 2021 </h4>
              <h4 className="vertical-timeline-element-subtitle"> Tools/Skills: PowerBI, Excel, Professional Writing  </h4>
            </VerticalTimelineElement>
  
        </VerticalTimeline>
        </div>
    </div>
    
    </section>
    
  )
}

export default Experience