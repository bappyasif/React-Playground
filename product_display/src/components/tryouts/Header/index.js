import React from "react";
import NavigationIcon from "../NavigationIcon";

function index() {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <h4 className="font-bold text-2xl">Menu Panel</h4>
      <NavigationIcon />
    </header>
  );
}

// function index() {
//   return (
//     <div>
//       <h4 className="font-bold text-2xl">Menu Panel</h4>
//     </div>
//   );
// }

export default index;
