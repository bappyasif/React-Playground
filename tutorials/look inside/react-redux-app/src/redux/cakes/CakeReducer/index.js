import { BUY_CAKE } from "../CakeTypes";

let initialState = {
  numOfCakes: 11,
};

export let cakeReducer = (state = initialState, action) => {
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

// export default index;
// export default cakeReducer;
