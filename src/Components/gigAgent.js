import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/login";
import { Register } from "./auth/register";


export const GigAgent = () => (
  
  <>
    <Route
      render={() => {
        if (localStorage.getItem("agent_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

