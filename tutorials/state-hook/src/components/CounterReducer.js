import React, { useReducer } from "react";

function CounterReducer() {
  let initialState = 0;
  let reducerFunction = (currentState, action) => {
    switch (action) {
      case "increment":
        return currentState + 1;
      case "decrement":
        return currentState - 1;
      case "reset":
        return initialState;
      default:
        return currentState;
    }
  };
  let [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div>
      <h4>Count - {count}</h4>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Re-set</button>
    </div>
  );
}

export default CounterReducer;
