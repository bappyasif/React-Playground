import React from "react";

function index({ message }) {
  return (
    <div>
      <h6>{message}</h6>
      <h6>Loading....</h6>
    </div>
  );
}

// function index(props) {
//   return (
//     <div>
//       <h6>{props.message}</h6>
//       <h6>Loading....</h6>
//     </div>
//   );
// }

// export let DisplayLoading = (props) => {
//   return (
//     <div>
//       {" "}
//       <h6>{props.message}</h6>
//       <h6>LOADING....</h6>
//     </div>
//   );
// };

// export let DisplayLoading = () => {
//   return <h6>LOADING....</h6>;
// };

export default index;
