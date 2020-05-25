import React, { useState } from "react";
import useDocumentTitleHook from "../customHooks/useDocumentTitleHook";

function DocTitle2() {
  let [count, setCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `Count : ${count}`;
  //   }, [count]);

  useDocumentTitleHook(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}

export default DocTitle2;
