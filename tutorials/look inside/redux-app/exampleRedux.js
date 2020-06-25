// with middleware
// store actions
let BUY_CAKE = "BUY_CAKE";
let BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "cake store",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "icecream store",
  };
}

// action reducers

let initialCakeState = {
  numOfCakes: 11,
};

let initialIcecreamState = {
  numOfIcereams: 56,
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

let icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        numOfIcereams: state.numOfIcereams - 1,
      };

    default:
      return state;
  }
};

// redux store
let redux = require("redux");
let createStore = redux.createStore;
let combineReducer = redux.combineReducers;

// action dispatch
let rootReducer = combineReducer({
  cake: cakesReducer,
  icecream: icecreamReducer,
});

// using middleware
let reduxLogger = require("redux-logger");
let applyingMiddleware = redux.applyMiddleware;

let logger = reduxLogger.createLogger();

let store = createStore(rootReducer, applyingMiddleware(logger));
console.log("initial state : ", store.getState());
let unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();

// // Single Store, Multuiple Actions And Reducers
// // store actions
// let BUY_CAKE = "BUY_CAKE";
// let BUY_ICECREAM = "BUY_ICECREAM";

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "cake store",
//   };
// }

// function buyIceCream() {
//   return {
//     type: BUY_ICECREAM,
//     info: "icecream store",
//   };
// }

// // action reducers

// let initialCakeState = {
//   numOfCakes: 11,
// };

// let initialIcecreamState = {
//   numOfIcereams: 56,
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

// let icecreamReducer = (state = initialIcecreamState, action) => {
//   switch (action.type) {
//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         numOfIcereams: state.numOfIcereams - 1,
//       };

//     default:
//       return state;
//   }
// };

// // redux store
// let redux = require("redux");
// let createStore = redux.createStore;
// let combineReducer = redux.combineReducers;

// // action dispatch
// let rootReducer = combineReducer({
//   cake: cakesReducer,
//   icecream: icecreamReducer,
// });

// let store = createStore(rootReducer);
// console.log("initial state : ", store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log("updated state : ", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// unsubscribe();

// Single Store, Multiple Actions With Single Reducer

// // store actions
// let BUY_CAKE = "BUY_CAKE";
// let BUY_ICECREAM = "BUY_ICECREAM";

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "cake store",
//   };
// }

// function buyIceCream() {
//   return {
//     type: BUY_ICECREAM,
//     info: "icecream store",
//   };
// }

// // action reducer
// let initialState = {
//   numOfCakes: 11,
//   numOfIcereams: 56,
// };

// let reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };

//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         numOfIcereams: state.numOfIcereams - 1,
//       };

//     default:
//       return state;
//   }
// };

// // redux store
// let redux = require("redux");
// let createStore = redux.createStore;

// // action dispatch
// let store = createStore(reducer);
// console.log("initial state : ", store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log("updated state : ", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// unsubscribe();

// Single Store, Single Action With Single Reducer

// // store actions
// let BUY_CAKE = "BUY_CAKE";

// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "cake store",
//   };
// }

// // action reducer
// let initialState = {
//   numOfCakes: 11,
// };

// let reducer = (state = initialState, action) => {
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

// // redux store
// let redux = require("redux");
// let createStore = redux.createStore;

// // action dispatch
// let store = createStore(reducer);
// console.log("initial state : ", store.getState());
// let unsubscribe = store.subscribe(() =>
//   console.log("updated state : ", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// unsubscribe();

/**
 
// Actions
let BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Buying Cake",
  };
}

d// Reducers
let initialState = {
  numOfCakes: 11,
};

let reducer = (state = initialState, action) => {
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

// Stores
let redux = require("redux");
let createStore = redux.createStore;

let store = createStore(reducer);
console.log("initial state : ", store.getState());

// subscribe, dispatch and then unsubscribe stores.
store.subscribe(() => console.log("updated state : ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
let unsubscribe = store.subscribe(() => console.log("...."));
unsubscribe();

*/
