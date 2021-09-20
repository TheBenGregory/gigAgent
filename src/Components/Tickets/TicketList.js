import React, { useEffect, useState } from "react"


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [isAssigned, setAssignment] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/reqJobs?_expand=user")
                .then(res => res.json())
                .then((data) => {
                    setAllTickets(data)
                }
            
                )
        },
        []
    )
    useEffect(
        () => { 
        const onlyMyTickets = allTickets.filter(emp => emp.id === parseInt(localStorage.getItem(isAssigned.id)))
        setAssignment(onlyMyTickets.join(", "))
    }, [allTickets])
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