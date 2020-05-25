import React, { Component } from "react";

// Different Ways Of Binding
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Greetings",
    };

    // Using Binding Within Constructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Bye Bye",
  //     });
  //     // As this undefined without binding we need to bind it
  //     console.log(this);
  //   }

  // With Arrow Function Only As A Class Property.
  clickHandler = () => {
    this.setState({
      message: "Bye Bye!!",
    });
  };

  render() {
    //   let $this = this;
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>

        {/**Binding Inline Arrow Function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/**Binding Inline */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
