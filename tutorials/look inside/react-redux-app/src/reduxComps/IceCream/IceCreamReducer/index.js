// import buyIceCream from "../IceCreamAction";
import { BUY_ICECREAM } from "../IceCreamType";

let initialState = {
  numOfIceCreams: 38,
  info: "Icecream Corner",
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
