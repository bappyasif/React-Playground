import { BUY_ICE_CREAM } from "../IceCreamTypes";

let initialState = {
  numOfIceCreams: 29,
  info: "Icecream Corner",
};

let iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
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
