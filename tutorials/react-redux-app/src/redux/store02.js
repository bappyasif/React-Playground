import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

// import { createStore } from "redux";

import logger from "redux-logger";

import rootReducer from "./RootReducer";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

// let store = createStore(rootReducer, applyMiddleware(logger));

// let store = createStore(rootReducer);

// import cakeReducer from "./cakes/cakeReducer";

// let store = createStore(cakeReducer);

export default store;
