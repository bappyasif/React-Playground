import { combineReducers } from "redux";
import cakeReducer from "../Cake/CakeReducer";
import iceCreamReducer from "../IceCream/IceCreamReducer";
import usersReducer from "../Users/UsersReducer";

let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: usersReducer,
});

/**
 let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
 */

export default rootReducer;
