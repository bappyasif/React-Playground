import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import FirstComponent from "./components/Greet"; // Default Import
import Greet from "./components/Greet"; // Default Import
// import { Greet } from "./components/Greet"; // Inlline Import
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import CLickFunction from "./components/FunctionClick";
import ClickClass from "./components/ClassClick";
import BindEvents from "./components/EventBind";
import ParentComponents from "./components/ParentComponent";
import UserGreetings from "./components/UserGreeting";
import NamesList from "./components/NameList";
import PersonsList from "./components/PersonsList";
import StyleSheet from "./components/Stylesheet";
import InlineStylesheet from "./components/InlineStyling";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import FormComponent from "./components/Form";
// import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import Fragment from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComponent from "./components/PureComponent";
import ComponentContainer from "./components/ComponentContainer";
import RefsComp from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Character from "./components/CharacterName";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import UserRenderPropsExample from "./components/UserRenderPropsExample";
import CounterRenderPropsExample from "./components/CounterRenderPropsExample";
import ContextComponentC from "./components/ContextComponentC";
import { ContextProvider } from "./components/userContext";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <FirstComponent /> */}
        {/* <Form /> */}

        {/* <h4>Component Context</h4>
        <ContextComponentC /> */}

        <h4>Component Context</h4>
        <ContextProvider value="aBappy">
          <ContextComponentC />
        </ContextProvider>

        {/* <h4>Component Context</h4>

        <ContextComponentC /> */}

        <CounterRenderPropsExample>
          {(count, increment) => (
            <ClickCounter2 count={count} incrementCount={increment} />
          )}
        </CounterRenderPropsExample>

        <CounterRenderPropsExample>
          {(count, increment) => (
            <HoverCounter2 count={count} incrementCount={increment} />
          )}
        </CounterRenderPropsExample>

        {/* <CounterRenderPropsExample
          render={(count, increment) => (
            <ClickCounter2 count={count} incrementCount={increment} />
          )}
        />

        <CounterRenderPropsExample
          render={(count, increment) => (
            <HoverCounter2 count={count} incrementCount={increment} />
          )}
        /> */}

        {/* <ClickCounter2 />
        <HoverCounter2 /> */}
        {/* <UserRenderPropsExample name="aBappy" /> */}
        {/* <UserRenderPropsExample
          name={(isUserLoggedIn) => (isUserLoggedIn ? "aBappy" : "Stranger")}
        /> */}
        <UserRenderPropsExample
          render={(isUserLoggedIn) => (isUserLoggedIn ? "aBappy" : "Stranger")}
        />

        <ClickCounter exclam="!!" />
        <ClickCounter />
        <HoverCounter />
        {/* <HoverCounter /> */}

        <ErrorBoundary>
          <Character characterName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Character characterName="Superman" />
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <Character characterName="Joker" />
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
          <Character characterName="Batman" />
          <Character characterName="Superman" />
          <Character characterName="Joker" />
        </ErrorBoundary> */}
        <PortalDemo />
        <FRParentInput />
        <FocusInput />
        <RefsComp />
        <ComponentContainer />
        <PureComponent />
        <Hello />
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <FirstComponent /> */}
//         {/* <Form /> */}
//         <PortalDemo />
//         <FRParentInput />
//         <FocusInput />
//         <RefsComp />
//         <ComponentContainer />
//         <PureComponent />
//         <Table />
//         <Fragment />
//         <LifecycleA />
//         <FormComponent />
//         <h2 className="error">Error Styling</h2>
//         <h2 className={styles.success}>Success Styling</h2>
//         <InlineStylesheet />
//         <InlineStylesheet />
//         <StyleSheet primary={true} />
//         <StyleSheet />
//         <PersonsList />
//         <NamesList />
//         <UserGreetings />
//         <ParentComponents />
//         <BindEvents />
//         <ClickClass />
//         <CLickFunction />
//         <Message />
//         {/* <Counter /> */}
//         <Counter value="2" />
//         <Greet name="aBappy" comiconCharacter="BatMan">
//           <button>Action</button>
//         </Greet>
//         <Greet name="bSarkar" comiconCharacter="SuperMan">
//           <p>This Is Children Props</p>
//         </Greet>
//         <Welcome comiconCharacter="BatMan" />
//         <Welcome comiconCharacter="SuperMan" />
//         <Hello />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <FirstComponent /> */}
//         <Greet />
//         <Welcome />
//         <Hello />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hello World!!</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World!!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
