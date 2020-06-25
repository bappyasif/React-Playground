import React, { useState } from "react";
import { connect } from "react-redux";

import { buyCake } from "../../redux/cakes/BuyCake";

function Index(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>Cake Container : {props.numOfCakes}</h4>
      <input
        type="text"
        value={number}
        onChange={(event) => setNumber(event.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} {number > 1 ? "Cakes" : "Cake"} !!
      </button>
      {/* <button onClick={props.buyCake}>Buy Cake</button> */}
    </div>
  );
}

let mapStatesToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    // numOfCakes: state.numOfCakes,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Index);
