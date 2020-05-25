import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  let [number, setNumber] = useState(1);
  let numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // let numOfCakes = useSelector((state) => state.numOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h6>FROM HOOKS :: NUMBER OF CAKES AVAILABLE :: {numOfCakes}</h6>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>BUY CAKE</button>
      {/* <button onClick={() => dispatch(buyCake())}>Buy Cake</button> */}
    </div>
  );
}

export default HooksCakeContainer;
