import React from 'react';
import '../Styles/PopUp.css';

export default function PopUp(props) {
    
    return(props.trigger) ? (
        <div className="pop-up" onClick={()=>{document.body.style.overflow = 'unset'; props.setTrigger(false)}}>
            <div className="inner-pop-up" onClick={e => e.stopPropagation()}>
                <button className="close-popup" onClick={()=>{document.body.style.overflow = 'unset'; props.setTrigger(false) }}>
                    close
                </button>
                {props.children}
            </div>
            

        </div>
    ) : "";
}