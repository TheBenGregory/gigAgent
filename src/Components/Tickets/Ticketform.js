import React, { useState } from "react"
import { useHistory } from "react-router";



export const TicketForm = () => {
    const [ticket, updateTicket] = useState({
        isComplete: false}
    );
    
    const history = useHistory()

    const submitTicket = (evt) => {
        evt.preventDefault()
        const newTicket = {
            clientName: ticket.clientName,
            consumerId: parseInt(localStorage.getItem("agent_user")),
            userId: ticket.userId,
            date: ticket.date,
            phoneNumber: ticket.phoneNumber,
            time: ticket.time,
            address: ticket.address,
            isComplete: ticket.isComplete
        }
    


        const fetchOption = {
            method: "POST",
            headers: {
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }
        return fetch("http://localhost:8088/reqJobs", fetchOption) 
        .then(() => {
            history.push("/providers")
        })
    }

    return (
<>
        <form className="ticketForm">
            <h2 className="ticketForm__title">Request a Showing</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="clientName">Client Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Client Name"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.clientName = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Client Phone:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Phone #"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.phoneNumber = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Showing Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.address = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Client Name"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.date = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        required autoFocus
                        type="time"
                        className="form-control"
                        placeholder=""
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.time = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            
            <button className="btn btn-primary" onClick={submitTicket}>
                Send Request
            </button>
        </form>
    
</>)
}