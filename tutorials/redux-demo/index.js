let redux = require("redux");
let reduxLogger = require("redux-logger");
let createStore = redux.createStore; // Singled Reducer
let combinedReducers = redux.combineReducers; // Multipled Reducer
let applyMiddleware = redux.applyMiddleware; // Applying Middleware
let logger = reduxLogger.createLogger(); // Including MiddlewareLogger

console.log("From Index.js");
let BUY_CAKE = "BUY_CAKE";
let BUY_ICECREAM = "BUY_ICECREAM";

// {
//   type: BUY_CAKE,
//   info: "First Redux In Action"
// }

// action creator returns an action
function buyCake() {
  return {
    type: BUY_CAKE, // action With "type" property
    info: "First Redux In Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// App Object

// Individual InitialState
let initialCakeState = {
  numOfCakes: 11,
};

let initialIceCreamState = {
  numOfIceCreams: 29,
};

// Reducer Functionality With Individual Functionality
let cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

let iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Redux Store Responsibles For :
// application state, access state, update state, register or unregister listeners

// Combining Reducers
let rootReducer = combinedReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

let store = createStore(rootReducer, applyMiddleware(logger)); // Using Middleware
// let store = createStore(rootReducer); // Without Middleware
// let store = createStore(reducer);
console.log("Initial State : ", store.getState());
// Using Middleware
let unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
