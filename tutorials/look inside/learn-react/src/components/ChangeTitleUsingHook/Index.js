import React, { useState, useEffect } from "react";

function Index() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} many times`;
  });

  return (
    <div>
      <hr />
      <h6>Count : {count}</h6>
      <hr />
      <button onClick={increment}>Increment</button>
      <hr />
    </div>
  );
}

export default Index;
