import React from 'react';
import { NavLink } from 'react-router-dom';
import './WastingChoice.css';
 
const WastingChoice = ({ user }) => {
    return (
        <div className="WastingChoice">
            <header className="WastingChoice-header">
                <h1>Hi {user}</h1>
            </header>
            <h1>What would you like to do today?</h1>
            <div className="Buttons">
                <NavLink to="/Wasting_Time"  className="WastingOptions" id="OnlyWaste">Waste Time</NavLink>
                <NavLink to="/Wasting_Time_Your_Way"className="WastingOptions" id="YourWay">Waste Time <i>your way</i></NavLink>
                <NavLink to="/Wasting_Time_More_Efficiently" className="WastingOptions" id="Efficient">Waste Time <i>efficiently</i></NavLink>
            </div>
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