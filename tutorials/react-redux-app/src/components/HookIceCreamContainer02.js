import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/index02";

function HookIceCreamContainer02() {
  let [number, setNumber] = useState(1);
  let numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  let dispatch = useDispatch();
  return (
    <div>
      <h6>FROM HOOK :: NUMBER OF ICECREAMS AVAILABLE :: {numOfIceCreams}</h6>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy IceCream
      </button>
      {/* <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button> */}
    </div>
  );
}

export default HookIceCreamContainer02;
