import React from "react";
// import { Route, Redirect } from "react-router-dom";
import "./about.css"



export const About = () => {
   
   return (
<>
      <h3 className="main"> gigAgent is my capstone project for Nashville Software School Cohort #50  </h3>
      <div className="main"> It was created using JavaScript, ReactJS, and CSS</div>

      <div className="social_header">For more information or to contact me please reach out to me at any of the locations below:</div>

      <ul className="social">
         <li className="social__link">LinkedIn</li>
         <li className="social__link">gitHub</li>
         <li className="social__link">JBGregory.com</li>
      </ul>

</>)
}