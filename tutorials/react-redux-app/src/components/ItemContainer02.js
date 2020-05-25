import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux/index02";

function ItemContainer02(props) {
  return (
    <div>
      <h4>Items :: {props.item}</h4>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

let mapStateToProps = (state, ownProps) => {
  let itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

let mapDispatchToProps = (dispatch, ownProps) => {
  let dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer02);
