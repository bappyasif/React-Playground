import React from "react";

function Title() {
  console.log("Rendering Title");
  return (
    <div>
      <h4>useCallback Hook</h4>
    </div>
  );
}

// export default Title;

// To limiting Rerendering of components Using memo
export default React.memo(Title);
