import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { buyCake } from "../../reduxComps/Cake/CakeAction";

function Index(props) {
  let cakesAvailable = useSelector((state) => state.cake.numOfCakes);
  // let cakesAvailable = useSelector((state) => state.numOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h4>Cakes Available : {cakesAvailable}</h4>
      {/* <h4>Cakes Available : {props.numOfCakes}</h4> */}
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default Index;
