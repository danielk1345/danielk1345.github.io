import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css"
import { Fade, Slide } from "react-awesome-reveal";
import ManuLogo from "../../images/ManuLogo.jpg";
import GlobalSpark from "../../images/GlobalSpark.png";

const Experience = () => {
  return (
    <section id="experience"> 
    <div>
        <div className="experience_highlight">
          <Slide direction="left" duration={1500}>
            <h1 style={{color: 'black', fontSize: '80px', fontFamily: 'Inter', fontWeight: 800, marginBottom: "10px", width: "600px", textAlign: "center"}}> Experience</h1>
          </Slide>
        </div>
        <div className="timeline"> 
        <VerticalTimeline animate={true}  layout="1-column" lineColor={ 'black' }>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'rgb(200, 150, 243)', color: '#fff', height: '400px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
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
                contentStyle={{ background: '#f7e27e', color: '#fff', height: '400px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', color: "black", margin: "100px"}}
                iconStyle = {{width: 100, height: 100, justifyContent: "center", color: "black", overflow: "hidden", zIndex: 1000, left: "30px", top: "40%"}}
                icon = {<img src={GlobalSpark} style={{ width: 80, height:96}}/>}
            >
              <h2 className="position" style={{color: "white", fontSize: "40px", fontFamily: 'Inter', fontWeight: 400}}> Manulife</h2>
              <h3 className="vertical-timeline-element-title">Platform Reliability Software Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle"> Toronto, ON </h4>
              <h4 className="vertical-timeline-element-subtitle" style={{fontStyle: "italic"}}> May 2022 - Present </h4>
              <h4 className="vertical-timeline-element-subtitle"> Tools: Python, JavaScript, Selenium, Kubernetes </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: 'rgba(130, 231, 127, 0.75)', color: '#fff', height: '400px', borderRadius: '25px', width: "85%", position: "relative", left: "80px"}}
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
                contentStyle={{ background: 'black', color: '#fff', height: '400px', borderRadius: '20px', width: "85%", position: "relative", left: "80px"}}
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
  
        </VerticalTimeline>
        </div>
    </div>
    
    </section>
    
  )
}

export default Experience