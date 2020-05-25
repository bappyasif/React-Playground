import React, { Component } from "react";

// Render Props Refers To Term For Sharing Codes
// Between Component Using Function As A Prop
class UserRenderPropsExample extends Component {
  render() {
    return (
      <div>
        {/* <h4>{this.props.name}</h4> */}
        {/* <h4>{this.props.name()}</h4> */}
        {/* <h4>{this.props.name(true)}</h4> */}
        <h4>{this.props.render(true)}</h4>
      </div>
    );
  }
}

export default UserRenderPropsExample;
