import React, { Component } from "react";
import "./App.css";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import { CreateGroup } from "./components/CreateGroup";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route exact path="/createGroup" component={ CreateGroup } />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
