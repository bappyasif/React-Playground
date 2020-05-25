import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  let [count, setCount] = useState(0);

  let tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //   useEffect(() => {
  //     let interval = setInterval(tick, 1100);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     let interval = setInterval(tick, 1100);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  useEffect(() => {
    let interval = setInterval(tick, 1100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  //   useEffect(() => {
  //       function  doSomething() {
  //           console.log(someProp);
  //       }
  //       doSomething();
  //     let interval = setInterval(tick, 1100);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [someProp]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
