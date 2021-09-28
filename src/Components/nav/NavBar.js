import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";
import { getUsers } from "../apiManager/apiManager.js"
import { getCurrentUser } from "../apiManager/apiManager.js";
import logo from "./logo.png";
import { Profile } from "../UserProfile/userprofile.js"

export const NavBar = (props) => {
    const [users, setUsers] = useState([])
    const [providerUser, setProviderUser] = useState({})
    const [currentUser, setCurrentUser] = useState([])
    const userId = parseInt(localStorage.getItem("agent_user"))
    const profile = Profile()
    const profileUser = getCurrentUser()

    const myJobs = (<li className="navbar__item active">
        <Link className="navbar__link" to="/TicketList">My Jobs</Link></li>)
    const reqShow = (<li className="navbar__item active">
        <Link className="navbar__link" to="/providers">Request a Showing</Link></li>)


    useEffect(() => {
        getUsers().then(setUsers)
    },
        [])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/users/${userId}`)
                .then(res => res.json())
                .then((profileObj) => {
                    setCurrentUser(profileObj)

                }

                )
        },
        []
    )


    useEffect(() => {

        const findProvider = users.find(emp => profileUser === emp.id)
        setProviderUser(findProvider)
    },
        [users])

    return (

        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__home" to="/"> <img src={logo} alt="logo" style={{ height: "80px", paddingRight: "10px" }}></img></Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
            {
                providerUser?.isProvider === false ? reqShow : myJobs
            }

            <li className="navbar__item active">
                <Link className="navbar__link" to="/userprofile">Profile</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => { localStorage.removeItem("agent_user") }
                    }>Logout</Link>
                <li className="welcome"><div>Welcome {currentUser?.name?.split(` `)[0]}</div>


                </li>
            </li>
        </ul>

    )
}
//iterate through all users and set conditional statement that if user isProvider render this (else) render request tab.
