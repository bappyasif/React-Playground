import React, { Component } from "react";

class InputComp extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input placeholder="Enter Name" type="text" ref={this.inputRef}></input>
      </div>
    );
  }
}

export default InputComp;
