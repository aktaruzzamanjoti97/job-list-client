import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
// import Login from "./components/Login/Login/Login";
import { useState } from "react";
import { createContext } from "react";
import JobSeeker from "./components/JobSeeker/JobSeeker/JobSeeker";
import Employer from "./components/Employer/Employer/Employer";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/login">
            <Login />
          </Route> */}

          <Route path="/employer">
            <Employer />
          </Route>

          <Route path="/jobSeeker">
            <JobSeeker />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
