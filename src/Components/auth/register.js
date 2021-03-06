import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./login.css"
import { Switch } from 'antd';
import "antd/lib/switch/style/index.css";
import "./register.css"

export const Register = () => {
    const [user, setUser] = useState({})
    const conflictDialog = useRef()
    
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("agent_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
            copy.isProvider = !copy.isProvider
       
        setUser(copy)
    }

    const handleCheckbox = () => {
        const copy = { ...user }
        copy.isProvider = !copy.isProvider
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for gigAgent</h1>
               <div className="login__box"> 
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateUser}
                        type="text" id="name" className="form-control"
                        placeholder="Enter your name" required autoFocus />
               
                
                    <label htmlFor="brokerage"> Brokerage </label>
                    <input onChange={updateUser} type="text" id="brokerage" className="form-control" placeholder="Brokerage" required />
                
                
                    <label htmlFor="location"> County </label>
                    <input onChange={updateUser} type="text" id="location" className="form-control" placeholder="County" required />
               
                
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser} type="email" id="email" className="form-control" placeholder="Email address" required />
                
                    <label htmlFor="isProvider"> Provider? </label>
                    <Switch onChange={(evt) => { handleCheckbox(evt) }} type="checkbox" id="isProvider" checked={user.isProvider} className="form-control" />
                
                <div>
                    <button className="button" type="submit"> Register </button>
                </div></div>
            </form>
        </main>
    )
}

