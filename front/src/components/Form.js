import React from 'react';
import List from './List'
import './List.css'
import {v4 as uuidv4} from 'uuid';

const Form = ({ input, setInput, list, setList }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
       setList([...list, {id: uuidv4(), title: input}]);
    };

    return (
            <form className="List" onSubmit={onFormSubmit}>
                <List list={list} setList={setList}/>
                <input type="text" placeholder="Enter an activity to procrastinate with... ;)" value={input} required onChange={onInputChange} />
                <button type="submit">Add</button>
            </form>

    );
}

export default Form;