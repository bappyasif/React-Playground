import React, { useState } from "react";
import { connect } from "react-redux";

import { buyIceCream } from "../../redux/iceCreams/IcCreamAction";

function Index(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>IceCream Container : {props.numOfIceCreams}</h4>
      <input
        type="text"
        value={number}
        onChange={(ev) => setNumber(ev.target.value)}
      />
      <button onClick={() => props.buyIceCream(number)}>
        Buy {number} {number > 1 ? "IceCreams" : "IceCream"}!!
      </button>
      {/* <button onClick={props.buyIceCream}>Buy IceCream</button> */}
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
    buyIceCream: (number) => dispatch(buyIceCream(number)),
    // buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Index);
