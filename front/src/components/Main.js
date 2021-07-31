import logo from './pslogo.png';
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
                    <label for="name">Username:</label>
                    <input type="text" id="name"/>
                </div>
                <div className="Main-loginPass">
                    <label for="pass">Password:</label>
                    <input type="text"id="pass"/>
                </div>
                <button className="Main-button">Button</button>
            </form>
            <form className="Main-register">
                <b>Register</b>
                <div className="Main-email">
                    <label for="email">Email:</label>
                    <input type="text" id="email"/>
                </div>
                <div className="Main-registerName">
                    <label for="name">Username:</label>
                    <input type="text" id="name"/>
                </div>
                <div className="Main-registerPass">
                    <label for="pass">Password:</label>
                    <input type="text"id="pass"/>
                </div>
                <div className="Main-confirmPass">
                    <label for="confirmPass">Confirm Password:</label>
                    <input type="text"id="pass"/>
                </div>
                <button className="Main-button">Register</button>
            </form>
        </div>
        <button>Procrastinate</button>
    </div>
    );
}
export default Main;