import React from 'react';
import PopUp from '../PopUp.js';
import { useState } from 'react';


export default function About() {
    const [buttonOpen, setButtonOpen] = useState(false);
   

    return(
        <div>
        <button className="about-button"   onClick={()=>{
            document.body.style.overflow = 'hidden';
             setButtonOpen(true)}} >About</button>

<PopUp trigger={buttonOpen} setTrigger={setButtonOpen} >
    <div className='About-container'>
    <h1 className="about-title">About</h1>
    <p className="about-info">
        My developer journey started quite a few years ago when I had to take engineering
        fundamentals class where we had to learn Matlab. I instantly new that programming 
        was something I would never be bored doing. I love that there is always 
        a new problem to solve and something to learn. Software development is 
        one of the few fields that exist were a person can be as good as they 
        desire. All the info to learn any new language, framework, library, or fundamental
        concept is freely available online. All one needs is a passion for software
        development and lifelong learning, which perfectly describes me.  
         
    </p>
    </div>
    </PopUp>

 </div>
 
    )
}