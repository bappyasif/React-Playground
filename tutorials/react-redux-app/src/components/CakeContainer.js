import React from "react";
// import { buyCake } from "../redux/cake/cakeAction";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <div>
      <h4>Number Of Cakes Available : {props.numOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// let mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
// export default CakeContainer;
