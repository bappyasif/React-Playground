import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../RootReducer";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

/**
 let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
// let store = createStore(rootReducer, applyMiddleware(logger));
// let store = createStore(rootReducer);
export default store;
 */

/**
 import { createStore } from "redux";
import { cakeReducer } from "../cakes/CakeReducer";

let store = createStore(cakeReducer);
export default store;

 */
