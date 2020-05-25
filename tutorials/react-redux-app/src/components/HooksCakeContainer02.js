import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/index02";

function HooksCakeContainer02() {
  let [number, setNumber] = useState(1);
  let stateSelector = useSelector((state) => state.cake.numOfCakes);
  // let stateSelector = useSelector((state) => state.numOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h6>FROM HOOKS :: NUMBER OF CAKES AVAILABLE :: {stateSelector}</h6>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>BUY CAKE</button>
      {/* <button onClick={() => dispatch(buyCake())}>BUY CAKE</button> */}
    </div>
  );
}

export default HooksCakeContainer02;
