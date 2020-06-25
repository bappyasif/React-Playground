import { combineReducers } from "redux";
import { cakeReducer } from "../cakes/CakeReducer";
import iceCreamReducer from "../iceCreams/iceCreamReducer";
import userReducer from "../user/UserReducer";

let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

/**
 let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
 */

export default rootReducer;
