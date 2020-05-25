import React, { useState, useEffect } from "react";

function HookCounter1() {
  let [count, setCount] = useState(0);
  let [name, setNamne] = useState("");

  // Use Effect Runs After Every Render
  //   useEffect(() => {
  //     document.title = `You Clicked ${count} times`;
  //     console.log("Updating Document Title");
  //   });
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    console.log("Updating Document Title");
  }, [count]);

  return (
    <div>
      <h4>Use Effect On Counter</h4>
      <input
        type="text"
        value={name}
        onChange={(event) => setNamne(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounter1;
