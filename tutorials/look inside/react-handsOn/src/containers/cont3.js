import React, { Component } from "react";

// Uncontrolled Form
export class cont3 extends Component {
  handleChange = (ev) => {
    console.log(ev.target.value);
    // return <div>{ev.target.value}</div>;
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(ev.target.name.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

export default cont3;
