import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering Button : ", children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

// export default Button;

// To limiting Rerendering of components Using memo
export default React.memo(Button);
