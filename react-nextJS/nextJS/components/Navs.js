import Link from "next/link";

let Navs = () => (
  <div className="demo-nav">
    <img src="/static/icon.png" alt="icon example" height="49" />
    <Link href="/">
      <a>Home Page</a>
    </Link>
    {/* <br /> */}
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/news">
      <a>News Page</a>
    </Link>
    <Link href="/fresh">
      <a>Fresh News</a>
    </Link>
    <style jsx>
      {`
        a,
        img {
          padding: 11px;
        }
      `}
    </style>
  </div>
);

export default Navs;

/**
 let Navs = () => {
  return (
    <div>
      <img src="/static/icon.png" alt="icon example" height="49" />
      <Link href="/">
        <a>Home Page</a>
      </Link>
  
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
};
 */
