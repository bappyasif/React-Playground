import { BUY_CAKE } from "../CakeTypes";

export let buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

/**
 export let buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
 */
