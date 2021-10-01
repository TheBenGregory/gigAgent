import React, { useEffect, useState } from "react"

export const getUsers = () => {
     return fetch("http://localhost:8088/users")
          .then(res => res.json())
}


export const getCurrentUser = () => {
     return parseInt(localStorage.getItem("agent_user"))
     
}


// export const setPictures = (id, img) => {
//      return fetch(`http://localhost:8088/users/${id}`, {
//          method: "PATCH",
//          body: JSON.stringify({
//              imageURL: img
//          }),
//          headers: {
//              "Content-Type": "application/json"
//          },
//      })
      
//  }

//  export const getPictures = () => {
//      return fetch("http://localhost:https://api.cloudinary.com/v1_1/dsmjpyt8q/image/upload/users")
//           .then(res => res.json())
// }