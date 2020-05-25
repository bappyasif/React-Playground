import React, { Component } from "react";
import { UserContext, channelContext } from "../App.js";

// With Using Both Context
class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(name) => {
            return (
              <channelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      <h4>Multiple Context</h4>
                      <h4>
                        Greetings "{name}" From UserContext, Entity "{channel}"
                        From ChannelContext
                      </h4>
                    </div>
                  );
                }}
              </channelContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

// With Using Context Consumer
// class ComponentF extends Component {
//   render() {
//     return (
//       <div>
//         <UserContext.Consumer>
//           {(name) => {
//             return (
//               <div>
//                 <h4>Using Context</h4>
//                 <h4>Greetings {name}</h4>
//               </div>
//             );
//           }}
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }

// Without Using Context Consumer
// class ComponentF extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Using Context</h4>
//         <h4>User Name {name}</h4>
//       </div>
//     );
//   }
// }

export default ComponentF;
