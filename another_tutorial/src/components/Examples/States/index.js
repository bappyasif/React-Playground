import React, { Component } from "react";
import LiftingUp from "./liftingUp";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "....",
      initials: "||||",
      visits: 0,
    };
    this.accessStates = this.accessStates.bind(this);
    this.withPrevState = this.withPrevState.bind(this);
    this.capitalizeInitials = this.capitalizeInitials.bind(this);
  }

  accessStates = () => {
    this.setState({
      name: "Washington State",
      initials: "wa",
      visits: this.state.visits + 1,
    });
  };

  withPrevState = () => {
    this.setState((prevState) => {
      return { visits: prevState.visits + 1 };
    });
  };

  capitalizeInitials = () => {
    this.setState({
      initials: "changed happened",
    });
    return "Changed happend";
  };

  render() {
    return (
      <div>
        <p>
          Accessing directly {this.state.name}, {this.state.initials} ,{" "}
          {this.state.vistis}
        </p>
        <p>
          Accessing onClick {this.state.name}, {this.state.initials} ,{" "}
          {this.state.visits}
          <button onClick={this.accessStates}>Click Here</button>
          <button onClick={this.withPrevState}>
            Click Here!!{this.state.visits}
          </button>
        </p>
        {/* <LiftingUp /> */}
        {/* <LiftingUp props1={this.state.name} props2={this.state.initials} /> */}
        <LiftingUp props1={this.state.name} props2={this.capitalizeInitials} />
      </div>
    );
  }
}

export default index;
