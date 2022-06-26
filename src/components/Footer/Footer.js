import "./Footer.css";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFile} from "react-icons/fa";
import Resume from "../../files/DanielKimResume.pdf";

const Footer = () => {
  return (
    <section id="footer"> 
    <footer className="footer">
      <div style={{fontWeight: "normal"}}> Thanks for checking out my personal website! I'm always open to new connections so please feel free to reach out to me via Email, LinkedIn or check out my Resume! </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "10px"}}> 
            <a href='https://github.com/danielk1345'> <FaGithub style={{color: 'black', fontSize: '40px'}}/> </a>
              <a href='mailto: dj7kim@uwaterloo.ca'> <FaEnvelope style={{color: 'black', fontSize: '40px'}}/> </a>
              <a href='https://www.linkedin.com/in/daniel-jkim1345/'> <FaLinkedin style={{color: 'black', fontSize: '40px'}}/> </a>
              <a href={Resume} target="_blank"> <FaFile style={{color: 'black', fontSize: '40px'}}/> </a>
      </div>
              
      <div className="copyright">
        <em>Copyright &copy; Daniel Kim</em>
      </div>
    </footer>
    </section>
  );
};

export default Footer;