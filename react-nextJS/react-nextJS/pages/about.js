// Used For client side nnavigation,as in no reloads required.
import Link from "next/link";

let customStyle = {
  color: "teal",
  borderLeft: "11px solid silver",
  padding: "11px",
  borderColor: "red",
};

let about = () => (
  <div>
    <h4>About Page</h4>
    <Link href="/">
      <a style={customStyle}>Home Page</a>
    </Link>

    <p>lorem ipsum</p>
  </div>
);

export default about;

/**
 * // Upon click page reloads
 let about = () => (
    <div>
      <h4>About Page</h4>
        <a href="/">Home Page</a>
    </div>
  );
 */
