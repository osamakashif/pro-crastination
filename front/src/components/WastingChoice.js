import React from 'react';
import { NavLink } from 'react-router-dom';
import './WastingChoice.css';
import './Main.css';

const WastingChoice = ({ username = "" }) => {
    return (
        <div className="WastingChoice">
            <header className="WastingChoice-header">
                <h1>Hi {username}</h1>
            </header>
            <h1>What would you like to do today?</h1>
            <NavLink to="/Wasting_Time"><button className="WastingOptions" id="OnlyWaste">Waste Time</button></NavLink>
            <button className="WastingOptions" id="Efficient">Waste Time <i>efficiently</i></button>
        </div>
    );
}

// Alternative method to do this:
// function WastingChoice({username = ""}) {
//     return (
//     <div className="App">
//         <header className="App-header">
//         <p>Hi {username}</p>
//         </header>
//         <h2>What would you like to do today?</h2>
//        <button className="WastingOptions">Waste Time</button>
//        <button className="WastingOptions">Waste Time <italic>efficiently</italic></button>
//     </div>
//     );
// }

export default WastingChoice;