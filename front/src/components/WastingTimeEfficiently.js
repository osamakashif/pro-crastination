import React from 'react';
import { NavLink } from 'react-router-dom';
import List from './List';
import ListItem from './ListItem';

const WastingTimeEfficiently = ({ username = "" }) => {
    return (
        <div className="WastingChoice">
            <header className="WastingChoice-header">
                <h1>Hi {username}</h1>
            </header>
            <ListItem item="Deletable"/>
        </div>
    );
}

export default WastingTimeEfficiently