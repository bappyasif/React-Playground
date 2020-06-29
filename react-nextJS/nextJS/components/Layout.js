import Navs from "./Navs";

let Layout = ({ children, mainHeading, footer }) => (
  <div>
    <Navs />
    <h4>{mainHeading}</h4>
    <hr />
    {children}
    <hr />
    <h4>{footer}</h4>
  </div>
);

export default Layout;

/**
 let Layout = ({ children }) => (
  <div>
    <Navs />
    {children}
  </div>
);
 */

/**
 * Withouot destructuring
 let Layout = (props) => (
  <div>
    <Navs />
    {props.children}
  </div>
);
 */
