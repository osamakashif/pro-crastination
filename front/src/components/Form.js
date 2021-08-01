import React from 'react';
import List from './List'
import './List.css'
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const Form = ({ input, setInput, list, setList, user }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
       event.preventDefault();
       var task = document.getElementById("taskBox").value
       setList([...list, {id: uuidv4(), title: task}]);
       var updatedList = [];
       for(var i=0; i < list.length; i++){
            updatedList[i] = list[i]["title"]
       }
       updatedList.push(task)
       updateList(updatedList)
    };

    async function updateList(updatedList){
        var url = 'http://localhost:4000/changelist';
        const res = await axios.post(url, { username: user, list: updatedList});
        alert(res);
    }

    return (
            <form className="List" onSubmit={onFormSubmit}>
                <List list={list} setList={setList} user={user}/>
                <input type="text"  id="taskBox" placeholder="Enter an activity to procrastinate with... ;)" />
                <button type="submit" id="addButton">Add</button>
            </form>

    );
}

export default Form;