import React, { Component } from "react";

export class liftingUp extends Component {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }

  render() {
    // this.props.props2 = " WA";
    console.log(this.props.props2);
    let fruitsList = ["apple", "berries"];
    let listDisplay = fruitsList.map((fruit, idx) => (
      <li key={idx}>{fruit}</li>
    ));
    return (
      <div>
        <h4>Fruits List</h4>
        {listDisplay}
        <div>{this.props.props1 ? listDisplay : "Not Found"}</div>
        <button onClick={this.props.props2}>Click</button>
      </div>
    );
  }
}

export default liftingUp;
