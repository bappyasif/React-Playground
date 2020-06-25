import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyIceCream } from "../../reduxComps/IceCream/IceCreamAction";

function Index() {
  let iceCreamsQuantity = useSelector((state) => state.iceCream.numOfIceCreams);
  let dispatch = useDispatch();

  return (
    <div>
      <h4>IceCreams Inventory :: {iceCreamsQuantity}</h4>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default Index;
