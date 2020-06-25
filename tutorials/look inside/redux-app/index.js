let BUY_CAKE = "BUY_CAKE";
let BUY_ICECREAM = "BUY_ICECREAM";

// action creators returns actions
function buyuCake() {
  return {
    type: BUY_CAKE,
    info: "Buy Cake",
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "Buy Icecream",
  };
}

// reducer function which takes previous state and action as arguments and
// returns a new state.
let initialCakeState = {
  numOfCakes: 11,
};

let initialIcecreamState = {
  numOfIcecreams: 20,
};

let cakesReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

let icecreamsReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// redux store holds app state, allow acces via getState, updates via dispatch(action)
// registers listeners via subscribe(listener) and unregister via returned subscribe(listener)
let redux = require("redux");
let createStore = redux.createStore;
let combineReducer = redux.combineReducers;

// applying middleware
let reduxLogger = require("redux-logger");
let applyMiddleware = redux.applyMiddleware;

let logger = reduxLogger.createLogger();

// store function takes reducer as an argument
let rootReducer = combineReducer({
  cake: cakesReducer,
  iceCream: icecreamsReducer,
});
let store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state ", store.getState());

store.subscribe(() => {});
// let unsubscribe = store.subscribe(() =>
//   console.log("updated state ", store.getState())
// );

store.dispatch(buyuCake());
store.dispatch(buyuCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

let unsubscribe = store.subscribe(() => {});

unsubscribe();

// let BUY_CAKE = "BUY_CAKE";
// let BUY_ICECREAM = "BUY_ICECREAM";

// // action creators returns actions
// function buyuCake() {
//   return {
//     type: BUY_CAKE,
//     info: "Buy Cake",
//   };
// }

// function buyIcecream() {
//   return {
//     type: BUY_ICECREAM,
//     info: "Buy Icecream",
//   };
// }

// // reducer function which takes previous state and action as arguments and
// // returns a new state.
// let initialCakeState = {
//   numOfCakes: 11,
// };

// let initialIcecreamState = {
//   numOfIcecreams: 20,
// };

// let cakesReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     default:
//       return state;
//   }
// };

// let icecreamsReducer = (state = initialIcecreamState, action) => {
//   switch (action.type) {
//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

// // redux store holds app state, allow acces via getState, updates via dispatch(action)
// // registers listeners via subscribe(listener) and unregister via returned subscribe(listener)
// let redux = require("redux");
// let createStore = redux.createStore;
// let combineReducer = redux.combineReducers;

// // store function takes reducer as an argument
// let rootReducer = combineReducer({
//   cake: cakesReducer,
//   iceCream: icecreamsReducer,
// });
// let store = createStore(rootReducer);
// console.log("initial state ", store.getState());

// store.subscribe(() => console.log("updated state ", store.getState()));
// // let unsubscribe = store.subscribe(() =>
// //   console.log("updated state ", store.getState())
// // );

// store.dispatch(buyuCake());
// store.dispatch(buyuCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());

// let unsubscribe = store.subscribe(() =>
//   console.log("updated state ", store.getState())
// );

// unsubscribe();

// console.log("Action Object");

// let BUY_CAKE = "BUY_CAKE";

// // action creator returns action
// function buyuCake() {
//   return {
//     type: BUY_CAKE,
//     info: "Buy Cake",
//   };
// }

// // reducer function which takes previous state and action as arguments and
// // returns a new state.
// let initialState = {
//   numOfCakes: 10,
// };

// let reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     //   return {
//     //     numOfCakes: state.numOfCakes - 1,
//     //   };

//     default:
//       return state;
//   }
// };

// // redux store holds app state, allow acces via getState, updates via dispatch(action)
// // registers listeners via subscribe(listener) and unregister via returned subscribe(listener)
// let redux = require("redux");
// let createStore = redux.createStore;

// // store function takes reducer as an argument
// let store = createStore(reducer);
// console.log("initial state ", store.getState());

// store.subscribe(() => console.log("updated state ", store.getState()));
// // let unsubscribe = store.subscribe(() =>
// //   console.log("updated state ", store.getState())
// // );

// store.dispatch(buyuCake());
// store.dispatch(buyuCake());

// let unsubscribe = store.subscribe(() =>
//   console.log("updated state ", store.getState())
// );

// unsubscribe();
