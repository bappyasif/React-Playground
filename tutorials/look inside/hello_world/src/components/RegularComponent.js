import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular Component Render");
    return (
      <div>
        <h4>Regular Component {this.props.name}</h4>
      </div>
    );
  }
}

export default RegularComponent;
