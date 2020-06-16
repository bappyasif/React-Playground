import React from "react";
// import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import CustomHeader from "./components/CustomHeader";
// import CustomFooter from "./components/CustomFooter";
// import HomePage from "./Views/HomePage";
// import AboutUs from "./Views/AboutUs";
// import ContactUs from "./Views/ContactUs";
// import ProductDetails from "./Views/ProductPage";

// function App() {
//   return (
//     <div className="App">
//       <div className="relative pb-10 min-h-screen">
//         <Router>
//           <header className="text-center font-bold text-blue-500">
//             <div>Greetings Humans</div>
//           </header>
//           <header>
//             <CustomHeader />
//           </header>
//           <Switch>
//             <Route exact path="/">
//               <HomePage />
//             </Route>
//             <Route path="/about">
//               <AboutUs />
//             </Route>
//             <Route path="/contact">
//               <ContactUs />
//             </Route>
//             <Route path="/product/:id">
//               <ProductDetails />
//             </Route>
//           </Switch>
//           <footer>
//             <CustomFooter />
//           </footer>
//         </Router>
//       </div>
//     </div>
//   );
// }

import Header from "./components/tryouts/Header";
import Footer from "./components/tryouts/Footer";
import HomePage from "../src/Views/Tryouts/HomePage";
import AboutUs from "../src/Views/Tryouts/AboutUs";
import ProductPage from "./Views/Tryouts/ProductPage";
import ProductListings from "./components/tryouts/ProductListings";

function App() {
  return (
    <div className="App">
      <div className="relative pb-10 min-h-screen bg-gray-400">
        <Router>
          <header className="text-center font-bold text-blue-500">
            <div>Greetings Humans</div>
          </header>
          <header>
            <Header />
          </header>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route path="/products">
              <ProductListings />
            </Route>
          </Switch>

          <footer>
            <Footer />
          </footer>
        </Router>
      </div>
    </div>
  );
}

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // import Navigation from "./components/NavigationIcon";
// import AboutUs from "../src/Views/AboutUs";
// import ContactUs from "../src/Views/ContactUs";

// function App() {
//   return (
//     <div className="App">
//       <div className="relative pb-10 min-h-screen">
//         <Router>
//           <header className="text-center font-bold text-blue-500">
//             <div>Greetings Humans</div>
//           </header>
//           <header>
//             <Header />
//           </header>

//           <Switch>
//             <Route path="/about-us">
//               <AboutUs />
//             </Route>
//             <Route path="/contact-us">
//               <ContactUs />
//             </Route>
//           </Switch>

//           <footer>
//             <Footer />
//           </footer>
//         </Router>
//       </div>
//     </div>
//   );
// }

export default App;
