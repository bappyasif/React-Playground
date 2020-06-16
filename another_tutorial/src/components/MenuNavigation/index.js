import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import AbouUs from "../../views/AboutUs";
import HTTPCallout from "../HTTPCallouts";
import AccountForm from "../UncontrolledForm";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form Page</NavLink>
            </li>
            <li>
              <NavLink to="/httpCallout">Http Callout</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h4>Home Page</h4>
          </Route>
          <Route path="/about">
            <AbouUs />
          </Route>
          <Route exact path="/httpCallout">
            <h4>HTTP CallOut</h4>
            <HTTPCallout />
          </Route>
          <Route exact path="/form">
            <h4>Account Form</h4>
            <AccountForm />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default index;
