import React from 'react';
import gitLogo from '../images/GitHub-Mark-32px.png';
import linkLogo from '../images/LI-In-Bug.png';




export default function Footer() {
   

    
    return(
        <div className="Footer-container">
            <a className="resume-Link" href="https://drive.google.com/file/d/1pVrlRX2IqwPKL2XYroCrXW5FishZ54Jk/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                Resume
            </a>
            <a href="https://github.com/davidgreen29" target="_blank" rel="noopener noreferrer">
                <img src={gitLogo} alt="github-link" className="git-link"/>
            </a>
            <a href="https://www.linkedin.com/in/davidgreen429" target="_blank" rel="noopener noreferrer">
                <img className="linkIn-logo" src={linkLogo} alt="linkedin"/>
            </a>


        </div>
    )
}