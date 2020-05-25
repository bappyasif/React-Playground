import React from "react";
// import styles from "./src/appStyle.module.css";

let heading = {
  fontSize: "65px",
  color: "darkRed",
};

// With Modules
function InlineStyling() {
  return (
    <div>
      {/* {<h2 className={styles.success}>Success Styling</h2>} */}
      <h2 className="error">Error Styling</h2>
      <h2 style={heading}>Inline Styling</h2>
    </div>
  );
}

// Without Modules
// function InlineStyling() {
//   return (
//     <div>
//       <h2 style={heading}>Inline Styling</h2>
//     </div>
//   );
// }

export default InlineStyling;
