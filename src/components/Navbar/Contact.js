import React from 'react';
import PopUp from '../PopUp.js';
import { useState } from 'react';
import axios from 'axios';



export default function Contact() {
    const [buttonOpen, setButtonOpen] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        fullname:"",
        email: "",
        message:"",
    });

    const handleChange = (event) => {
        setContactInfo({
            ...contactInfo, 
           [event.target.name]:event.target.value
        });
        
    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post('https://david-green-contact-server.herokuapp.com/app/contact', contactInfo)
        
        setContactInfo({fullname:"", email:"", message:"", });
        
    }
    
    
    

    return(
        <div>
            <button className="contact-button"  onClick={()=>{
            document.body.style.overflow = 'hidden';
                setButtonOpen(true)}} >Contact</button>

            <PopUp  trigger={buttonOpen} setTrigger={setButtonOpen} >
                <div className="form-container">
                    <div className="h1-container">

                    <h1 className="form-headline">Got a problem you need help solving?</h1>

                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label for="fullname">Full Name</label>
                        <input  type="text" name="fullname" id="fullname"
                        required onChange={handleChange} value={contactInfo.fullname} placeholder="Full Name" ></input>
                        
                        <label for="email">Email</label>
                        <input  type="email" name="email" id="email" onChange={handleChange} 
                        required value={contactInfo.email} placeholder="Email"></input>
                        
                        <label for="message">Message</label>
                        <textarea name="message" id="message" onChange={handleChange} 
                        required  value={contactInfo.message} placeholder="lets work together..."></textarea>
                       
                        <div className="button-container">
                        <button className="submit-button" type="submit">Submit</button>
                        </div>
                    
                    </form>
                </div>

             </PopUp>

        </div>
 
    )
}