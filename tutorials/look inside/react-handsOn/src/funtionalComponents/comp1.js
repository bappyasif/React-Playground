import React from "react";

let Comp1 = (props) => (
  <div>
    {/* {props.prop1 ? "A" : "B"} */}
    {/* {props.nickName} */}
    {props.name ? props.name : "No Props "}
    {props.age ? props.age : "comp1 "}

    {props.prop1 ? props.prop1 : "No Props "}
    {/* {props.name}
    {props.age} */}
    {/* {props ? props.name + props.age : "Component 01"} */}
    {/* Component 01 */}
  </div>
);

// let Comp1 = (props) => {
//   let comp = "componets 01";
//   return (
//     // props ? props.name : "comp1"
//     // {props ? props.age : "comp1"}
//     <div>
//       {props ? props.name : comp}
//       {/* Component 01 */}
//     </div>
//   );
// };

export default Comp1;
