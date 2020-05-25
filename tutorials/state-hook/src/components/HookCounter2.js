import React, { useState } from "react";

function HookCounter2() {
  let initialCount = 0;
  let [count, setCount] = useState(initialCount);
  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      // Without Any Inner Function, Does Not Reflect Previous State
      //   setCount(count + 1);
      // With Inner Arrow Function, Does reflect On Previous State
      setCount((prevCount) => prevCount + 1);
    }
  };
  //   let incrementFive = () => setCount(count + 5);
  return (
    <div>
      <h4>Count: {count}</h4>
      {/*  Unsafe State */}
      {/* <button onClick={() => setCount(count + 1)}>Incremenet Count</button>
      <button onClick={() => setCount(count - 1)}>Decrement Count</button> */}
      {/* Safe State */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incremenet Count
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement Count
      </button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounter2;
