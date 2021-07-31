import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Main.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';





function Main({ user, setUser }) {

    const history = useHistory();
    //This function is executed when user clicks on login
    async function login(event) {
        event.preventDefault();
        var url = 'http://localhost:4000/login';
        try{
            const res = await axios.post(url, { username: document.getElementById("loginName").value, password: document.getElementById("loginPass").value });
            const userName = document.getElementById("loginName").value
            setUser(userName)
            console.log(user);
            history.push('/Wasting_Choice')
        } catch{ 
            document.getElementById("incorrectLogin").style.display = "contents";
            document.getElementById("loginName").value = "";
            document.getElementById("loginPass").value = "";
        }
    }

    //This function is executed when user clicks on register
    async function register(event) {
        event.preventDefault();
        try {
            var url = 'http://localhost:4000/signup';
            if (document.getElementById("registerPass").value === document.getElementById("confirmPass").value) {
                const res = await axios.post(url, { username: document.getElementById("registerName").value, password: document.getElementById("registerPass").value });
                console.log(res.status);
                const userName = document.getElementById("registerName").value
                setUser(userName)
                alert("Registeration Successful")
                history.push('/Wasting_Choice')
            } else {
                //alert("Passwords do not match")
                document.getElementById("passMismatch").style.display = "contents";
                document.getElementById("registerName").value = ""
                document.getElementById("registerPass").value = ""
                document.getElementById("confirmPass").value = ""
            }
        } catch (err) {
            alert("Error signing up")
            document.getElementById("registerName").value = ""
            document.getElementById("registerPass").value = ""
            document.getElementById("confirmPass").value = ""
        }
    }
    
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
                        <input type="text" id="loginName" />
                    </div>
                    <div className="Main-loginPass">
                        <label for="pass">Password:&nbsp;&nbsp;</label>
                        <input type="text" type="password" id="loginPass" />
                    </div>
                    <label id="incorrectLogin" style={{display:'none', color:"#ff001a"}}>Username or password is incorrect. Please try again.</label>
                    <button className="Main-loginButton" onClick={login}>Log In</button>
                </form>
                <form className="Main-register">
                    <b>Register</b>
                    <div className="Main-registerName">
                        <label for="name">Username:&nbsp;&nbsp;</label>
                        <input type="text" id="registerName" />
                    </div>
                    <div className="Main-registerPass">
                        <label for="pass">Password:&nbsp;&nbsp;</label>
                        <input type="text" type="password" id="registerPass" />
                    </div>
                    <div className="Main-confirmPass">
                        <label for="confirmPass">Confirm Password:&nbsp;&nbsp;</label>
                        <input type="text" type="password" id="confirmPass" />
                    </div>
                    <label id="passMismatch" style={{display:'none', color:"#ff001a"}}>Passwords do not match!</label>
                    <button className="Main-registerButton" onClick={register}>Register</button>
                </form>
            </div>
            <NavLink to="/Wasting_Time"><button className="Main-wasteTime">...or just waste time!</button></NavLink>
        </div>
    );
}

export default Main;