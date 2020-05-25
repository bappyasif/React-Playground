import React from "react";

let Intro = (props) => {
  return (
    <p className="App-intro">
      Our First Functional Component : <br />
      {props.message}
    </p>
  );
};

export default Intro;
