import React from "react";
import userLogo from "../../images/person.svg";
import { useNavigate } from "react-router-dom";

export default function LoggedIn() {
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="dropdown mx-2 drop-nav">
            <button
                className="btn dropdown-toggle btn1-nav"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <div>
                    <img src={userLogo} className="logo-nav" height="50rem" alt="image" />
                </div>
                <div className="loggedInText-nav">
                    {localStorage.getItem("username")}
                </div>
            </button>

            <ul className="dropdown-menu">
                <li>
                    <button onClick={onLogoutHandler} className="dropdown-item">
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}
