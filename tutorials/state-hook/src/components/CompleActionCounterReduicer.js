import React, { useReducer } from "react";

function CompleActionCounterReduicer() {
  //   let initialState = { firstCounter: 0 };

  let initialState = { firstCounter: 0, secondCounter: 10 };

  let reducerFunction = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...currentState,
          firstCounter: currentState.firstCounter + action.value,
        };
      case "decrement":
        return {
          ...currentState,
          firstCounter: currentState.firstCounter - action.value,
        };
      case "increment2":
        return {
          ...currentState,
          secondCounter: currentState.secondCounter + action.value,
        };
      case "decrement2":
        return {
          ...currentState,
          secondCounter: currentState.secondCounter - action.value,
        };
      case "reset":
        return initialState;
      default:
        return currentState;
    }

    // switch (action.type) {
    //   case "increment":
    //     return { firstCounter: currentState.firstCounter + action.value };
    //   case "decrement":
    //     return { firstCounter: currentState.firstCounter - action.value };
    //   case "reset":
    //     return initialState;
    //   default:
    //     return currentState;
    // }

    // switch (action.type) {
    //   case "increment":
    //     return { firstCounter: currentState.firstCounter + 1 };
    //   case "decrement":
    //     return { firstCounter: currentState.firstCounter - 1 };
    //   case "reset":
    //     return initialState;
    //   default:
    //     return currentState;
    // }
  };
  let [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h4>First Counter - {count.firstCounter}</h4>
      <h4>Second Counter - {count.secondCounter}</h4>

      <button onClick={() => dispatch({ type: "reset" })}>Re-set</button>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement By 5
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement Counter 2
      </button>
      <br />
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment Counter 2 By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement Counter 2 By 5
      </button>
    </div>
  );

  //   return (
  //     <div>
  //       <h4>Count - {count.firstCounter}</h4>
  //       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
  //       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
  //       <button onClick={() => dispatch({ type: "reset" })}>Re-set</button>
  //     </div>
  //   );
}

export default CompleActionCounterReduicer;
