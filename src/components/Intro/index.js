import React from 'react'

import "./intro.css" 
import Typewriter from 'typewriter-effect'
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Resume from "../../files/DanielKimResume.pdf";


const Intro = () => {
  return (
    
      <section style={{height: "90vh"}}>
        <div className='intro-left'>
            <div className="left-text"> Hi I'm</div>
            <div className="left-text-name"> Daniel Kim </div>
            <div className="typewriter-static">
              I'm a
            </div>
            <div className="typewriter-type"> 
            <Typewriter
            options={{
              strings: ['UWaterloo Student', 'CS Student', 'Software Developer'],
              pauseFor: 2000,
              deleteSpeed: 100,
              autoStart: true,
              loop: true,
              }}
              />
            </div>
            <div className="socials_btns"> 
              <a href='https://github.com/danielk1345'> <FaGithub style={{color: 'black', fontSize: '40px'}}/> </a>
              <a href='mailto: dj7kim@uwaterloo.ca'> <FaEnvelope style={{color: 'black', fontSize: '40px'}}/> </a>
              <a href='https://www.linkedin.com/in/daniel-jkim1345/'> <FaLinkedin style={{color: '#0e76a8', fontSize: '40px'}}/> </a>
            </div>
        </div>
        <div className="right-header"> 
                <div className="container">
                <a className="hover-btn-1" href={Resume} target="_blank"> Resume</a> 
                </div>
        </div>
      </section>
  )
}

export default Intro