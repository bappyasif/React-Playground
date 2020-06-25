import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../../redux/cakes/BuyCake";

function index(props) {
  return (
    <div>
      <h4>Cake Container : {props.numOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(index);

/**
 function index() {
  return (
    <div>
      <h4>Cake Container</h4>
      <button>Buy Cake</button>
    </div>
  );
}
 */
