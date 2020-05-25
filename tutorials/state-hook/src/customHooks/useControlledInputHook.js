import { useState } from "react";

function useControlledInputHook(initialValue) {
  let [value, setValue] = useState(initialValue);

  let reset = () => {
    setValue(initialValue);
  };

  let bind = {
    value: value,
    onChange: (event) => {
      setValue(event.target.value);
    },
  };

  return [value, bind, reset];
}

export default useControlledInputHook;
