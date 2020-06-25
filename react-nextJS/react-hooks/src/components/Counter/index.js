import React, { Component } from "react";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
  }

  componentDidMount() {
    document.title += ` Clicked ${this.state.count} times`;
    // document.title += ` Counter Incremented ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = ` Counter Incremented ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <h4>Counter Implementation Without Hook </h4>
        <button onClick={this.increment}>
          To Increment <span>Clicked {this.state.count} times</span>
        </button>
      </div>
    );
  }
}

export default index;
