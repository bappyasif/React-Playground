import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <hr />
        <h6>Count : {this.state.count}</h6>
        <hr />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <hr />
        <button onClick={this.reset}>Reset</button>
        <hr />
      </div>
    );
  }
}

export default index;
