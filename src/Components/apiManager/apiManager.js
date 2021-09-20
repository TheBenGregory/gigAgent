import React, { useEffect, useState } from "react"

export const getUsers = () => {
   
       return fetch("http://localhost:8088/user")
            .then(res => res.json()) }


export const getCurrentUser = () => {
          const user = localStorage.getItem("agent_user")
       return fetch("http://localhost:8088/user")
            .then(res => res.json()) }


// export const deleteUser = () => {
//      const user = localStorage.getItem("agent_user")
//      return fetch("http://localhost:8088/users",
//                method: "DELETE")
//                .then(res => res.json())
// }
