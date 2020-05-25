import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeRedeucer";
import iceCreamReducer from "./iceCream/iceCreamReducers";
import userReducer from "./user/userReducer";

let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

// let rootReducer = combineReducers({
//   cake: cakeReducer,
//   iceCream: iceCreamReducer,
// });

export default rootReducer;
