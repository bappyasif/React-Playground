import React, { Component } from "react";

class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mouseover", this.logMousePosition);
  }

  //   componentWillUnmount() {
  //     window.removeEventListener("mouseover", this.logMousePosition);
  //   }

  render() {
    return (
      <div>
        <h4>Run Effects Only Once</h4>
        X-{this.state.x} & Y-{this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
