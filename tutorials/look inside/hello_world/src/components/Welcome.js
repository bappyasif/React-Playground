// Class Component
import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <h4>Class Component</h4>;
//   }
// }

// Using Destructuring
class Welcome extends Component {
  render() {
    let { name, comiconCharacter } = this.props;
    return (
      <h4>
        Class Component :: Welcome {name} a.k.a. {comiconCharacter}
      </h4>
    );
  }

  // Using Props
  // class Welcome extends Component {
  //   render() {
  //     return (
  //       <h4>
  //         Class Component :: Welcome {this.props.name} a.k.a.{" "}
  //         {this.props.comiconCharacter}
  //       </h4>
  //     );
  //   }
}

export default Welcome;
