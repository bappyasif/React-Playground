import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "aBappy",
    };

    console.log("Lifecycle B Constructor Function");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB Render");
    return (
      <div>
        <h4>Lifecycle B</h4>
      </div>
    );
  }
}

export default LifecycleB;
