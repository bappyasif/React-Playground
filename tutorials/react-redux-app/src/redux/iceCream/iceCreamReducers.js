import { BUY_ICECREAM } from "./iceCreamTypes";

let initialState = {
  numOfIceCreams: 29,
};

let iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
        // numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
