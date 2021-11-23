import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./HomePage.css"


export const HomePage = () => {
   return (
     <>
      <div className="body__homepage">
         
         <div className="mainbox">
            <div className="welcome">Welcome to gigAgent</div>
            <div className="head"> <h3>What is gigAgent?</h3></div>
          
            <div className="main">Peer-to-peer application that connects real estate agents to other licensed agents who are qualified and available to show a property and free up an agents already busy schedule</div>

            <div className="main2">Ease the stress of traveling to a showing with gigAgent</div>
            <div className="main2">gigAgent creates work opportunites for licensed and reliable agents to perform home and property showings on behalf of other agents. This can be done to supplement income or, for reliable and responsive agents, can be done full time. </div>
            <div className="main3">It's the Uber of real estate</div>
         </div></div>
         </>
   )
}
