import React from 'react';
import './WastingTime.css';
import { AnaClock, DigiClock } from 'web-clocks';

function WastingTime (){
    return (
        <div className="App">
            <header>  
                <title>Analog Clock</title>  
            </header>  
            <body>
                <div className="clockthing"><ana-clock className="clockthing"></ana-clock></div>  
            </body>
        </div> 
    )
}

export default WastingTime;