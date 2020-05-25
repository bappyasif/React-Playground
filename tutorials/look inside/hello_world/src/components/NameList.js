import React from "react";

function NameList() {
  let names = ["aBappy", "bSarkar", "aBappy", "bSarkar"];
  // let renderList = names.map((name) => <h4 key={name}>{name}</h4>); // Breaks When Dulplication Occurs.
  let renderList = names.map((name, idx) => <h4 key={idx}>{name}</h4>); // Duplication Does Not Break.
  return (
    // Improved Approach
    <div>{renderList}</div>

    // Using Map
    // <div>
    //   {names.map((name) => (
    //     <h4>{name}</h4>
    //   ))}
    // </div>

    // Crude Way
    // <div>
    //   <h4>{names[0]}</h4>
    //   <h4>{names[1]}</h4>
    // </div>
  );
}
export default NameList;
