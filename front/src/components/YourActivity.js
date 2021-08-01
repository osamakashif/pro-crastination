import React from 'react';
import { NavLink } from 'react-router-dom';
import './YourActivity.css';
 
function YourActivity() {
    return (
        <div className="YourActivity">
            <header className="YourActivity-header">
                <h1>Your Activity is...</h1>
            </header>
            <div>
                <NavLink to="/Your_Activity"><button className="YourActivity-button">Generate another activity!</button></NavLink>
            </div>
            
        </div>
    );
}

export default YourActivity;