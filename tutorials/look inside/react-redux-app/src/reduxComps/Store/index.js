import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "../RootReducer";
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

/**
 import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// import RootReducer from "../RootReducer";
import rootReducer from "../RootReducer";

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
import CakeReducer from "../Cake/CakeReducer";

let store = createStore(CakeReducer);
export default store;
 */
