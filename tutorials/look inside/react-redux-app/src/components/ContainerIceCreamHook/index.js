import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../../redux/iceCreams/IcCreamAction";

function Index() {
  let iceCreamsQuantities = useSelector(
    (state) => state.iceCream.numOfIceCreams
  );

  let dispatch = useDispatch();

  return (
    <div>
      <h4>Available IceCreams :: {iceCreamsQuantities}</h4>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default Index;
