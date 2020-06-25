// Used For client side nnavigation,as in no reloads required.
import Link from "next/link";

let exampleIndex = () => (
  <div>
    <h4>Hello NextJS</h4>
    <Link href="/about">
      <a
        style={{
          color: "teal",
          borderLeft: "11px solid silver",
          padding: "11px",
          borderColor: "red",
        }}
      >
        About Page
      </a>
    </Link>

    <p>lorem ipsum</p>

    {/* Scoped styling */}
    <style jsx>{`
      p {
        color: coral;
        font-size: 29px;
      }
    `}</style>
  </div>
);

export default exampleIndex;

/**
 * // Upon click page reloads
 let exampleIndex = () => (
    <div>
      <h4>Hello NextJS</h4>
        <a href="/about">About Page</a>
    </div>
  );
 */
