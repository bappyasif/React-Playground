import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../../reduxComps/Cake/CakeAction";

function index(props) {
  return (
    <div>
      <h4>Cakes Available : {props.numOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(index);

/**
 function index() {
  return (
    <div>
      <h4>Cakes Available : </h4>
      <button>Buy Cake !!</button>
    </div>
  );
}

export default index;
 */
