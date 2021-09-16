import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/Homepage";
import { About } from "./About/about.js"
import { TicketForm } from "./Tickets/Ticketform";



export const ApplicationViews = () => {
    return (
        <>
            <Route path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <About />
            </Route>    
            <Route path="/TicketForm">
                <TicketForm />
            </Route>            
         
        </>
    )
}


