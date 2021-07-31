import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem';
import './List.css'

const List = ({ list = [] }) => {
    return (
        <div className="List">
            {list && list.map((listItem, index) => <ListItem item={listItem}/>)}
        </div>
    );
}

export default List;