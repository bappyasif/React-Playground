// Used For client side nnavigation,as in no reloads required.
import Link from "next/link";
import Head from "next/head";

import Navs from "../components/Navs";
import Layout from "../components/Layout";
// import withLayout from "../components/Layout";

let exampleIndex = () => (
  <div>
    {/* Whatever is within Layout tag considererd as props and gets rendred
    from Layout components as props.children */}
    <Layout
      mainHeading="Built With React NextJS"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Learning NextJS</title>
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs */}
      {/* <Navs /> */}
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
    </Layout>

    <div>
      <Head>
        <title>Learning NextJS</title>
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs */}
      <Navs />
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
  </div>
);

export default exampleIndex;

/**
 let exampleIndex = () => (
  <div>
    {/* Whatever is within Layout tag considererd as props and gets rendred
    from Layout components as props.children /}
    <Layout
      mainHeading="Built With React NextJS"
      footer={`Copyright ${new Date().getFullYear()}`}
    >
      <Head>
        <title>Learning NextJS</title>
        <meta name="description" content="React app with NextJS" />
        <meta name="keywords" content="react nextJS" />
        <meta name="author" content="aBappy" />
                  <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
            integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
            crossorigin="anonymous"
          ></link>
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs /}
      {/* <Navs /> /}
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

      {/* Scoped styling /}
      <style jsx>{`
        p {
          color: coral;
          font-size: 29px;
        }
      `}</style>
    </Layout>

    <div>
      <Head>
        <title>Learning NextJS</title>
        <meta name="description" content="React app with NextJS" />
        <meta name="keywords" content="react nextJS" />
        <meta name="author" content="aBappy" />
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs /}
      <Navs />
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

      {/* Scoped styling /}
      <style jsx>{`
        p {
          color: coral;
          font-size: 29px;
        }
      `}</style>
    </div>
  </div>
);
 */

/**
 let exampleIndex = () => (
  <div>
    // {/* Whatever is within Layout tag considererd as props and gets rendred
    // from Layout components as props.children /}
    <Layout>
      <Head>
        <title>Learning NextJS</title>
        <meta name="description" content="React app with NextJS" />
        <meta name="keywords" content="react nextJS" />
        <meta name="author" content="aBappy" />
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs /}
      {/* <Navs /> /}
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

      {/* Scoped styling /}
      <style jsx>{`
        p {
          color: coral;
          font-size: 29px;
        }
      `}</style>
    </Layout>

    <div>
      <Head>
        <title>Learning NextJS</title>
        <meta name="description" content="React app with NextJS" />
        <meta name="keywords" content="react nextJS" />
        <meta name="author" content="aBappy" />
      </Head>
      <h4>Hello NextJS</h4>
      {/* From Navs /}
      <Navs />
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

      {/* Scoped styling /}
      <style jsx>{`
        p {
          color: coral;
          font-size: 29px;
        }
      `}</style>
    </div>
  </div>
);
 */

// let exampleIndex = () => (
//   <div>
//     <Head>
//       <title>Learning NextJS</title>
//       <meta name="description" content="React app with NextJS" />
//       <meta name="keywords" content="react nextJS" />
//       <meta name="author" content="aBappy" />
//     </Head>
//     <h4>Hello NextJS</h4>
//     {/* From Navs */}
//     {/* <Navs /> */}
//     <Link href="/about">
//       <a
//         style={{
//           color: "teal",
//           borderLeft: "11px solid silver",
//           padding: "11px",
//           borderColor: "red",
//         }}
//       >
//         About Page
//       </a>
//     </Link>

//     <p>lorem ipsum</p>

//     {/* Scoped styling */}
//     <style jsx>{`
//       p {
//         color: coral;
//         font-size: 29px;
//       }
//     `}</style>
//   </div>
// );

// export default withLayout(exampleIndex);

/**
 * // Upon click page reloads
 let exampleIndex = () => (
    <div>
      <h4>Hello NextJS</h4>
        <a href="/about">About Page</a>
    </div>
  );
 */
