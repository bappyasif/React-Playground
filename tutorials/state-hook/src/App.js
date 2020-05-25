import React, { useReducer } from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import ClassCounter1 from "./components/ClassCounter1";
import HookCounter1 from "./components/HookCounter1";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import FetchSinglePostItem from "./components/FetchSinglePostItem";
import ComponentC from "./components/ComponentC";
import CounterReducer from "./components/CounterReducer";
import CompleActionCounterReduicer from "./components/CompleActionCounterReduicer";
import MultipleUseReducersCounter from "./components/MultipleUseReducersCounter";
import ContextReducerComponentA from "./components/ContextReducerComponentA";
import ContextReducerComponentB from "./components/ContextReducerComponentB";
import ContextReducerComponentC from "./components/ContextReducerComponentC";
import DataFetchingWithoutReduceer from "./components/DataFetchingWithouitReduceer";
import CallbackHookParentComponent from "./components/CallbackHookParentComponent";
import UseMemoHookCounter from "./components/UseMemoHookCounter";
import FocusInputRefHook from "./components/FocusInputRefHook";
import ClassTimer from "./components/ClassTimer";
import HookTimerUsingRef from "./components/HookTimerUsingRef";
import DocTitle1 from "./components/DocTitle1";
import DocTitle2 from "./components/DocTitle2";
import CounterForCustomHook from "./components/CounterForCustomHook";
import CustomHookCounterTwo from "./components/CustomHookCounterTwo";
import UserFormCustomHook from "./components/UserFormCustomHook";
import AlertCount from "./components/AlertCount";

export let UserContext = React.createContext();
export let channelContext = React.createContext();

let initialState = 0;
let reducerFunction = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

export let CountContext = React.createContext();

function App() {
  let [count, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <div className="App">
      <AlertCount />

      <UserFormCustomHook />

      <CustomHookCounterTwo />
      <CounterForCustomHook />

      <DocTitle2 />
      <DocTitle1 />

      <HookTimerUsingRef />
      <ClassTimer />
      <FocusInputRefHook />

      <UseMemoHookCounter />
      <CallbackHookParentComponent />

      <DataFetchingWithoutReduceer />
      <DataFetchingWithoutReduceer />

      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h4>Count - {count}</h4>
        <ContextReducerComponentA />
        <ContextReducerComponentB />
        <ContextReducerComponentC />
      </CountContext.Provider>

      <MultipleUseReducersCounter />
      <CompleActionCounterReduicer />
      <CounterReducer />

      <UserContext.Provider value="aBappy">
        <channelContext.Provider value="Life's Lane">
          <ComponentC />
        </channelContext.Provider>
      </UserContext.Provider>

      {/* <UserContext.Provider value="aBappy">
        <ComponentC />
      </UserContext.Provider> */}

      <FetchSinglePostItem />
      <DataFetching />
      <IntervalHookCounter />
      <IntervalClassCounter />
      <MouseContainer />
      <HookMouse />
      <ClassMouse />
      <HookCounter1 />
      <ClassCounter1 />
      <HookCounter4 />
      <HookCounter3 />
      <HookCounter2 />
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
