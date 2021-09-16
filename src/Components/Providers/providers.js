import React, { useEffect, useState } from "react"

export const Providers = () => {
    const [providers, assignProviders] = useState([])
    

    useEffect(
        () => {
            fetch("http://localhost:8088/users")
                .then(res => res.json())
                .then((providerArray) => {
                    assignProviders(providerArray)
                }
            
                )
        },
        []
    )

    // const handleClick = () => {
    //     const copy = { ...user }
    //     copy.isProvider = !copy.isProvider
    //     setUser(copy)
    // }
    const [isProvider, setProviders] = useState([])

    useEffect(
        () => { 
        const onlyProviders = providers.map(emp => emp.isProvider)
        setProviders(onlyProviders.join(", "))
    }, [providers])
    
    // const prov = getProviders()

    
    // const isProv = prov.find(
    //     (provider) => {
    //         return prov.isProvider === user.id
    //     }
    // )
    // const totalCost = foundMetal.price
return (
    <>
       
    <article className="providers">
                <h2>gigAgents</h2>
                
                {
                    providers.slice(0, 5).map((providerObject) => {
                            return <div key={ `provider--${providerObject.id}` }> { providerObject.name } </div>
                }
                
                )
            }
            </article>
            </>
)
}
{/* <>
<div>
            
            <div onClick={handleClick}>
              <Card style={{ width: '18rem', cursor : 'pointer' }} >
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              </Card>
            </div>
          </Row>
      </div>
      </> */}