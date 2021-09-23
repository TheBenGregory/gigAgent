import React, { useEffect, useState } from "react"

export const getUsers = () => {
     return fetch("http://localhost:8088/users")
          .then(res => res.json())
}


export const getCurrentUser = () => {
     return parseInt(localStorage.getItem("agent_user"))
     
}


