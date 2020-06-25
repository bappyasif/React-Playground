import React, { useState } from "react";
import { connect } from "react-redux";

import { buyCake } from "../../reduxComps/Cake/CakeAction";

function Index(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>Cakes Available : {props.numOfCakes}</h4>
      <input
        type="text"
        value={number}
        onChange={(ev) => setNumber(ev.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} {number > 1 ? "Cakes" : "Cake"} !!
      </button>
      {/* <button onClick={props.buyCake}>Buy Cake !!</button> */}
      {/* <buyCake /> */}
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
    // buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Index);
