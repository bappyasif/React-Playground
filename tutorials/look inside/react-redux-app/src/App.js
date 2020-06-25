import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import CakeContainer from "./components/CakeContainer";
import Store from "./redux/Store";
import CakeHook from "./components/CakeHooks";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/CakeContainerNew";
import NewIceCreamContainer from "./components/IceCreamContainerNew";
import ItemContainer from "./components/ContainerItem";
import UserContainer from "./components/ContainerUser";
import IceCreamHook from "./components/ContainerIceCreamHook";

import CakeShop from "./components/CakeShop";
import CakeStore from "./reduxComps/Store";
import CakesHook from "./components/HookCakes";
import IceCreamCorner from "./components/IceCreamCorner";
import NewCakeShop from "./components/CakeShopNew";
import NewIceCreamCorner from "./components/IceCreamCornerNew";
import ItemCorner from "./components/ItemCorner";
import UserCorner from "./components/UserCorner";
import HookIceCreamCorner from "./components/IceCreamHookCorner";

function App() {
  return (
    <div>
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <IceCreamHook />
            <UserContainer />
          </header>
          <ItemContainer />
          <ItemContainer cake />
          <NewIceCreamContainer />
          <NewCakeContainer />
          <IceCreamContainer />
          <CakeHook />
          <CakeContainer />
        </div>
      </Provider>
      <Provider store={CakeStore}>
        <div className="App">
          <header className="App-header">
            <HookIceCreamCorner />
            <UserCorner />
          </header>
          <ItemCorner />
          <ItemCorner cake />
          <NewIceCreamCorner />
          <NewCakeShop />
          <IceCreamCorner />
          <CakesHook />
          <CakeShop />
        </div>
      </Provider>
    </div>
  );
}

export default App;

/**
 function App() {
  return (
      <Provider store={Store}>
        <div className="App">
          <header className="App-header">
            <CakeContainer />
          </header>
        </div>
      </Provider>
  );
}
 */
