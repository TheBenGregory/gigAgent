import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/Homepage";
import { About } from "./About/about.js"



export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <About />
            </Route>            
         
        </>
    )
}


