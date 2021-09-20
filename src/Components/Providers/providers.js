import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Providers = () => {
    const [allAgents, assignAllAgents] = useState([])
    const [isProviders, setProviders] = useState([])
    

    useEffect(
        () => {
          return fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((providerArray) => {
                    assignAllAgents(providerArray)
                }
            
                )
        },
        []
    )
   
    
    
    useEffect(
        () => { 
        const onlyProviders = allAgents.filter(emp => emp.isProvider === true)
        setProviders(onlyProviders)
    }, [allAgents])
    
    

    
   
            return (
                <>
       
    <article className="providers">
                <h2>Available gigAgents</h2>
                
                {
                    isProviders.map((providerObject) => {
                        return (
                             
                           <Link className="gig_link" to="/TicketForm"> <div key={ `provider--${providerObject.id}` }>  { providerObject.name }</div> </Link>
                        )
                            
                            
                        }
                    
                        )
                    }
                    
            </article>
            
            </>
)
}
// const handleClick = () => {
//     const copy = { ...user }
//     copy.isProvider = !copy.isProvider
//      setUser(copy)
//  }
 <>
    
         
      
      </> 
