import React, { Component } from "react";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} many times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} many times`;
  }

  render() {
    return (
      <div>
        <hr />
        <h6>Count : {this.state.count}</h6>
        <hr />
        <button onClick={this.increment}>Increment</button>
        <hr />
      </div>
    );
  }
}

export default index;
