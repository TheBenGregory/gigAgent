import React, { useEffect, useState } from "react"
import { getCurrentUser } from "../apiManager/apiManager.js";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    // const [isAssigned, setAssignment] = useState([])
    const currentUser = getCurrentUser() 

    useEffect(
        () => {
            fetch(`http://localhost:8088/reqJobs?userId=${currentUser}&_expand=user`)
                .then(res => res.json())
                .then((data) => {
                    setAllTickets(data)
                }
            
                )
        },
        []
    )
    // useEffect(
    //     () => { 
    //     const onlyMyTickets = allTickets.filter(emp => emp.userId === isAssigned.consumerId)
    //     setAssignment(onlyMyTickets)
    //     console.log(onlyMyTickets)
    // }, [allTickets])
    return (
        <>
            
        <article className="tickets">
                    <h2>My Pending Jobs</h2>
                    {
                         allTickets.map((ticket) => {
                            return <div key={ `profile--${ticket.id}` }> Job Requested at { ticket.address } on { ticket.date } with { ticket.clientName } at { ticket.time }</div>
                    }
                    )
                }
                </article>
                </>
    )
    }