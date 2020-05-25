import React, { useState } from "react";
import useAlertMessageHook from "../customHooks/useAlertMessageHook";

function AlertCount() {
  let [count, setCount] = useState(0);

  useAlertMessageHook(count);

  return (
    <div>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={count}>Alert Count</button> */}
    </div>
  );
}

export default AlertCount;
