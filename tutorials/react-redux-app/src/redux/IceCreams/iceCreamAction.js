import { BUY_ICCREAM } from "./iceCreamsType";
import { BUY_ICECREAM } from "../iceCream/iceCreamTypes";

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
