import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css"
import { Fade, JackInTheBox, Zoom, Slide } from "react-awesome-reveal";

const Experience = () => {
  return (
    <section id="experience"> 
    <div>
        <div className="experience_highlight">
          <Slide direction="right" duration={1500}>
            <h1 style={{color: 'black', fontSize: '80px', fontFamily: 'Inter', fontWeight: 800, marginBottom: "10px", marginLeft: "50px", width: "800px", backgroundColor: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))"}}> Experience</h1>
            </Slide>
        </div>
        <VerticalTimeline animate={true}  layout="1-column" lineColor={ 'black' }>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(200, 150, 243)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
        >
    <h2 className="vertical-timeline-element-position"> Manulife</h2>
    <h3 className="vertical-timeline-element-title">Platform Reliability Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"> Toronto, ON </h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgba(166, 231, 127, 0.75)', color: '#000000', height: '500px', borderRadius: '25px'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)', borderRadius: '100px' }}
            date="May 2021 - present"
        >

    <h3 className="vertical-timeline-element-title">Full-Stack Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Toronto, ON</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#A8D0E6', color: '#000000' }}
            contentArrowStyle={{ borderLeft: '7px solid ' }}
            date="May 2021 - present"
        >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Wah wah wah
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
        >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  
        </VerticalTimeline>
    </div>
    </section>
    
  )
}

export default Experience