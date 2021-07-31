import React from 'react';
import { NavLink } from 'react-router-dom';
import List from './List';
import './WastingTimeEfficiently.css';

const WastingTimeEfficiently = ({ username = "" }) => {
    return (
        <div className="WastingTimeEfficiently">
            <header className="WastingTimeEfficiently-header">
                <h1>Hi {username}</h1>
            </header>
            <List list={["Prot","Pjij"]}/>
            <NavLink to="/Wasting_Time"><button className="EmphasisedOption">Begin YOUR WAY of procrastrinating</button></NavLink>
        </div>
    );
}

export default WastingTimeEfficiently