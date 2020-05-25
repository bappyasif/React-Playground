import React, { Component } from "react";
import PropTypes from "prop-types";

class PureComponent extends Component {
  static propTypes = {};

  shouldComponentUpdate() {
    // setTimeout(() => {
    //   console.log("*****Checks Component******");
    // }, 2000);
    return false;
  }

  render() {
    console.log("Pure Component Render");
    return (
      <div>
        <h4>Pure Component {this.props.name}</h4>
      </div>
    );
  }
}

export default PureComponent;
