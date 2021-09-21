import React, { useEffect, useState } from "react";
import "./userprofile.css";

export const Profile = () => {
    const [allUsers, setAllUsers] = useState([])
    const [isLoggedIn, setProfile] = useState([])

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
        })
    } 
    
    useEffect(
        () => { 
        const onlyProfile = allUsers.filter(emp => emp.id === parseInt(localStorage.getItem("agent_user")))
        setProfile(onlyProfile)
    }, [allUsers])



return(
    <>

<article className="user__profile">
    <h2>User Profile</h2>
    
    {
        isLoggedIn.map((profileObject) => {
                return <div className="user__card"><div key={ `profile--${profileObject.id}` }>  Welcome { profileObject.name }! 
                <li className="user__list">Brokerage: {profileObject.brokerage}</li> 
                <li className="user__list">Location: {profileObject.location} County</li> 
                <li className="user__list">Email: {profileObject.email}</li> 
                <li className="user__list">gigAgent? { profileObject.isProvider?"Yes":"No"}</li> 
                 <button className="delete__button" onClick={() => {
                                deleteUser(isLoggedIn.id)
                            }}>Delete my Account</button></div></div>
                
            }
            
            )
            
        }
        
</article>

</>
)
}
