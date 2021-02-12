import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import MyProfile from "./components/MyProfile";
import MyFamily from "./components/MyFamily";
import Location from "./components/Location";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import db from "./firebase"
import { useStateValue } from "./StateProvider";

function App() {

  const [{user},dispatch] = useStateValue();

  return (
    <Router>
      {!user?(
        <Home/>
      )
      :
      <>
      <Switch>
        <Route exact path="/welcome">
          <Welcome/>
        </Route>
        <Route exact path="/myprofile">
          <MyProfile/>
        </Route>
        <Route exact path="/myfamily">
          <MyFamily/>
        </Route>
        <Route exact path="/location">
          <Location/>
        </Route>
      </Switch>
      </>
}
    </Router>
  );
}

export default App;
