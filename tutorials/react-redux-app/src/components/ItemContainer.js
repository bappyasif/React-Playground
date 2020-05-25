import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h4>Item :: {props.item}</h4>
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
  let dispatchFucntion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFucntion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// when only dispatch functionality is required.
// export default connect(null, mapDispatchToProps)(ItemContainer);
