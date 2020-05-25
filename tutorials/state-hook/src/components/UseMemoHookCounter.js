import React, { useState, useMemo } from "react";

function UseMemoHookCounter() {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  let increment1 = () => {
    setCounter1(counter1 + 1);
  };

  let increment2 = () => {
    setCounter2(counter2 + 1);
  };

  // useMemo Caches Function Result
  let isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++; // Inducing Slowness
    return counter1 % 2 === 0;
  }, [counter1]);

  //   let isEven = () => {
  //     let i = 0;
  //     while (i < 2000000000) i++; // Inducing Slowness
  //     return counter1 % 2 === 0;
  //   };

  return (
    <div>
      <div>
        <button onClick={increment1}>Counter 1 - {counter1}</button>
        {/* <span>{isEven() ? "Even" : "Odd"}</span> */}
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={increment2}>Counter 2 - {counter2}</button>
      </div>
    </div>

    // <div>
    //   <button onClick={increment1}>Counter 1 - {counter1}</button>
    //   <button onClick={increment2}>Counter 2 - {counter2}</button>
    // </div>
  );
}

export default UseMemoHookCounter;

// export default React.memo(UseMemoHookCounter);

/**
 const CountButton = React.memo(function CountButton({onClick, count}) {
  return <button onClick={onClick}>{count}</button>
})
function DualCounter() {
  const [count1, setCount1] = React.useState(0)
  const increment1 = React.useCallback(() => setCount1(c => c + 1), [])
  const [count2, setCount2] = React.useState(0)
  const increment2 = React.useCallback(() => setCount2(c => c + 1), [])
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  )
}
 */
