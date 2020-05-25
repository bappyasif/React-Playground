import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer02(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>Number of available cakes :: {props.numOfCakes}</h4>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>
        Buy {number} Of {props.numOfCakes} Cake's
      </button>
      {/* <button onClick={props.buyCake}>Buy Cake</button> */}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes, // selectors type
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    // buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer02);
