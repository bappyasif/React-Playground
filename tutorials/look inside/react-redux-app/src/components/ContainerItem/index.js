import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../../redux/cakes/BuyCake";
import { buyIceCream } from "../../redux/iceCreams/IcCreamAction";

function index(props) {
  return (
    <div>
      <h4>Store Containing : {props.item}</h4>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

let mapStateToProps = (state, ownProps) => {
  let itemState = ownProps.cake
    ? state.cake.numOfCakes + " Cake's"
    : state.iceCream.numOfIceCreams + " IceCream's";

  return {
    item: itemState,
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchMethod = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchMethod,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
