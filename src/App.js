import React, { Component } from "react";
import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import { OpeningScreen } from "./components/OpeningScreen";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { CreateGroup } from "./components/CreateGroup";
import { Group } from "./components/Group";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ OpeningScreen } />
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/signIn" component={ SignIn } />
          <Route exact path="/signUp" component={ SignUp } />
          <Route exact path="/createGroup" component={ CreateGroup } />
          <Route exact path="/group" component={ Group } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
