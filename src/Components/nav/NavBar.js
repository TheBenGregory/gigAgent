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

                <Link className="navbar__link" to="/providers">Request a Showing</Link>
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/TicketList">My Jobs</Link>
                </li>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/userprofile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => { localStorage.removeItem("agent_user") }
                    }>Logout</Link>
            </li>
        </ul>
    )
}
//iterate through all users and set conditional statement that if user isProvider render this (else) render request tab.
