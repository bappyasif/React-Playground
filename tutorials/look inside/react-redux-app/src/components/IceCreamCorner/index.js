import React from "react";
import { connect } from "react-redux";

import buyIceCream from "../../reduxComps/IceCream/IceCreamAction";

function index(props) {
  return (
    <div>
      <h4>IceCream Available : {props.numOfIceCreams}</h4>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
      {/* <buyCake /> */}
    </div>
  );
}

let mapStatesToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
    // numOfIceCreams: state.numOfIceCreams,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(index);
