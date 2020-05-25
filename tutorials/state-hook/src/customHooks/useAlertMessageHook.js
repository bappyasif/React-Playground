import { useState, useEffect } from "react";

function useMouseCustomHook(count) {
  useEffect(() => {
    alert(`Count : ${count}`);
  }, [count]);
}

export default useMouseCustomHook;
