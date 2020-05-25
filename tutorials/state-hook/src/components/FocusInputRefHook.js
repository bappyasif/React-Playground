import React, { useEffect, useRef } from "react";

function FocusInputRefHook() {
  let inputRef = useRef(null);
  useEffect(() => {
    // Focus Element
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInputRefHook;
