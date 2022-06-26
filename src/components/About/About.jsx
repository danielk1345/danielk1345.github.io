import React from "react";
import { Fade } from "react-awesome-reveal";
import Headshot from "../../images/Daniel_Kim_headshot_2.jpg";
import './About.css'

export default function About() {
  return (
    <section id="about" style={{height: "850px"}}>
      <div className="about_container">
      
        <div className="about_content"> 
        <Fade direction="left" duration={1500}>
          <div className="about_highlight">
        <h1 style={{color: 'black', fontSize: '80px', fontFamily: 'Inter', fontWeight: 600, marginBottom: "10px"}}> About me</h1>
        </div>

          <div className="main_paragraph"> 
            <p style={{color: 'black', fontSize: '20px', fontFamily: 'Inter'}}>
              Hi there 👋! My name is Daniel Kim and I'm a second year student studying Computer Science at the University of Waterloo!
              I'm interested in learning more about technology and how we can use it for 
              social good to help empower people through technology.
            </p>
          </div>
          <div>
            <h1 className="fun_facts" style={{color: 'black', fontSize: '40px', fontFamily: 'Inter', fontWeight: 600 }}>A few fun facts about me</h1>
              <p style={{color: 'black', fontSize: '20px', fontFamily: 'Inter'}}>
                I love exercising at the gym, exploring the best food options of whatever city I'm in, cooking and reading! 
              </p>
          </div>
          </Fade>
        </div>

        
        <div className="about_me">
          <Fade duration={1500} direction="right">
          <div className="about_image">
            <img src={Headshot} />
          </div>
          </Fade>
        </div>
      </div>
      
      <div className="rectangle"> </div>  
      <div className="rectangle-2"> </div>  
      <div className="pic-background"> </div>
    </section>
    
  )
}


