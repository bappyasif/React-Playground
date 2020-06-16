import React from "react";
import loaderSrc from "../../assets/loader.gif";

function index(props) {
  return (
    <div>
      <h4>LOADINIG....</h4>
      <img alt="Loader Gif" src={loaderSrc} style={{ width: 110 }} />
    </div>
  );
}

export default index;
