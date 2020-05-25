import React, { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function CallbackHookParentComponent() {
  let [age, setAge] = useState(26);
  let [salary, setSalary] = useState(50000);

  // useCallbacks Does Cached Function
  let incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  let incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  //   let incrementAge = () => {
  //     setAge(age + 1);
  //   };
  //   let incrementSalary = () => {
  //     setSalary(salary + 1000);
  //   };
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default CallbackHookParentComponent;
