import React, { useState } from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function NewIceCreamContainer(props) {
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
      {/* <button onClick={props.buyIceCream}>Buy IceCream</button> */}
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
    //   buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewIceCreamContainer);

// export default NewIceCreamContainer;
