import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // clickHandler = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          Counts Clicks {this.state.count}
        </button>
      </div>
    );
  }
}

export default StateExample;
