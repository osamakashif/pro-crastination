import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem';

const List = ({ list = "" }) => {
    return (
        <div className="WastingChoice">
            <header className="WastingChoice-header">
                <h1>Hi {list}</h1>
            </header>
            <h1>What would you like to do today?</h1>
            <NavLink to="/Wasting_Time"><button className="WastingOptions" id="OnlyWaste">Waste Time</button></NavLink>
            <button className="WastingOptions" id="Efficient">Waste Time <i>efficiently</i></button>
        </div>
    );
}

export default List;