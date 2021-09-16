import React, { useState } from "react"



export const TicketForm = () => {
    const [ticket, update] = useState();

    const saveTicket = (event) => {
        event.preventDefault()
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">Request a Showing</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Client Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Client Name"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Client Phone:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Phone #"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Showing Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Client Name"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Time:</label>
                    <input
                        required autoFocus
                        type="time"
                        className="form-control"
                        placeholder=""
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Select Agent:</label>
                    <select id="providers" 
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                            }
                        } />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={saveTicket}>
                Send Request
            </button>
        </form>
    )
}
