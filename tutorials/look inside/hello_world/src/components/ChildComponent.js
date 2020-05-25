import React from "react";

// With Destructuring
function ChildComponent(props) {
  //   let { greetHandler, anotherHandler } = props;
  let { greetHandler } = props;
  return (
    <div>
      {/* Without Parameters */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

      {/* With Parameters With AarrowFunction*/}
      <button onClick={() => greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

// Without Destructuring
// function ChildComponent(props) {
//   return (
//     <div>
//       {/* Without Parameters */}
//       {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

//       {/* With Parameters With AarrowFunction*/}
//       <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
//     </div>
//   );
// }

export default ChildComponent;
