import React, { useState, useEffect, useRef } from "react";

function HookTimerUsingRef() {
  let [timer, setTimer] = useState(0);

  let intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1100);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       setTimer((prevTimer) => prevTimer + 1);
  //     }, 1100);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <div>
      Hook Timer : {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );

  //   return (
  //     <div>
  //       Hook Timer : {timer}
  //       {/* <button onClick={() => clearInterval(interval)}>Stop Timer</button> */}
  //     </div>
  //   );
}

export default HookTimerUsingRef;
