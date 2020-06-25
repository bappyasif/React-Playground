import React, { useState, useEffect } from "react";

function Index() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = ` Counter Incremented ${count} times`;
  });

  return (
    <div>
      <h4>Counter Implementation With Hook </h4>
      <button onClick={increment}>
        To Increment <span>Clicked {count} times</span>
      </button>
    </div>
  );
}

export default Index;
