import { BUY_ICECREAM } from "../IceCreamType";

export let buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

export default buyIceCream;

/**
 let buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
 */
