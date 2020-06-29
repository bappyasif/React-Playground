// Used For client side nnavigation,as in no reloads required.
import Link from "next/link";

import Navs from "../components/Navs";
import Layout from "../components/Layout";

let customStyle = {
  color: "teal",
  borderLeft: "11px solid silver",
  padding: "11px",
  borderColor: "red",
};

let about = () => (
  <div>
    {/* Whatever is within Layout tag considererd as props and gets rendred 
    from Layout components as props.children */}
    <Layout mainHeading="About Page Main Heading" footer="Copyrights @abappy">
      {/* <Navs /> */}
      <h4>About Page</h4>
      <Link href="/">
        <a style={customStyle}>Home Page</a>
      </Link>

      <p>lorem ipsum</p>
    </Layout>
    <div>
      <Navs />
      <h4>About Page</h4>
      <Link href="/">
        <a style={customStyle}>Home Page</a>
      </Link>

      <p>lorem ipsum</p>
    </div>
  </div>
);

export default about;

/**
 <Layout>
      {/* <Navs /> /}
      <h4>About Page</h4>
      <Link href="/">
        <a style={customStyle}>Home Page</a>
      </Link>

      <p>lorem ipsum</p>
    </Layout>
    <div>
      <Navs />
      <h4>About Page</h4>
      <Link href="/">
        <a style={customStyle}>Home Page</a>
      </Link>

      <p>lorem ipsum</p>
    </div>
 */

/**
 * // Upon click page reloads
 let about = () => (
    <div>
      <h4>About Page</h4>
        <a href="/">Home Page</a>
    </div>
  );
 */
