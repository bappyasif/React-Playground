import React from "react";
import "./renderStyle.css";

// With Multiple Class Usage
function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h2 className={`${className} font_xl`}>Stylesheet Component</h2>
    </div>
  );
}

// With Props
// function Stylesheet(props) {
//   let className = props.primary ? "primary" : "";
//   return (
//     <div>
//       <h2 className={className}>Stylesheet Component</h2>
//     </div>
//   );
// }

// Without Props
// function Stylesheet() {
//   return (
//     <div>
//       <h2 className="primary">Stylesheet Component</h2>
//     </div>
//   );
// }

export default Stylesheet;
