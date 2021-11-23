import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./Components/HomePage/Homepage.js";
import { About } from "./Components/About/about.js"
import { TicketForm } from "./Components/Tickets/Ticketform";
import { Providers } from "./Components/Providers/providers.js";
import { Profile } from "./Components/UserProfile/userprofile.js";
import { TicketList } from "./Components/Tickets/TicketList";


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <About />
            </Route>    
            <Route exact path="/TicketForm/:ticketId(\d+)">
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


