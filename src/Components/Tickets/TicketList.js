import React, { useEffect, useState } from "react"
import { getCurrentUser } from "../apiManager/apiManager.js";
import "./TicketList.css"
import moment from "moment";
import { Switch } from "antd";

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [isAssigned, setAssignment] = useState([])
    const currentUser = getCurrentUser()


    const markComplete = (id) => {
        return fetch(`http://localhost:8088/reqJobs/${id}`, {
            method: "DELETE"
        })
    }
    const getJobs = () => {
        return fetch(`http://localhost:8088/reqJobs?userId=${currentUser}&_expand=user`)
            .then(res => res.json())
    }
    useEffect(
        () => {
            getJobs()
                .then((data) => {
                    setAllTickets(data) }
                )
        },
        []
    )



    useEffect(
        () => {
            const onlyMyTickets = allTickets.filter(emp => emp.userId === isAssigned.consumerId)
            setAssignment(onlyMyTickets)
            console.log(onlyMyTickets)
        }, [allTickets])

    return (
        <>

            <article className="tickets">
                <h2 className="h2">My Pending Jobs</h2>
                {

                    allTickets.map((ticket) => {
                        return <div key={`profile--${ticket.id}`}> <div className="alltickets">Showing requested at {ticket.address} on {moment(ticket.date).calendar("dddd, MMMM Do YYYY,")}  with {ticket.clientName} at {ticket.time}. {ticket.clientName.split(` `)[0]} can be reached at {ticket.phoneNumber}</div>
                            <div className="comp__button"><button className="job__button" onClick={() => {
                                markComplete(ticket.id)
                                    .then(getJobs)
                                    .then(jobRender => setAllTickets(jobRender))
                            }}>Mark Job Complete</button></div>
                            <div></div> <div className="deny__button"><button className="job__button" onClick={() => {
                                markComplete(ticket.id)
                                    .then(getJobs)
                                    .then(jobRender => setAllTickets(jobRender))
                            }}>Deny Request</button></div></div>





                    }
                    )
                }
            </article>
        </>
    )
}

