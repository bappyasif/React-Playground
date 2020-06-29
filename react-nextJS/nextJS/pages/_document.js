import Document, { Head, Main, NextScript } from "next/document";

class ExampleDocument extends Document {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="description" content="React app with NextJS" />
          <meta name="keywords" content="react nextJS" />
          <meta name="author" content="aBappy" />
          <link rel="stylesheet" href="/static/styles.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
            integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
            crossorigin="anonymous"
          ></link>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default ExampleDocument;
