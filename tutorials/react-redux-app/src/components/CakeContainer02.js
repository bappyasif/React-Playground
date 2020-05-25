import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer02(props) {
  return (
    <div>
      <h4>Number of available cakes :: {props.numOfCakes}</h4>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// function CakeContainer02() {
//   return (
//     <div>
//       <h4>Number of available cakes</h4>
//       <button>Buy Cake</button>
//     </div>
//   );
// }

let mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes, // selectors type
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer02);

// export default CakeContainer02;
