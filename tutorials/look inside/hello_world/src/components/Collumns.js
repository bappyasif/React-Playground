import React from "react";

// Using Shorthand
function Collumns() {
  let items = [];
  return (
    <>
      <td>Name</td>
      <td>aBappy</td>
    </>
  );
}

// Without Shorthand
// function Collumns() {
//   let items = [];
//   return (
//     <React.Fragment>
//       {items.map((item) => (
//         <React.Fragment key={item.id}>
//           <h4>Title</h4>
//           <p>{item.title}</p>
//         </React.Fragment>
//       ))}
//       <td>Name</td>
//       <td>aBappy</td>
//     </React.Fragment>
//   );
// }

export default Collumns;
