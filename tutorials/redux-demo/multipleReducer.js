let redux = require("redux");
let createStore = redux.createStore; // Singled Reducer
let combinedReducers = redux.combineReducers; // Multipled Reducer
let BUY_CAKE = "BUY_CAKE";
let BUY_ICECREAM = "BUY_ICECREAM";
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
// Combining Reducers
let rootReducer = combinedReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

let store = createStore(rootReducer);
// let store = createStore(reducer);
console.log("Initial State : ", store.getState());
// store.subscribe(() => console.lo0g("Updated State  ", store.getState()));
let unsubscribe = store.subscribe(() =>
  console.log("Updated State : ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
