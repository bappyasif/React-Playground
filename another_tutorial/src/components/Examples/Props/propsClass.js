import React, { Component } from "react";

export class propsClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: "Who this",
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event) => {
    // console.log("event.target.value");
    event.preventDefault();
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h4>Today Is : {this.props.day}</h4>
        <p>{this.state.desc}</p>
        <button type="button" onClick={this.changeHandler}>
          Click Here
        </button>
        <button type="button" onClick={this.changeHandler}>
          {this.props.buttonText}
        </button>
        <input type="text" onChange={this.changeHandler} />
      </div>
    );
  }
}

export default propsClass;
