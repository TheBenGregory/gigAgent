import React from "react";
import { Route, Redirect } from "react-router-dom";
import logo from "./logo.png";



export const HomePage = () => {
   return (<img 
   src={logo}
   alt="" 
   style={{ height: "120px", paddingRight: "10px" }} 
 /> )
}


