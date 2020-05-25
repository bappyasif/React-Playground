// JSX Component Or Version
import React from "react";

let hello = () => {
  // With JSX
  //   return (
  //     <div>
  //       <h4>Hello aBappy</h4>
  //     </div>
  //   );

  //   return (
  //     <div className="dummyClass">
  //       <h4>Hello aBappy</h4>
  //     </div>
  //   );

  // Without JSX
  //   return React.createElement("div", null, "<h4>Greetings aBappy</h4>");

  //   return React.createElement("div", null, "h4", "Greetings aBappy");

  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h4", null, "Greetings aBappy!!")
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h4", null, "Greetings aBappy!!")
  );
};

export default hello;

// JSX Diffrences
/**
 * Class -> className
 * for -> htmlFor
 * camelCase property Naming Conventions
 *  onclick -> onClick
 *  tabindex -> tabIndex
 */
