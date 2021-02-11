import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import MyProfile from "./components/MyProfile";
import MyFamily from "./components/MyFamily";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import db from "./firebase"

/*
install materialsui core


*/
function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/welcome">
          <Welcome/>
        </Route>
        <Route exact path="/myprofile">
          <MyProfile/>
        </Route>
        <Route exact path="/myfamily">
          <MyFamily/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
