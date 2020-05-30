import React, { Component } from "react";

class index extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Click</button>
        <h6>Count : {this.state.count}</h6>
      </div>
    );
  }
}

export default index;
