import React, { Component } from "react";

class ClassCounter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "aBappy",
    };
  }

  // Runs Once On Start
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  // Runs After Evry Render
  componentDidUpdate(prevProps, prevState) {
    // document.title = `Clicked ${this.state.count} times`;
    // console.log("Updating Document Title");

    // Conditionals Update
    if (prevState.count !== this.state.count) {
      document.title = `Clicked ${this.state.count} times`;
      console.log("Updating Document Title");
    }
  }

  render() {
    return (
      <div>
        <h4>Class Counter</h4>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter1;
