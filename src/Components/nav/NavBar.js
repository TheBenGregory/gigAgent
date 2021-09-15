
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css";


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/request">Request a Showing</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {localStorage.removeItem("agent_user")}
                    }>Logout</Link>
            </li>
        </ul>
    )
}

