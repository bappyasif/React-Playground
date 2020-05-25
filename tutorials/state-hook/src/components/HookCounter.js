import React, { useState } from "react";

// Call Hooks Only At Top Level,
// Call Hooks Only From React Function,
function HookCounter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      {/* <button onClick={}>Counts Clicks {}</button> */}
      <button onClick={() => setCount(count + 1)}>
        Counts Clicks {count > 0 ? count : " {ZeRo} "}
      </button>
    </div>
  );
}

export default HookCounter;
