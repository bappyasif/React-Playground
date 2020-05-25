import React from "react";

// let UserContext = React.createContext(); // Without Default Value
let UserContext = React.createContext("Life's Lane"); // With Default Value

let ContextProvider = UserContext.Provider;

let ContextConsumer = UserContext.Consumer;

export { ContextProvider, ContextConsumer };

export default UserContext;
