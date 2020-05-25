import React from "react";
import ReactDOM from "react-dom";

// With Portal
function PortalDemo() {
  return ReactDOM.createPortal(
    <h4>Portal Demo</h4>,
    document.getElementById("root")
    // document.getElementById("portal_root")
  );
}

// Without Portal
// function PortalDemo() {
//   return (
//     <div>
//       <h4>Portal Demo</h4>
//     </div>
//   );
// }

export default PortalDemo;
