import React from 'react';
import gitLogo from '../images/GitHub-Mark-32px.png';





export default function Footer() {
   

    
    return(
        <div className="Footer-container">
            <a href="https://github.com/davidgreen29" target="_blank" rel="noopener noreferrer">
                <img src={gitLogo} alt="github-link" className="git-link"/>
            </a>
        </div>
    )
}