import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Main.css';

function Main() {
    return (
    <div className="Main">
        <header className="Main-header">
            <img src={logo} className="Main-logo" alt="logo" />
            <h1 className="Main-title">ProcraStation</h1>
            <p className="Main-slogan">
                Your procrastination station. Come now &#60;3 {/* the &#60; is for '<' */}
            </p>
        </header>
        <div className="Main-info">
            <form className="Main-login">
                <b>Log In</b>
                <div className="Main-loginName">
                    <label for="name">Username:&nbsp;&nbsp;</label>
                    <input type="text" id="name"/>
                </div>
                <div className="Main-loginPass">
                    <label for="pass">Password:&nbsp;&nbsp;</label>
                    <input type="text"id="pass"/>
                </div>
                <button className="Main-loginButton">Log In</button>
            </form>
            <form className="Main-register">
                <b>Register</b>
                <div className="Main-email">
                    <label for="email">Email:&nbsp;&nbsp;</label>
                    <input type="text" id="email"/>
                </div>
                <div className="Main-registerName">
                    <label for="name">Username:&nbsp;&nbsp;</label>
                    <input type="text" id="name"/>
                </div>
                <div className="Main-registerPass">
                    <label for="pass">Password:&nbsp;&nbsp;</label>
                    <input type="text"id="pass"/>
                </div>
                <div className="Main-confirmPass">
                    <label for="confirmPass">Confirm Password:&nbsp;&nbsp;</label>
                    <input type="text"id="pass"/>
                </div>
                <button className="Main-registerButton">Register</button>
            </form>
        </div>
        <NavLink to="/Wasting_Time"><button className="Main-wasteTime">...or just waste time!</button></NavLink>
    </div>
    );
}
export default Main;