import React, { useState } from "react";
// import { buyCake } from "../redux/cake/cakeAction";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
  let [number, setNumber] = useState(1);
  return (
    <div>
      <h4>Number Of Cakes Available : {props.numOfCakes}</h4>
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
    numOfCakes: state.cake.numOfCakes,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
