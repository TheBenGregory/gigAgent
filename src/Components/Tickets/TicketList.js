// import React, { useEffect, useState } from "react"


// export const TicketList = () => {
//     const [tickets, updateTickets] = useState([])

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/reqJob")
//                 .then(res => res.json())
//                 .then((data) => {
//                     updateTickets(data)
//                 }
            
//                 )
//         },
//         []
//     )

//     return (
//         <>
            
//         <article className="tickets">
//                     <h2>Service Tickets</h2>
//                     {
//                         tickets.map(
//                             (ticket) => { return <div key={`ticket--${ticket.id}` }> { ticket.description } submitted by {ticket.customer.name} and worked on by {ticket.employee.name} </div>
//                     }
//                     )
//                 }
//                 </article>
//                 </>
//     )
//     }