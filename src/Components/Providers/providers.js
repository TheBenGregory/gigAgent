import React, { useEffect, useState } from "react"

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
                            return <div key={ `provider--${providerObject.id}` }> 🔹 { providerObject.name } </div>
                            
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
