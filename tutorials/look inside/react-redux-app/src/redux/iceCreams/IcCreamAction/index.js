import { BUY_ICE_CREAM } from "../IceCreamTypes";

export let buyIceCream = (number = 1) => {
  return {
    type: BUY_ICE_CREAM,
    payload: number,
  };
};

/**
 export let buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};
 */
