import { BUY_ICECREAM } from "./iceCreamTypes";

export let buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};

// export let buyIceCream = () => {
//   return {
//     type: BUY_ICECREAM,
//   };
// };
