import React, { useState } from "react";

function Index() {
  let [count, setCount] = useState(0);
  // useState()
  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <div>
      <hr />
      <h6>Count : {count}</h6>
      <hr />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <button onClick={reset}>Reset</button>
      <hr />
    </div>
  );
}

export default Index;
