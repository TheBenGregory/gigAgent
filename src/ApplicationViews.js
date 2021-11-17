import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./src/Components/HomePage/Homepage";
import { About } from "./src/Components/About/about.js"
import { TicketForm } from "./src/Components/Tickets/Ticketform";
import { Providers } from "./src/Components/Providers/providers";
import { Profile } from "./src/Components/UserProfile/userprofile";
import { TicketList } from "./src/Components/Tickets/TicketList";


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


