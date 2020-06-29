import React, { Component } from "react";

// Controlled Form
export class cont4 extends Component {
  state = {
    value: "",
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
    // console.log(ev.target.value);
    // return <div>{ev.target.value}</div>;
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state.value);
    // console.log(ev.target.name.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.value}
          <label>Name</label>
          <input id="name" type="text" onChange={this.handleChange} />
          {/* <label for="name">
                Name
                <input id="name" type="text" onChange={this.handleChange} />
              </label> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default cont4;
