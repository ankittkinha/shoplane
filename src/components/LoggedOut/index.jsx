import React from 'react';
import userLogo from "../../images/person.svg";
import { Link } from 'react-router-dom';

export default function LoggedOut() {
    return (
        <div className="dropdown mx-2 drop-nav">
            <button className="btn dropdown-toggle btn1-nav" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                    <img src={userLogo} height={"20px"} className="logo-nav" alt='image' />
                </div>
                <div><span className="loginText-nav">Login</span><br /><span className="signupText-nav">or Sign Up</span></div>
            </button>

            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/login">Log in</Link></li>
                <li><Link className="dropdown-item" to="/signup">Sign up</Link></li>
            </ul>
        </div>

    )
}
