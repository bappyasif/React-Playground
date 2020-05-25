import React, { useState } from "react";

// Using spread operator to stop merging object states.
function HookCounter3() {
  // State Variable Can Be Of Any Data Type
  let [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={
            (event) => setname({ ...name, firstName: event.target.value }) // copy existing object and overwrite firstname
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={
            (event) => setname({ ...name, lastName: event.target.value }) // copy existing object and overwrite lastname
          }
        />
        <h4>First Name : {name.firstName}</h4>
        <h4>Last Name : {name.lastName}</h4>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
}

// function HookCounter3() {
//   // State Variable Can Be Of Any Data Type
//   let [name, setname] = useState({ firstName: "", lastName: "" });
//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name.firstName}
//           onChange={(event) => setname({ firstName: event.target.value })}
//         />
//         <input
//           type="text"
//           value={name.lastName}
//           onChange={(event) => setname({ lastName: event.target.value })}
//         />
//         <h4>First Name : {name.firstName}</h4>
//         <h4>Last Name : {name.lastName}</h4>
//         <h4>{JSON.stringify(name)}</h4>
//       </form>
//     </div>
//   );
// }

export default HookCounter3;
