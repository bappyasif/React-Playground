// import React, { useState } from "react";
import React from "react";
import useControlledInputHook from "../customHooks/useControlledInputHook";

function UserFormCustomHook() {
  //   let [firstName, setFirstName] = useState("");
  //   let [lastName, setLastName] = useState("");

  let [firstName, bindFirstName, resetFirstName] = useControlledInputHook("");
  let [lastName, bindLastName, resetLastName] = useControlledInputHook("");

  let submitHandler = (event) => {
    event.preventDefault();
    alert(`Greetings ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
    // event.preventDefault();
    // alert(`Greetings ${firstName} ${lastName}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...bindFirstName}
            // value={firstName}
            // onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...bindLastName}
            // value={lastName}
            // onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserFormCustomHook;
