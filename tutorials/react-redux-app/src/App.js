import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer02 from "./components/CakeContainer02";
// import { Provider02 } from "react-redux";
import store02 from "./redux/store02";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksCakeContainer02 from "./components/HooksCakeContainer02";
import IceCreamContainer from "./components/iceCreamContainer";
import IceCreamContainer02 from "./components/IceCreamContainer02";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HookIceCreamContainer02 from "./components/HookIceCreamContainer02";
import NewCakeContainer from "./components/NewCakeContainer";
import NewCakeContainer02 from "./components/NewCakeContainer02";
import NewIceCreamContainer from "./components/NewIceCreamContainer";
import NewIceCreamContainer02 from "./components/NewIceCreamContainer02";
import NewIceCreamHook from "./components/NewIceCreamHook";
import ItemContainer from "./components/ItemContainer";
import ItemContainer02 from "./components/ItemContainer02";
import UserContainerAsyncRequest from "./components/UserContainerAsyncRequest";
import UserContainerAsyncRequest02 from "./components/UserContainerAsyncRequest02";

function App() {
  return (
    <div className="App">
      <Provider store={store02}>
        <UserContainerAsyncRequest02 />

        <ItemContainer02 cake />
        <ItemContainer02 />

        <HooksCakeContainer02 cake />
        <HookIceCreamContainer02 />
        {/* <NewIceCreamHook /> */}
        <IceCreamContainer02 />
        <NewIceCreamContainer02 />
        <CakeContainer02 />
        <NewCakeContainer02 />
      </Provider>

      {/* <Provider store={store02}>
        <CakeContainer02 />
      </Provider> */}

      <Provider store={store}>
        <UserContainerAsyncRequest />

        <ItemContainer cake />
        <ItemContainer />

        <CakeContainer />
        <IceCreamContainer />
        <NewIceCreamContainer />
        <HooksIceCreamContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
      </Provider>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Provider>
//         <CakeContainer02 />
//       </Provider>

//       <Provider store={store}>
//         <CakeContainer />
//       </Provider>

//       {/* <div className="App">
//       <Provider>
//         <CakeContainer02 />
//       </Provider>
//     </div> */}
//     </div>

//     // <Provider store={store}>
//     //   <div className="App">
//     //     <CakeContainer />
//     //   </div>
//     // </Provider>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <CakeContainer />
//     </div>
//   );
// }

export default App;
