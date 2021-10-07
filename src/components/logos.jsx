import React from 'react'
import logoPic from '../assets/logos.png';

export default function logos() {
    return (
        <div className="logos">
            <div className="logos__container">
                <h1 className="logos__container__header" >Logos</h1>
            </div>
            
            <div className="logos__img">
                <img src={logoPic} alt="Logos" id="gotologo" />
            </div>
            
        </div>
    )
}
