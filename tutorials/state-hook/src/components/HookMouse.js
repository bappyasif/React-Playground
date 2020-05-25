import React, { useState, useEffect } from "react";

function HookMouse() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  let logMousePosition = (event) => {
    console.log("Mouse Cordinates");
    setX(event.clientX);
    setY(event.clientY);
  };

  //   useEffect((event) => {
  //     console.log("Use Effect Is Called");
  //     window.addEventListener("mouseover", logMousePosition);
  //   });
  useEffect((event) => {
    console.log("Use Effect Is Called");
    window.addEventListener("mouseover", logMousePosition);

    // component unmounting return code Or Clean Up Code.
    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mouseover", logMousePosition);
    };
  }, []); // only updates on initial render method
  return (
    <div>
      Hooks X - {x} & Y - {y}
    </div>
  );
}

export default HookMouse;
