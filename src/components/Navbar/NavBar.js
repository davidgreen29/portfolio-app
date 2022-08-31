import React, {useState} from 'react';
import logo from '../../images/portfolioLogo.png';
import About from './About';
import Contact from './Contact';




export default function NavBar() {

    const [toggle, setToggle]= useState(false);
   
    const onToggle =()=> setToggle(!toggle);

    
    
      
    
   return(
        <div className="navbar-container"> 
        
            <img className="navBar-img" src={logo} alt="logo-img"/>

            <div onClick={onToggle} className="menu-icon">
                {toggle?
                <div>&#x78;</div>:
                <div>&#x2630;</div> }
            </div>

            <nav className={`nav-bar-links ${toggle ? 'active':''}`}>
                <div onClick={()=>setToggle(false)}>
                    <About />
                </div>

                <div onClick={()=>setToggle(false)}> 
                    <Contact/>
                </div>
      
            </nav>
                
        </div>
    )
}