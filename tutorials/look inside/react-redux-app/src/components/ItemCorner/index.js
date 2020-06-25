import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../../reduxComps/Cake/CakeAction";
import { buyIceCream } from "../../reduxComps/IceCream/IceCreamAction";

function index(props) {
  return (
    <div>
      <h4>Shop Containing : {props.item}</h4>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

let mapStateToProps = (state, ownProps) => {
  let itemContains = ownProps.cake
    ? state.cake.numOfCakes + " Cake's"
    : state.iceCream.numOfIceCreams + " IceCream's";

  return {
    item: itemContains,
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchProtocol = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchProtocol,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
