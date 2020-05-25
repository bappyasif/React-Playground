import React, { Component } from "react";

class Message extends Component {
  // Inorder to use component state we have to use class constructor.
  constructor() {
    super();
    // State object
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    // Setting State
    this.setState({
      message: "Thank You For Subscribing",
    });
  }

  render() {
    // return <h4>State Component :: Welcome Visitor</h4>;
    return (
      <div>
        <h4>State Component :: {this.state.message}</h4>;
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
