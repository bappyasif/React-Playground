import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../../redux/cakes/CakeActions";

function Index() {
  let cakesAvailable = useSelector((state) => state.cake.numOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h4>Number Of Cakes Available : {cakesAvailable}</h4>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default Index;
