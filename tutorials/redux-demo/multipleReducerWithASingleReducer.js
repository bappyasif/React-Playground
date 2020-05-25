let redux = require("redux");
let createStore = redux.createStore; // Singled Reducer
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
// Single InitialState
let initialState = {
  numOfCakes: 11,
  numOfIceCreams: 29,
};
// Reducer Functionality With Multiple Functionality
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Copy initial Object States
        numOfCakes: state.numOfCakes - 1, // mutate changes
      };

    case BUY_ICECREAM:
      return {
        ...state, // Copy initial Object States
        numOfIceCreams: state.numOfIceCreams - 1, // mutate changes
      };

    default:
      return state;
  }
};
// Using Single Reducer Function
let store = createStore(reducer);
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
