// Funtional Component
import React from "react";

// function greet() {
//   return <h4>Hello aBappy</h4>;
// }

// let greet = () => <h4>Greetings aBappy</h4>;

// export default greet; // Default Export

// PLease Note Component Names Start With Capital Letter By Conveention.
// export let Greet = () => <h4>Greetings aBappy</h4>; // Inline Export

// let greet = (props) => {
//   console.log(props);
//   //   return <h4>Greetings aBappy</h4>;
//   return <h4>Greetings {props.name}</h4>;
// };

// let greet = (props) => {
//   console.log(props);
//   //   return <h4>Greetings aBappy</h4>;
//   return (
//     <h4>
//       Greetings {props.name} a.k.a. {props.comiconCharacter}
//     </h4>
//   );
// };

// Another Destructuring
let greet = (props) => {
  let { name, comiconCharacter } = props;
  return (
    <div>
      <h4>
        Greetings {name} a.k.a. {comiconCharacter}
      </h4>
    </div>
  );
};

// Using Destructuring
// let greet = ({ name, comiconCharacter }) => {
//   return (
//     <div>
//       <h4>
//         Greetings {name} a.k.a. {comiconCharacter}
//       </h4>
//     </div>
//   );
// };

// Using Props
// let greet = (props) => {
//   console.log(props);
//   //   return <h4>Greetings aBappy</h4>;
//   //   props.name = "someOne";
//   return (
//     <div>
//       <h4>
//         Greetings {props.name} a.k.a. {props.comiconCharacter}
//       </h4>
//       {props.children}
//     </div>
//   );
// };

export default greet; // Default Export
