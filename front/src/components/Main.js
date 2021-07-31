import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Main.css';
import axios from 'axios';

//This function is executed when user clicks on login
async function login(event) {
    event.preventDefault();
    try{
        var url = 'http://localhost:4000/login';
        const res = await axios.post(url, {username: document.getElementById("loginName").value , password: document.getElementById("loginPass").value});
        console.log(res.status);
        window.location = "/Wasting_Choice"
    } catch (err){
        alert(err);
    } finally {
        document.getElementById("loginName").value = null
        document.getElementById("loginPass").value = null
    }
}

//This function is executed when user clicks on register
async function register(event) {
    event.preventDefault();
    try {
        var url = 'http://localhost:4000/signup';
        if(document.getElementById("registerPass").value === document.getElementById("confirmPass").value){
            const res = await axios.post(url, {username: document.getElementById("registerName").value , password: document.getElementById("registerPass").value});
            console.log(res.status);
            alert("Register Successful")
            window.location = "/Wasting_Choice" 
        } else {
            alert("Passwords do not match")
        }
    } catch (err){
        alert(err)
    } finally {
        document.getElementById("registerName").value = null
        document.getElementById("registerPass").value = null
        document.getElementById("confirmPass").value = null
    }
}

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
                    <input type="text" id="loginName"/>
                </div>
                <div className="Main-loginPass">
                    <label for="pass">Password:&nbsp;&nbsp;</label>
                    <input type="text"id="loginPass"/>
                </div>
                <button className="Main-loginButton" onClick={login}>Log In</button>
            </form>
            <form className="Main-register">
                <b>Register</b>
                <div className="Main-registerName">
                    <label for="name">Username:&nbsp;&nbsp;</label>
                    <input type="text" id="registerName"/>
                </div>
                <div className="Main-registerPass">
                    <label for="pass">Password:&nbsp;&nbsp;</label>
                    <input type="text"id="registerPass"/>
                </div>
                <div className="Main-confirmPass">
                    <label for="confirmPass">Confirm Password:&nbsp;&nbsp;</label>
                    <input type="text"id="confirmPass"/>
                </div>
                <button className="Main-registerButton" onClick={register}>Register</button>
            </form>
        </div>
        <NavLink to="/Wasting_Time"><button className="Main-wasteTime">...or just waste time!</button></NavLink>
    </div>
    );
}

export default Main;