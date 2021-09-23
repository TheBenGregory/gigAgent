import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./providers.css"

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
                        console.log(providerObject)
                        return (
                             <div className="gig__link">
                           <Link to={`/TicketForm/${providerObject.id}`}> <div key={ `provider--${providerObject.id}` }> <img className="profile__pic" src={providerObject.imageUrl} style={{ height: "100px", paddingRight: "10px" }}/>{ providerObject.name }</div></Link><div>is an agent with {providerObject.brokerage} and services {providerObject.location} County. </div>
                            </div>
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
