import React from "react";
import { buyIceCream } from "../redux/index02";
import { connect } from "react-redux";

function IceCreamContainer02(props) {
  return (
    <div>
      <h4>Number Of IceCreams Available : {props.numOfIceCreams}</h4>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer02);
