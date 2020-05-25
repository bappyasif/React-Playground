import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.greetParent = this.greetParent.bind(this);
    this.greetAgain = this.greetAgain.bind(this);
    this.state = {
      parentName: "Parent",
    };
  }

  //   greetParent() {
  //     alert(`Greetings ${this.state.parentName}s`);
  //   }

  greetParent(childParam) {
    alert(`Greetings ${this.state.parentName}s from ${childParam}`);
  }

  greetAgain(childParam) {
    alert(`Greetings ${this.state.parentName}s from ${childParam}`);
  }

  render() {
    return (
      <div>
        {/* <ChildComponent greetHandler={this.greetParent} /> */}
        <ChildComponent greetHandler={this.greetAgain} />
        {/* <ChildComponent anotherHandler={this.greetAgain} /> */}
      </div>
    );
  }
}

export default ParentComponent;
