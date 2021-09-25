import React, { useEffect, useState } from "react";
import "./userprofile.css";
import { useHistory } from "react-router";

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState({})

    const [userBio, setBio] = useState(

    )
    console.log(userBio)
    const userId = parseInt(localStorage.getItem("agent_user"))
    const [image, setImage] = useState({
        profilePicture: ''
    })
    const [loading, setLoading] = useState(false)


    const history = useHistory()

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




    const deleteUser = (id) => {
        return fetch(`http://localhost:8088/users/${id}`, {
            method: "DELETE"
        }
        ).then(history.push("/login"))
    }

    const submitBio = (evt) => {
        const copy = { ...userBio }
        copy[evt.target.id] = evt.target.value
        setBio(copy)


    }
    const patchBio = (id, bio) => {
        return fetch(`http://localhost:8088/users/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                userBio: bio
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dsmjpyt8q/image/upload', {
            method: 'POST',
            body: data
        }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
        
    }

    // useEffect(
    //     () => {
    //         const onlyProfile = currentUser.filter(emp => emp.id === parseInt(localStorage.getItem("agent_user")))
    //         setProfile(onlyProfile)
    //     }, [allUsers])

    //Test above to see if FIRST NAME ONLY can be parsed out of the two word string of object key "name"


    return (
        <>

            <article className="user__profile">
                <h2>User Profile</h2>



                <div className="user__card"><div key={`profile--${currentUser.id}`}><h4>  Welcome {currentUser?.name?.split(` `)[0]}!</h4>
                    <li className="user__list">Brokerage: {currentUser.brokerage}</li>
                    <li className="user__list">Email: {currentUser.email}</li>
                    <li className="user__list">gigAgent? {currentUser.isProvider ? "Yes" : "No"}</li>
                    <li className="user__list">Location: {currentUser.location} County</li>
                    <li className="user__list">About Me: {currentUser.userBio} </li>
                    <div className="uploader">
                        <h4>Upload Profile Picture</h4>
                        <input
                            type="file"
                            name="profilePicture"
                            placeholder="Upload an Image"
                            onChange={uploadImage} 
                            
                             />
                        {loading 
                            ? (
                                <h3>Loading...</h3>
                            ) :
                            (<img src={image} style={{ width: '200px' }} />
                            )}

                    </div>
                    <button className="button" onClick={() => {
                        deleteUser(currentUser.id)
                        console.log(currentUser.id)
                    }}>Delete my Account</button></div><div className="bio">
                        <label htmlFor="userBio"> About Me </label>
                        <input clasName="biobox" onChange={submitBio} type="text" id="userBio"  placeholder="about me" rows="4" size="40" maxlength="50" />
                    </div>
                    <fieldset >
                        <button className="button" onClick={() => patchBio(currentUser.id, userBio.userBio)}  type="submit">Submit</button>
                    </fieldset>
                </div>






            </article>

        </>
    )
    }