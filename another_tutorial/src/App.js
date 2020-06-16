import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import PropsExample01 from "./components/Examples/Props/propsFunction";
import PropsExample02 from "./components/Examples/Props/propsClass";
import StatesExample01 from "./components/Examples/States";
import LifecyclesExample from "./components/Examples/Lifecycles";
import RenderingList from "./components/Examples/Lists";
import ControlledForm from "./components/ControlledForms";
import UncontrolledForm from "./components/UncontrolledForm";
import HTTPFetch from "./components/HTTPCallouts";
import MenuNavigation from "./components/MenuNavigation";

function App() {
  let propsExample = { day: "Friday", buttonText: "Click Here!!" };
  let condRend = false;
  return (
    <BrowserRouter>
      <Fragment>
        <div>Fragmented Div</div>
        <div className="App App-bgColor">
          <header className="App-header">
            <MenuNavigation />
          </header>
          <HTTPFetch />
          <UncontrolledForm />
          <ControlledForm />
          <RenderingList />
          <RenderingList props={condRend} />
          <LifecyclesExample />
          <PropsExample01 day="Friday" />
          <PropsExample02 day="Friday" buttonText="Click Here!!" />
          <PropsExample02 {...propsExample} />
          <StatesExample01 />
        </div>
        <div>Fragmented Div</div>
      </Fragment>
    </BrowserRouter>
  );
}

// function App() {
//   let propsExample = { day: "Friday", buttonText: "Click Here!!" };
//   let condRend = false;
//   return (
//     <Fragment>
//       <div>Fragmented Div</div>
//       <div className="App App-bgColor">
//         <header className="App-header">
//           <HTTPFetch />
//         </header>
//         <UncontrolledForm />
//         <ControlledForm />
//         <RenderingList />
//         <RenderingList props={condRend} />
//         <LifecyclesExample />
//         <PropsExample01 day="Friday" />
//         <PropsExample02 day="Friday" buttonText="Click Here!!" />
//         <PropsExample02 {...propsExample} />
//         <StatesExample01 />
//       </div>
//       <div>Fragmented Div</div>
//     </Fragment>
//   );
// }

export default App;
