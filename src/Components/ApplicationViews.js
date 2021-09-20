import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage/Homepage";
import { About } from "./About/about.js"
import { TicketForm } from "./Tickets/Ticketform";
import { Providers } from "./Providers/providers";
import { Profile } from "./UserProfile/userprofile";
import { TicketList } from "./Tickets/TicketList";


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
            <Route exact path="/userprofile">
                <Profile />
            </Route>          
            <Route exact path="/TicketList">
                <TicketList />
            </Route>    
         
        </>
    )
}


