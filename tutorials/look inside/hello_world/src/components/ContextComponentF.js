import React, { Component } from "react";
import { ContextConsumer } from "./userContext";

// With Context
class ContextComponentF extends Component {
  render() {
    return (
      <ContextConsumer>
        {(userName) => {
          return (
            <div>
              <h4>Nested Context : Component F</h4>
              <h4>Using Context Consumer Provider</h4>
              <h4>Greetings {userName}</h4>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

// Without Context
// class ContextComponentF extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Nested Context : Component F</h4>
//       </div>
//     );
//   }
// }

export default ContextComponentF;
