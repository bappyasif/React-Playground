import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "aBappy",
    };

    console.log("Lifecycle A Constructor Function");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  changeState = () => {
    this.setState({
      name: "bSarkar",
    });
  };

  render() {
    console.log("LifecycleA Render");
    return (
      <div>
        <h4>Lifecycle A</h4>
        <LifecycleB />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifecycleA;
