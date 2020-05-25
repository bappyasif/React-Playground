import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // Accessing Refs
    this.inputRef = React.createRef();

    // Callback Refs
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // Setting Focus
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    // Accessing Callbacks
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // Accessing Refs
    alert(this.inputRef.current.value);
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="User Name"></input>
        <input
          type="text"
          ref={this.setCbRef}
          placeholder="User Password"
        ></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
