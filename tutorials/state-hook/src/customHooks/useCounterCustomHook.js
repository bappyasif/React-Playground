import { useState } from "react";

// function useCounterCustomHook() {
//   let [count, setCount] = useState(0);
function useCounterCustomHook(initialCount = 0, value = 1) {
  let [count, setCount] = useState(initialCount);

  let increment = () => {
    setCount((prevCount) => prevCount + value);
    // setCount((prevCount) => prevCount + 1);
  };

  let decrement = () => {
    setCount((prevCount) => prevCount - value);
    // setCount((prevCount) => prevCount - 1);
  };

  let reset = () => {
    setCount(initialCount);
    // setCount(0);
  };

  return [count, increment, decrement, reset];
}

export default useCounterCustomHook;
