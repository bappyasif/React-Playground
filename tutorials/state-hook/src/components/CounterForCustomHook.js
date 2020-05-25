import React from "react";
import useCounterCustomHook from "../customHooks/useCounterCustomHook";

function CounterForCustomHook() {
  let [count, increment, decrement, reset] = useCounterCustomHook(0, 1);
  //   let [count, setCount] = useState(0);

  //   let increment = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };

  //   let decrement = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };

  //   let reset = () => {
  //     setCount(0);
  //   };

  return (
    <div>
      <h4>Count : {count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Re-Set</button>
    </div>
  );
}

export default CounterForCustomHook;
