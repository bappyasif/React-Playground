import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  let [disdplay, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!disdplay)}>Troggle Display</button>
      {disdplay && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
