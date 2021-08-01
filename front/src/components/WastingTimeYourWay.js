import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import './WastingTimeYourWay.css';

const WastingTimeYourWay = ({ username = "" }) => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    return (
        <div className="WastingTimeYourWay">
            <header className="WastingTimeYourWay-header">
                <h1>Hi {username}</h1>
            </header>
            <Form input={input} setInput={setInput} list={list} setList={setList}/>
            <NavLink to="/Your_Activity"><button className="EmphasisedOption">Begin YOUR WAY of procrastrinating</button></NavLink>
        </div>
    );
}

export default WastingTimeYourWay