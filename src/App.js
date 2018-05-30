import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import History from "./History";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <NavLink
              to="/"
              exact
              activeStyle={{ fontWeight: "bold", color: "red" }}
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/notre-histoire"
              activeStyle={{ fontWeight: "bold", color: "red" }}
              exact
            >
              History
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/notre-histoire" component={History} />
      </div>
    );
  }
}

export default App;
