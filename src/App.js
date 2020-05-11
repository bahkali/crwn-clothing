import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats Pages</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
