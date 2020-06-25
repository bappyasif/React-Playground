import { BUY_CAKE } from "../CakeType";

let initialState = {
  numOfCakes: 20,
  info: "cake shop",
};

let cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
        // numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
