import React from "react";
import loaderSrc from "../../assets/loader.gif";

function index(props) {
  return (
    <div>
      <img alt="Loader Gif" src={loaderSrc} style={{ width: 110 }} />
    </div>
  );
}

export default index;
