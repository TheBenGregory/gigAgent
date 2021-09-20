import React, { useEffect, useState } from "react"

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

<article className="profile">
    <h2>User Profile</h2>
    
    {
        isLoggedIn.map((profileObject) => {
                return <div key={ `profile--${profileObject.id}` }>  { profileObject.name } 
                 <button onClick={() => {
                                deleteUser(isLoggedIn.id)
                            }}>Delete my Account</button></div>
                
            }
            
            )
            
        }
        
</article>

</>
)
}
