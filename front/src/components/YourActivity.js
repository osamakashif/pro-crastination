import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './YourActivity.css';

function YourActivity({ list }) {

    const [activity, setActivity] = useState("");

    useEffect( () => {
        getRandomActivity();
    }, [])

    const getRandomActivity = () => {
        if (list.length != 0) {
            let item = list[Math.floor(Math.random() * list.length)];
            setActivity(item.title);
        } else {
            setActivity("Your Activity");
        }
    }

    return (
        <div className="YourActivity">
            <header className="YourActivity-header">
                <h1>Your Activity is...</h1>
            </header>
            <b className="YourActivity-activity">{activity}</b>
            <div>
                <button className="YourActivity-button" onClick={getRandomActivity}>Generate another activity!</button>
            </div>

        </div>
    );
}

export default YourActivity;