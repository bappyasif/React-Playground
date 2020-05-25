import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);

  return (
    <div>
      {text} -- {count}
    </div>
  );
}

// export default Count;

// To limiting Rerendering of components Using memo
export default React.memo(Count);
