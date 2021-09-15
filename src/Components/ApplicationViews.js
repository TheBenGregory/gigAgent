import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/Homepage";



export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <HomePage />
            </Route>
         
        </>
    )
}


