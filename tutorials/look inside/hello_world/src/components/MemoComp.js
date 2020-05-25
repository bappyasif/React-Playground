import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return (
    <div>
      <h4>
        Memo Rendering : <span>{name}</span>
      </h4>
    </div>
  );
}

export default React.memo(MemoComp); // Avoids Rerender
// export default MemoComp; // Does Not Avoid Rerender
