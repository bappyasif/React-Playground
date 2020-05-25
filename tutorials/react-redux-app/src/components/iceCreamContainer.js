import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function iceCreamContainer(props) {
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

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
