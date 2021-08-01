import React from 'react';
import List from './List'
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, list, setList }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setList([...list, { id: uuidv4(), title: input }]);
    };

    return (
        <form className="Form" onSubmit={onFormSubmit}>
            <List list={list} setList={setList} />
            <div className="AddActivity">
                <input type="text" placeholder="Enter an activity to procrastinate with... ;)" className="AddActivityField" value={input} required onChange={onInputChange} />
                <button type="submit" className="AddActivityButton">Add</button>
            </div>
        </form>
    );
}

export default Form;