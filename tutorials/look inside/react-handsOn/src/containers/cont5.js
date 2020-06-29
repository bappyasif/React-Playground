import React, { Component } from "react";

// Refactored Methods
export class cont5 extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    value: "",
  };

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.value}
          <label>Name</label>
          <input id="name" type="text" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default cont5;
