import React, { useReducer } from "react";

function MultipleUseReducersCounter() {
  let initialState = { counter: 0 };

  let reducerFunction = (currentState, action) => {
    switch (action.type) {
      case "increment":
        return { counter: currentState.counter + action.value };
      case "decrement":
        return { counter: currentState.counter - action.value };
      case "reset":
        return initialState;
      default:
        return currentState;
    }
  };

  let [count, dispatch] = useReducer(reducerFunction, initialState);
  let [count2, dispatch2] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <div>
        <h4>Counter one - {count.counter}</h4>
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
      </div>
      <div>
        <h4>Counter Two - {count2.counter}</h4>
        <button onClick={() => dispatch2({ type: "reset" })}>Re-set</button>
        <br />
        <button onClick={() => dispatch2({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch2({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <br />
        <button onClick={() => dispatch2({ type: "increment", value: 5 })}>
          Increment By 5
        </button>
        <button onClick={() => dispatch2({ type: "decrement", value: 5 })}>
          Decrement By 5
        </button>
        <br />
      </div>
    </div>

    //   let initialState = 0;
    //   let initialState = { firstCounter: 0, secondCounter: 10 };
    //   let reducerFunction = (currentState, action) => {
    //     switch (action.type) {
    //       case "increment":
    //         return { firstCounter: currentState.firstCounter + action.value };
    //       case "decrement":
    //         return { firstCounter: currentState.firstCounter - action.value };
    //       case "increment2":
    //         return { secondCounter: currentState.secondCounter + action.value };
    //       case "decrement2":
    //         return { secondCounter: currentState.secondCounter - action.value };
    //       case "reset":
    //         return initialState;
    //       default:
    //         return currentState;
    //     }
    //   };

    //   let [count, dispatch] = useReducer(reducerFunction, initialState);
    //   let [count2, dispatch2] = useReducer(reducerFunction, initialState);

    //   return (
    //     <div>
    //       <div>
    //         <h4>Counter one - {count.firstCounter}</h4>
    //         <button onClick={() => dispatch({ type: "reset" })}>Re-set</button>
    //         <br />
    //         <button onClick={() => dispatch({ type: "increment", value: 1 })}>
    //           Increment
    //         </button>
    //         <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
    //           Decrement
    //         </button>
    //         <br />
    //         <button onClick={() => dispatch({ type: "increment", value: 5 })}>
    //           Increment By 5
    //         </button>
    //         <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
    //           Decrement By 5
    //         </button>
    //         <br />
    //       </div>
    //       <div>
    //         <h4>Counter Two - {count2.secondCounter}</h4>
    //         <button onClick={() => dispatch2({ type: "reset" })}>Re-set</button>
    //         <br />
    //         <button onClick={() => dispatch2({ type: "increment2", value: 1 })}>
    //           Increment
    //         </button>
    //         <button onClick={() => dispatch2({ type: "decrement2", value: 1 })}>
    //           Decrement
    //         </button>
    //         <br />
    //         <button onClick={() => dispatch2({ type: "increment2", value: 10 })}>
    //           Increment By 5
    //         </button>
    //         <button onClick={() => dispatch2({ type: "decrement2", value: 10 })}>
    //           Decrement By 5
    //         </button>
    //         <br />
    //       </div>
    //     </div>

    // <div>
    //   <div>
    //     <h4>Counter one - {count.firstCounter}</h4>
    //     <button onClick={() => dispatch("increment")}>Increment</button>
    //     <button onClick={() => dispatch("decrement")}>Decrement</button>
    //     <button onClick={() => dispatch("reset")}>Re-set</button>
    //   </div>
    //   <div>
    //     <h4>Counter Two - {count2.secondCounter}</h4>
    //     <button onClick={() => dispatch2("increment")}>Increment</button>
    //     <button onClick={() => dispatch2("decrement")}>Decrement</button>
    //     <button onClick={() => dispatch2("reset")}>Re-set</button>
    //   </div>
    // </div>
  );
}

export default MultipleUseReducersCounter;
