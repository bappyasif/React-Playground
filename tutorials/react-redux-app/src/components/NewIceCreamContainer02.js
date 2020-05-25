import React, { useState } from "react";
import { buyIceCream } from "../redux/index02";
import { connect } from "react-redux";

function NewIceCreamContainer02(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>Number Of IceCreams Available : {props.numOfIceCreams}</h4>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => props.buyIceCream(number)}>
        Buy {number} Of {props.numOfIceCreams} IceCream's
      </button>
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
    buyIceCream: (number) => dispatch(buyIceCream(number)),
    // buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIceCreamContainer02);
// export default NewIceCreamContainer02
