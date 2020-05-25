import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, channelContext } from "../App";

// Using Hooks
function ComponentE() {
  let user = useContext(UserContext);
  let channel = useContext(channelContext);
  return (
    <div>
      <h4>Using Hooks With Context</h4>
      {user} - {channel}
      <ComponentF />
    </div>
  );
}

export default ComponentE;

// Without Using Contyext Hook
// class ComponentE extends Component {
//   render() {
//     return (
//       <div>
//         <ComponentF />
//       </div>
//     );
//   }
// }

// export default ComponentE;
