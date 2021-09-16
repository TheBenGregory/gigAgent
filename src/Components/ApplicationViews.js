import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/Homepage";
import { About } from "./About/about.js"
import { TicketForm } from "./Tickets/Ticketform";
import { Providers } from "./Providers/providers";



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
            <Route path="/providers">
                <Providers />
            </Route>            
         
        </>
    )
}


