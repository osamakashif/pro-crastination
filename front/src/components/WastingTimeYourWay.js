import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import './WastingTimeYourWay.css';
import axios from 'axios';

const WastingTimeYourWay = ({ user, list, setList }) => {
    const [input, setInput] = useState("");
    async function dispList(){
        var url = 'http://localhost:4000/list';
        const res = await axios.post(url, { username: user});
        // alert(res);
        return await res
    }
    useEffect(() => {
        // Query mongodb using fetch
        dispList().then(response => {
            const data = response.data;

            console.log('Response', JSON.stringify(response))
            const list = data.map((message, idx) => {
                return {
                    id: idx,
                    title: message
                }
            })
            console.log(list)
            setList(
                list
            );
        } )
        
    }, [user])
    return (
        <div className="WastingTimeYourWay">
            <header className="WastingTimeYourWay-header">
                <h1>Hi {user}</h1>
            </header>
            <Form input={input} setInput={setInput} list={list} setList={setList} user={user}/>
            <NavLink to="/Your_Activity"><button className="EmphasisedOption">Begin YOUR WAY of procrastrinating</button></NavLink>
        </div>
    );
}

export default WastingTimeYourWay