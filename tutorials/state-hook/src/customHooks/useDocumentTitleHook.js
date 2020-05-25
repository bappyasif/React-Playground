import { useEffect } from "react";

function useDocumentTitleHook(count) {
  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);
}

export default useDocumentTitleHook;
