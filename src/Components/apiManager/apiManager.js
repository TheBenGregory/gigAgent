import React, { useEffect, useState } from "react"

export const getUsers = () => {
     return fetch("http://localhost:8088/users")
          .then(res => res.json())
}


export const getCurrentUser = () => {
     return parseInt(localStorage.getItem("agent_user"))
     
}


// export const setReqJob = () => {
//      const user = localStorage.getItem("agent_user")
//      fetch("http://localhost:8088/reqJob", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json"
//           },
//           body: JSON.stringify(reqJob)
// export const deleteUser = () => {
//      const user = localStorage.getItem("agent_user")
//      return fetch("http://localhost:8088/users",
//                method: "DELETE")
//                .then(res => res.json())
// }
