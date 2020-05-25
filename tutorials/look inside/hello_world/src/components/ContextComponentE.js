import React, { Component } from "react";
import ContextComponentF from "./ContextComponentF";
import UserContext from "./userContext";

// With Using Context Type
class ContextComponentE extends Component {
  static contextType = UserContext; // Using Public Class Field Syntax
  render() {
    return (
      <div>
        <ContextComponentF />
        <h4>Nested Context : Component E</h4>
        <h4>Component E Is Using Context Type {this.context}</h4>
      </div>
    );
  }
}
// ContextComponentE.contextType = UserContext; // Without Using Public Class Method

// Without Using Context Type
// class ContextComponentE extends Component {
//     render() {
//       return (
//         <div>
//           <ContextComponentF />
//           <h4>Component E</h4>
//         </div>
//       );
//     }
//   }

export default ContextComponentE;
