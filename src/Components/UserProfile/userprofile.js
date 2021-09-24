import React, { useEffect, useState } from "react";
import "./userprofile.css";
import { useHistory } from "react-router";

export const Profile = () => {
    const [allUsers, setAllUsers] = useState([])
    const [isLoggedIn, setProfile] = useState([])
    const [userBio, setBio] = useState({
        userBio: ""
    }
    );
    const history = useHistory()

    useEffect(
        () => {
            return fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((profileArray) => {
                    setAllUsers(profileArray)

                }

                )
        },
        []
    )



    
    const deleteUser = (id) => {
        fetch(`http://localhost:8088/users/${id}`, {
            method: "DELETE"
        }
        ).then(history.push("/login"))
    }

    const submitBio = (evt) => {
        const copy = { ...userBio }
        copy[evt.target.id] = evt.target.value
        setBio(copy)


    }
    const putBio = (userBio) => {
        fetch(`http://localhost:8088/users/${userBio}`, {
            method: "PUT"
        }
        )
    }

    useEffect(
        () => {
            const onlyProfile = allUsers.filter(emp => emp.id === parseInt(localStorage.getItem("agent_user")))
            setProfile(onlyProfile)
        }, [allUsers])

    //Test above to see if FIRST NAME ONLY can be parsed out of the two word string of object key "name"


    return (
        <>

            <article className="user__profile">
                <h2>User Profile</h2>

                {
                    isLoggedIn.map((profileObject) => {
                        console.log(isLoggedIn)
                        return <div className="user__card"><div key={`profile--${profileObject.id}`}>  Welcome {profileObject.name.split(` `)[0]}!
                            <li className="user__list">Brokerage: {profileObject.brokerage}</li>
                            <li className="user__list">Location: {profileObject.location} County</li>
                            <li className="user__list">Email: {profileObject.email}</li>
                            <li className="user__list">gigAgent? {profileObject.isProvider ? "Yes" : "No"}</li>
                            <button className="button" onClick={() => {
                                deleteUser(profileObject.id)
                                console.log(profileObject.id)
                            }}>Delete my Account</button></div><div>
                                <label htmlFor="userBio"> About Me </label>
                                <input onChange={submitBio} type="text" id="userBio" className="bio" placeholder="about me" />
                            </div>
                            <fieldset >
                                <button className="button" OnClick={putBio(profileObject.userBio)} type="submit">Submit</button>
                            </fieldset>
                        </div>
                            
                            
                    }
                    )
                    
                }
                </article>

        </>
    )
}